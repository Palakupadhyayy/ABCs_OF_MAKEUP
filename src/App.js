// Importing CSS and the Latest Routing Components for larger apps from react-router-dom
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importing Pages & Components from My Components Folder
import Layout from './MyComponents/Layout';
import Carousel from './MyComponents/Carousel';
import Content from './MyComponents/Content';
import MakeUps from './MyComponents/MakeUps';
import Products from './MyComponents/Products';
import Quiz from './MyComponents/Quiz';
import Registration from './MyComponents/Registration';
import Contact from './MyComponents/Contact';

// Setting Up Routes
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Carousel title="This is my Carousel" />{/* Here, children = <Carousel /> */}
        <Content title="What is ABC of MakeUp?" /> {/* Here, children = <Content /> */}
        <Products title="MakeUp Products"/>
        <MakeUps title="Ocassional MakeUp Looks" /> {/* Here, children = <MakeUps /> */}
        <Quiz title="Answer the Quiz"/>
        <Registration title="Register Here"/>
      </Layout>
    )
  },
  {
    path: '/about',
    element: (
      <Layout>
        <Content title="What is ABC of MakeUp?" />
      </Layout>
    )
  },
  {
    path: '/products',
    element: (
      <Layout>
        <Products title="MakeUp Products" />
      </Layout>
    )
  },
  {
    path: '/tutorials',
    element: (
      <Layout>
        <MakeUps title="Ocassional MakeUp Looks" />
      </Layout>
    )
  },
  {
    path: '/contact',
    element: (
      <Layout>
        <Contact title="Contact Me" />
      </Layout>
    )
  },
  {
    path: '/quiz',
    element: (
      <Layout>
        <Quiz title="Answer the Quiz"/>
      </Layout>
    )
  },
  {
    path: '/register',
    element: (
      <Layout>
        <Registration title="Register Here" />
      </Layout>
    )
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
