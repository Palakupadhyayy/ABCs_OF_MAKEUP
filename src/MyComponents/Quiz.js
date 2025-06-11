import { useState } from 'react';
import './CssComponents/Quiz.css';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What is the first step in a basic makeup routine?",
      options: [
        "Apply foundation",
        "Prime your face",
        "Apply concealer",
        "Set with powder"
      ],
      correct: 1
    },
    {
      id: 2,
      question: "Which makeup product is best for covering dark circles?",
      options: [
        "Foundation",
        "Bronzer",
        "Concealer",
        "Highlighter"
      ],
      correct: 2
    },
    {
      id: 3,
      question: "What does 'baking' mean in makeup terminology?",
      options: [
        "Heating your makeup brushes",
        "Setting powder with heat",
        "Letting loose powder sit before brushing off",
        "Mixing foundation shades"
      ],
      correct: 2
    },
    {
      id: 4,
      question: "Which tool is best for blending eyeshadow?",
      options: [
        "Flat shader brush",
        "Fluffy blending brush",
        "Angled brush",
        "Fan brush"
      ],
      correct: 1
    },
    {
      id: 5,
      question: "What is the purpose of setting spray?",
      options: [
        "To add shimmer to makeup",
        "To remove excess oil",
        "To help makeup last longer",
        "To change foundation color"
      ],
      correct: 2
    }
  ];

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerIndex
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct) {
        score++;
      }
    });
    return score;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResult(false);
  };

  const getScoreMessage = (score) => {
    if (score === 5) return "Perfect! You're a makeup expert! 💄✨";
    if (score >= 4) return "Excellent! You know your makeup well! 💋";
    if (score >= 3) return "Good job! Keep practicing those techniques! 👏";
    if (score >= 2) return "Not bad! Time to brush up on makeup basics! 📚";
    return "Keep learning! Everyone starts somewhere! 💪";
  };

  if (showResult) {
    const score = calculateScore();
    return (
      <div className="quiz-container">
        <div className="quiz-card">
          <div className="result-section">
            <h2 className="result-title">Quiz Complete!</h2>
            <div className="score-display">
              <span className="score-number">{score}</span>
              <span className="score-total">/ {questions.length}</span>
            </div>
            <p className="score-message">{getScoreMessage(score)}</p>
            <button className="quiz-btn primary" onClick={resetQuiz}>
              Take Quiz Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <div className="quiz-header">
          <h2 className="quiz-title">Makeup Knowledge Quiz</h2>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          <p className="question-counter">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <div className="question-section">
          <h3 className="question-text">
            {questions[currentQuestion].question}
          </h3>
          
          <div className="options-container">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option-btn ${
                  selectedAnswers[currentQuestion] === index ? 'selected' : ''
                }`}
                onClick={() => handleAnswerSelect(index)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="quiz-navigation">
          <button 
            className="quiz-btn secondary" 
            onClick={handlePrev}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>
          
          {currentQuestion === questions.length - 1 ? (
            <button 
              className="quiz-btn primary" 
              onClick={handleSubmit}
              disabled={selectedAnswers[currentQuestion] === undefined}
            >
              Submit Quiz
            </button>
          ) : (
            <button 
              className="quiz-btn primary" 
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestion] === undefined}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;