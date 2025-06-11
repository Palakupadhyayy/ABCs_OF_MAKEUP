import React, { useState } from 'react';
import './CssComponents/MakeUps.css'

export default function Makeup(props) {

  // State to handle the toggling of each makeup types
  // Basic Syntax: const [state, setstate] = useState(initial value);

  const [isEveryOpen, setEveryOpen] = useState(false);
  const [isSoftOpen, setSoftOpen]= useState(false);
  const [isCleanOpen, setCleanOpen]= useState(false);
  const [isPartyOpen, setPartyOpen] = useState(false);
  const [isBridalOpen, setBridalOpen] = useState(false);

  // Toggle functions
  const toggleEveryDropdown = () => setEveryOpen(!isEveryOpen);
  const toggleSoftDropdown = () => setSoftOpen(!isSoftOpen);
  const toggleCleanDropdown = () => setCleanOpen(!isCleanOpen);
  const togglePartyDropdown = () => setPartyOpen(!isPartyOpen);
  const toggleBridalDropdown = () => setBridalOpen(!isBridalOpen);

  return (
    <div className="makeups">
      <h1>{props.title}</h1>     
      <p>Explore stunning makeup styles for Every occasion, from casual to glam looks for special events!</p>
      <div>
        <img src="/images/makeups/Makeup-tutorial.jpg" alt="Makeup-tutorial" className="makeup-image" />
      </div>
      <br /> 
      <div className="container"> 
      <h3>Makeup Styles for Different Occasions!</h3>

        {/* Every Makeup Dropdown */}
        <h4 onClick={toggleEveryDropdown} style={{ cursor: 'pointer' }}>
          Every / Casual Makeup <i className={`${isEveryOpen ? 'up' : 'down'}`}></i>
        </h4>
        {isEveryOpen && (
          <div className="MakeupDetails">
             <ul>
              <li>
                <div className="list-products">
                  <h6>List of Products Used</h6>
                  <ul>
                      <li>Cetaphil Moisturizing Lotion</li>
                      <li>Minimalist Sunscreen SPF 50</li>
                      <li>Insight 3-in-1 Primer</li>
                      <li>Maybelline Fit Me Foundation</li>
                      <li>Maybelline Fit Me Concealer</li>
                      <li>Maybelline Fit Me Compact Powder</li>
                      <li>Insight Blush (Peachy shade)</li>
                      <li>Wet n Wild Ultimate Brow Retractable</li>
                      <li>Maybelline Lash Sensational Mascara</li>
                      <li>Maybelline Baby Lips Lip Balm</li>
                  </ul>
                  </div>                              
                </li>

              <li>
                <div className="video-guide">
                  <h6>Step-by-step Guide</h6>
                  <ul>
                      <li><strong>Step 1:</strong> Cleanse your face, apply moisturizer, and don't forget sunscreen.</li>
                      <li><strong>Step 2:</strong> Apply a primer to smooth your skin and help makeup last longer.</li>
                      <li><strong>Step 3:</strong> Apply a lightweight foundation evenly for a natural finish.</li>
                      <li><strong>Step 4:</strong> Use concealer to cover dark circles, blemishes, and redness. Blend well.</li>
                      <li><strong>Step 5:</strong> Lightly dust powder to set the foundation and control shine.</li>
                      <li><strong>Step 6:</strong> Apply a peachy blush to the apples of your cheeks for a healthy glow.</li>
                      <li><strong>Step 7:</strong> Fill in your eyebrows with a brow pencil or powder to define them.</li>
                      <li><strong>Step 8:</strong> Curl your lashes and apply mascara for open, defined eyes.</li>
                      <li><strong>Step 9:</strong> Apply a tinted lip balm to moisturize and add subtle color to your lips.</li>
                  </ul>                       
                </div>
              </li>

              <li>
                <div className="tutorial">
                  <h6>Video Tutorial</h6> 
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/Lw4AXu5BbZI?si=_lnyyIfI2kylTlw3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>              
              </li>
              <li>
                </li>
            </ul>
          </div>
        )}

      {/* Soft Glam Makeup Dropdown */}
          <h4 onClick={toggleSoftDropdown} style={{ cursor: 'pointer' }}>
         Soft Glam  Makeup <i className={`${isSoftOpen ? 'up' : 'down'}`}></i>
       </h4>
       {isSoftOpen && (
         <div className="MakeupDetails">
          <ul>
              <li>
                <div className="list-products">
                  <h6>List of Products Used</h6>
                  <ul>
                    <li>Benefit Cosmetics Professional Primer</li>
                    <li>Too Faced Born This Way Foundation (Porcelain)</li>
                    <li>L'Oréal Infallible Foundation (Shade 200)</li>
                    <li>Benefit Born This Way Multiuse Sculpting Concealer (Porcelain)</li>
                    <li>NARS Radiant Creamy Concealer (Custard)</li>
                    <li>Chanel Cream Bronzer</li>
                    <li>NYX Cream Bronzer (Alternative)</li>
                    <li>L'Oréal Bronze Paradise Powder Bronzer (Back to Bronze)</li>
                    <li>Catrice Cheek Lover Blush (Blooming Hibiscus)</li>
                    <li>NYX Lip Pencil (Peekaboo Neutral)</li>
                    <li>NYX Shine Loud Lipstick (Magic Maker)</li>
                    <li>NYX Shine Loud Lipstick (Ambition Statement)</li>
                    <li>Fenty Beauty Gloss Bomb (Fenty Glow)</li>
                    <li>Essence Eyebrow Designer Pencil (Black)</li>
                    <li>Essence Lash and Brow Gel Mascara</li>
                    <li>Charlotte Tilbury Easy Eye Palette</li>
                    <li>Dior Backstage Glow Face Palette</li>
                    <li>Essence Lash Princess False Lash Effect Mascara (Green Bottle)</li>
                    <li>NYX Epic Ink Liner (Brown)</li>
                    <li>HD Finishing Powder (Translucent)</li>
                  </ul>

                  </div>                              
                </li>

              <li>
                <div className="video-guide">
                  <h6>Step-by-step Guide</h6>
                  <ul>
                      <li><strong>Step 1:</strong> Prep your T-zone and oily areas with Benefit Cosmetics Professional Primer using your fingertips.</li>
                      <li><strong>Step 2:</strong> Mix Too Faced Born This Way Foundation (Porcelain) and L'Oréal Infallible Foundation (Shade 200) on the back of your hand and blend with a beauty blender.</li>
                      <li><strong>Step 3:</strong> Tap Benefit Born This Way Multiuse Sculpting Concealer (Porcelain) onto the undereye using a damp beauty blender—use minimal product!</li>
                      <li><strong>Step 4:</strong> Spot-conceal blemishes and discoloration with NARS Radiant Creamy Concealer (Custard), blending seamlessly.</li>
                      <li><strong>Step 5:</strong> Apply Chanel Cream Bronzer (or NYX Cream Bronzer) following a "3-shape" around forehead, cheeks, and jawline. Blend well!</li>
                      <li><strong>Step 6:</strong> Lightly set cream bronzer with L'Oréal Bronze Paradise Powder Bronzer (Back to Bronze).</li>
                      <li><strong>Step 7:</strong> Sculpt cheeks and nose by contouring with bronzer and blending powder on top for a softer finish.</li>
                      <li><strong>Step 8:</strong> Apply Catrice Cheek Lover Blush (Blooming Hibiscus) high on the cheekbones for a lifted effect; sweep lightly across the nose too!</li>
                      <li><strong>Step 9:</strong> Set everything with HD Finishing Powder (Translucent), focusing under the eyes and on the T-zone.</li>
                      <li><strong>Step 10:</strong> Highlight cheekbones, brow bone, inner corners of eyes, nose, and Cupid’s bow using a shade from the Charlotte Tilbury Easy Eye Palette.</li>
                      <li><strong>Step 11:</strong> Fill in brows using Essence Eyebrow Designer Pencil (Black) and set with Essence Lash and Brow Gel Mascara.</li>
                      <li><strong>Step 12:</strong> Blend a light eyeshadow into the crease using the Charlotte Tilbury Easy Eye Palette for subtle definition.</li>
                      <li><strong>Step 13:</strong> Highlight the inner corners with Dior Backstage Glow Face Palette for extra glow!</li>
                      <li><strong>Step 14:</strong> Curl lashes and apply Essence Lash Princess False Lash Effect Mascara (Green Bottle). Clean up smudges if needed!</li>
                      <li><strong>Step 15:</strong> Define lash line or clean up mistakes with NYX Epic Ink Liner (Brown) for a seamless finish.</li>
                      <li><strong>Step 16:</strong> Line lips with NYX Lip Pencil (Peekaboo Neutral), focusing on overlining the center.</li>
                      <li><strong>Step 17:</strong> Apply NYX Shine Loud Lipstick (Ambition Statement) on outer lips and (Magic Maker) in the center. Blend!</li>
                      <li><strong>Step 18:</strong> Finish with Fenty Beauty Gloss Bomb (Fenty Glow) for a juicy, luminous lip.</li>
                    </ul>
                </div>
              </li>

              <li>
                <div className="tutorial">
                  <h6>Video Tutorial</h6> 
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/AR8HkvKJ-7k?si=UgXX0NlhZItG-37i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>              
              </li>
            </ul>
          </div>
        )}

          {/*Clean girl Makeup Dropdown */}

          <h4 onClick={toggleCleanDropdown} style={{ cursor: 'pointer' }}>
          Clean Girl Makeup <i className={`${isCleanOpen ? 'up' : 'down'}`}></i>
        </h4>
        {isCleanOpen && (
          <div className="MakeupDetails">
             <ul>
              <li>
                <div className="list-products">
                  <h6>List of Products Used</h6>
                  <ul>
                      <li>Cetaphil Moisturizing Lotion</li>
                      <li>Minimalist Sunscreen SPF 50</li>
                      <li>Insight 3-in-1 Primer</li>
                      <li>Maybelline Fit Me Foundation</li>
                      <li>Maybelline Fit Me Concealer</li>
                      <li>Maybelline Fit Me Compact Powder</li>
                      <li>Insight Blush (Peachy shade)</li>
                      <li>Wet n Wild Ultimate Brow Retractable</li>
                      <li>Maybelline Lash Sensational Mascara</li>
                      <li>Maybelline Baby Lips Lip Balm</li>
                  </ul>
                  </div>                              
                </li>

              <li>
                <div className="video-guide">
                  <h6>Step-by-step Guide</h6>
                  <ul>
                      <li><strong>Step 1:</strong> Cleanse your face, apply moisturizer, and don't forget sunscreen.</li>
                      <li><strong>Step 2:</strong> Apply a primer to smooth your skin and help makeup last longer.</li>
                      <li><strong>Step 3:</strong> Apply a lightweight foundation evenly for a natural finish.</li>
                      <li><strong>Step 4:</strong> Use concealer to cover dark circles, blemishes, and redness. Blend well.</li>
                      <li><strong>Step 5:</strong> Lightly dust powder to set the foundation and control shine.</li>
                      <li><strong>Step 6:</strong> Apply a peachy blush to the apples of your cheeks for a healthy glow.</li>
                      <li><strong>Step 7:</strong> Fill in your eyebrows with a brow pencil or powder to define them.</li>
                      <li><strong>Step 8:</strong> Curl your lashes and apply mascara for open, defined eyes.</li>
                      <li><strong>Step 9:</strong> Apply a tinted lip balm to moisturize and add subtle color to your lips.</li>
                  </ul>                       
                </div>
              </li>

              <li>
                <div className="tutorial">
                  <h6>Video Tutorial</h6> 
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/Lw4AXu5BbZI?si=_lnyyIfI2kylTlw3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>              
              </li>
            </ul>
          </div>
        )}
     
          {/* Party Makeup Dropdown */}

          <h4 onClick={togglePartyDropdown} style={{ cursor: 'pointer' }}>
          Party Makeup <i className={`${isPartyOpen ? 'up' : 'down'}`}></i>
       </h4>
       {isPartyOpen && (
         <div className="MakeupDetails">
           <ul>
              <li>
                <div className="list-products">
                  <h6>List of Products Used</h6>
                  <ul>
                      <li>Face Oil (Lightweight, Non-sticky)</li>
                      <li>Orange Color Corrector</li>
                      <li>Green Color Corrector</li>
                      <li>Darker Brown Concealer</li>
                      <li>Skin-tone Matching Concealer</li>
                      <li>Damp Beauty Blender</li>
                      <li>Foundation Brush / Beauty Blender</li>
                      <li>Flicka Foundation (Shade 02 Ivory)</li>
                      <li>Liquid Blush</li>
                      <li>Multi-Pot Blush Palette</li>
                      <li>Triangular Puff</li>
                      <li>Setting Powder</li>
                      <li>Eyeshadow Palette (Light/Brown shades)</li>
                      <li>Eye Brush Set</li>
                      <li>Glitter Eyeshadow</li>
                      <li>Shimmer Highlighter</li>
                      <li>Eyelash Curler</li>
                      <li>Mascara</li>
                      <li>Eyebrow Pencil (Brown/Black)</li>
                      <li>Contour Palette (Cheek a Boo)</li>
                      <li>Highlighter + Fan Brush</li>
                      <li>Lip Liner</li>
                      <li>Lipstick (Citrus Cosmo Loves)</li>
                      <li>Shimmer Lip Gloss</li>
                      <li>Alcohol-free Makeup Fixer</li>
                  </ul>
                  </div>                              
                </li>

              <li>
                <div className="video-guide">
                  <h6>Step-by-step Guide</h6>
                  <ul>
                      <li><strong>Step 1:</strong> Prep your skin with a lightweight face oil and let it absorb for 5 minutes for a smooth, hydrated base.</li>
                      <li><strong>Step 2:</strong> Apply orange color corrector under the eyes and green corrector on acne spots using your fingers.</li>
                      <li><strong>Step 3:</strong> Cover corrected areas with a darker brown concealer, followed by a skin-tone matching concealer.</li>
                      <li><strong>Step 4:</strong> Blend the concealers with a damp beauty blender using a Soft dab-dab motion (never dry!).</li>
                      <li><strong>Step 5:</strong> Apply foundation (Flicka 02 Ivory) using a brush or beauty blender and extend it down to your neck for an even tone.</li>
                      <li><strong>Step 6:</strong> Apply liquid blush while smiling, following an upward "L" motion toward the temples and a light touch over the nose.</li>
                      <li><strong>Step 7:</strong> Set under-eyes generously with powder using a triangular puff and lightly powder the rest of the face.</li>
                      <li><strong>Step 8:</strong> Bake under the eyes by letting the powder sit, then carefully dust off the excess for a flawless finish.</li>
                      <li><strong>Step 9:</strong> Prime the eyelids with powder and apply a light base eyeshadow shade using a Soft right-left motion.</li>
                      <li><strong>Step 10:</strong> Deepen the crease with a brown shade, blending outward from the outer corner.</li>
                      <li><strong>Step 11:</strong> Dab glitter onto the eyelids using your fingers, then blend gently with a brush; add shimmer below the brow bone.</li>
                      <li><strong>Step 12:</strong> Curl your lashes, apply mascara by pressing the wand against lashes 5–6 times for a fuller look.</li>
                      <li><strong>Step 13:</strong> Fill in eyebrows with a mix of brown and black shades for a natural yet defined arch.</li>
                      <li><strong>Step 14:</strong> Contour under the cheekbones, jawline, and temples with a dark contour shade, blending downward for a chiseled look.</li>
                      <li><strong>Step 15:</strong> Apply highlighter with a fan brush to your nose, cheekbones, neck, and collarbones for a lit-from-within glow.</li>
                      <li><strong>Step 16:</strong> Line your lips with a lip liner, apply Citrus Cosmo Loves Lipstick, and top it off with a shimmer gloss for a party-ready pout.</li>
                      <li><strong>Step 17:</strong> Finish with a generous spritz of alcohol-free makeup fixer to lock Everything in and add that radiant glow!</li>
                    </ul>
                </div>
              </li>

              <li>
                <div className="tutorial">
                  <h6>Video Tutorial</h6> 
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/cUf9QWOc5N0?si=2O5zqWvdOu8LRRMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>              
              </li>
            </ul>
          </div>
        )}

        {/* Bridal Makeup Dropdown */}
        <h4 onClick={toggleBridalDropdown} style={{ cursor: 'pointer' }}>
          Bridal Makeup <i className={`${isBridalOpen ? 'up' : 'down'}`}></i> 
        </h4>
        {isBridalOpen && (
          <div className="MakeupDetails">
            <ul>
              <li>
                <div className="list-products">
                  <h6>List of Products Used</h6>
                  <ul>
                      <li>Cetaphil Moisturizing Lotion</li>
                      <li>Minimalist Sunscreen SPF 50</li>
                      <li>Insight 3-in-1 Primer</li>
                      <li>Maybelline Fit Me Foundation</li>
                      <li>Maybelline Fit Me Concealer</li>
                      <li>Maybelline Fit Me Compact Powder</li>
                      <li>Insight Blush (Peachy shade)</li>
                      <li>Wet n Wild Ultimate Brow Retractable</li>
                      <li>Maybelline Lash Sensational Mascara</li>
                      <li>Maybelline Baby Lips Lip Balm</li>
                  </ul>
                  </div>                              
                </li>

              <li>
                <div className="video-guide">
                  <h6>Step-by-step Guide</h6>
                  <ul>
                      <li><strong>Step 1:</strong> Cleanse your face, apply moisturizer, and don't forget sunscreen.</li>
                      <li><strong>Step 2:</strong> Apply a primer to smooth your skin and help makeup last longer.</li>
                      <li><strong>Step 3:</strong> Apply a lightweight foundation evenly for a natural finish.</li>
                      <li><strong>Step 4:</strong> Use concealer to cover dark circles, blemishes, and redness. Blend well.</li>
                      <li><strong>Step 5:</strong> Lightly dust powder to set the foundation and control shine.</li>
                      <li><strong>Step 6:</strong> Apply a peachy blush to the apples of your cheeks for a healthy glow.</li>
                      <li><strong>Step 7:</strong> Fill in your eyebrows with a brow pencil or powder to define them.</li>
                      <li><strong>Step 8:</strong> Curl your lashes and apply mascara for open, defined eyes.</li>
                      <li><strong>Step 9:</strong> Apply a tinted lip balm to moisturize and add subtle color to your lips.</li>
                  </ul>                       
                </div>
              </li>

              <li>
                <div className="tutorial">
                  <h6>Video Tutorial</h6> 
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/Lw4AXu5BbZI?si=_lnyyIfI2kylTlw3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>              
              </li>
            </ul>
          </div>
        )}      
      </div>
    </div>
  );
}

