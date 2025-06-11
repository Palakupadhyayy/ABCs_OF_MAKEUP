import './CssComponents/Products.css'

export default function Products(props) {
  return (
    <div className="products">
       <h1>{props.title}</h1>  
       <ul>
        <p>Discover the ultimate collection of must-have makeup essentials — from flawless face products to eye-catching eye makeup and creative specialty tools. Whether you're a beginner or a beauty pro, each product in these curated lists will elevate your glam game. 💄✨  
       💡        Shopping links for each item will be added soon, so you can explore and shop your faves directly!</p>
       </ul>
       
        <div className="all-products">
          {/* Skincare Product List */}
          <h3>Skincare Products</h3>
          <div className="skincare">
            <div className="product">              
                  <img src="/images/skincare/Facewash.jpg" alt="Facewash"/>                         
              <div className="product-info">
                <h6 className="product-title">Facewash</h6>
                <h6 className="product-price">₹</h6>
                <a href=" https://amzn.in/d/06E9KzM" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

            <div className="product">
              <img src="/images/skincare/Cleanser.jpg" alt="Cleanser"/>
              <div className="product-info">
                <h6 className="product-title">Cleanser</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://amzn.in/d/bfXDWDe" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

            <div className="product">
              <img src="/images/skincare/SkinToner.jpg" alt="Skin Toner"/>
              <div className="product-info">
                <h6 className="product-title">Skin Toner</h6>
                <h6 className="product-price">$120</h6>
                <a href=" https://amzn.in/d/aWCZr8E" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

            <div className="product">
              <img src="/images/skincare/Serum.jpg" alt="Serum"/>
              <div className="product-info">
                <h6 className="product-title">Serum</h6>
                <h6 className="product-price">$120</h6>
                <a href=" https://amzn.in/d/6CHiHIe" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

            <div className="product">
              <img src="/images/skincare/EyeCream.jpg" alt="Eye Cream"/>
              <div className="product-info">
                <h6 className="product-title">Eye Cream</h6>
                <h6 className="product-price">$120</h6>
                <a href=" https://amzn.in/d/iWg01yP" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

            <div className="product">
              <img src="/images/skincare/Moisturizer.jpg" alt="Moisturizer"/>
              <div className="product-info">
                <h6 className="product-title">Moisturizer</h6>
                <h6 className="product-price">$120</h6>
                <a href=" https://amzn.in/d/iymPl13" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>       

            <div className="product">
              <img src="/images/skincare/Sunscreen.jpg" alt="Sunscreen"/>
              <div className="product-info">
                <h6 className="product-title">Sunscreen</h6>
                <h6 className="product-price">$120</h6>
                <a href=" https://amzn.in/d/efzx144" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>       

            <div className="product">
              <img src="/images/skincare/LipMask.jpg" alt="Lip Mask"/>
              <div className="product-info">
                <h6 className="product-title">Lip Mask</h6>
                <h6 className="product-price">$120</h6>
                <a href=" https://amzn.in/d/gq27nWj" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div> 
            </div>
          <br/><br/><br/> <br/> 
          
          
          {/* Face Product List */}
          <h3>Face Products</h3>
          <div className="face-product"> 
            <div className="product">
              <img src="/images/face-product/Primer.jpg" alt="Primer"/>
              <div className="product-info">
                <h6 className="product-title">Primer</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://example.com" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

            <div className="product">
              <img src="/images/face-product/Foundation.jpg" alt="Foundation"/>
              <div className="product-info">
                <h6 className="product-title">Foundation</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://example.com" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

            <div className="product">
              <img src="/images/face-product/Concealer.jpg" alt="Concealer"/>
              <div className="product-info">
                <h6 className="product-title">Concealer</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://example.com" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

            <div className="product">
              <img src="/images/face-product/Colour_Corrector.jpg" alt="Colour Corrector"/>
              <div className="product-info">
                <h6 className="product-title">Colour Corrector</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://example.com" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

            <div className="product">
              <img src="/images/face-product/Blush.jpg" alt="Blush"/>
              <div className="product-info">
                <h6 className="product-title">Blush</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://example.com" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

            <div className="product">
              <img src="/images/face-product/Contour.jpg" alt="Contour"/>
              <div className="product-info">
                <h6 className="product-title">Contour</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://example.com" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

            <div className="product">
              <img src="/images/face-product/Highlightner.jpg" alt="Highlightner"/>
              <div className="product-info">
                <h6 className="product-title">Highlightner</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://example.com" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

              <div className="product">
              <img src="/images/face-product/Compact_Powder.jpg" alt="Compact Powder"/>
              <div className="product-info">
                <h6 className="product-title">Compact Powder</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://example.com" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

              <div className="product">
              <img src="/images/face-product/LoosePowder.jpg" alt="Loose Powder"/>
              <div className="product-info">
                <h6 className="product-title">Loose Powder</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://www.myntra.com/mailers/makeup/huda-beauty/huda-beauty-easy-bake-loose-baking-&-setting-powder-20g---peach-pie/29522678/buy?utm_source=social_share_pdp&utm_medium=deeplink&utm_campaign=social_share_pdp_deeplink" 
                className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

            <div className="product">
              <img src="/images/face-product/Setting_Spray.jpg" alt="Setting Spray"/>
              <div className="product-info">
                <h6 className="product-title">Setting Spray</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://example.com" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>
       
          <div className="product">
              <img src="/images/face-product/Sponges_&_Brushes.jpg" alt="Sponges & Brushes"/>
              <div className="product-info">
                <h6 className="product-title">Sponges & Brushes</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://dl.flipkart.com/s/4gRbMVuuuN" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

          <div className="product">
              <img src="/images/face-product/Liquid_Tint.jpg" alt="Liquid Tint"/>
              <div className="product-info">
                <h6 className="product-title">Liquid Tint</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://amzn.in/d/9fdZJ9r" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>
          </div>
          
          <br /><br /><br/> <br/> 

          {/* Eye Product List */}
          <h3>Eye Products</h3>     
          <div className="eye-product">
          <div className="product">
              <img src="/images/eye-product/EyeLiner.jpg" alt="Eye Liner"/>
              <div className="product-info">
                <h6 className="product-title">Eye Liner</h6>
                <h6 className="product-price">$120</h6>
                <a href=" https://amzn.in/d/bOk7GMy" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

              <div className="product">
              <img src="/images/eye-product/EyeShadow.jpg" alt="Eye Shadow"/>
              <div className="product-info">
                <h6 className="product-title">Eye Shadow</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://www.myntra.com/mailers/makeup/mattlook/mattlook-sultry-eyes-eyeshadow-palette---14g---holiday-wine-02/27745674/buy?utm_source=social_share_pdp&utm_medium=deeplink&utm_campaign=social_share_pdp_deeplink" 
                className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

            <div className="product">
              <img src="/images/eye-product/EyebrowPencil.jpg" alt="Eyebrow Pencil"/>
              <div className="product-info">
                <h6 className="product-title">Eyebrow Pencil</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://www.myntra.com/mailers/makeup/maybelline/maybelline-new-york-tattoo-brow-36h-pigment-waterproof-brow-pencil---natural-brown/19805246/buy?utm_source=social_share_pdp&utm_medium=deeplink&utm_campaign=social_share_pdp_deeplink" 
                className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

            <div className="product">
              <img src="/images/eye-product/FalseLashes.jpg" alt="False Lashes"/>
              <div className="product-info">
                <h6 className="product-title">False Lashes</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://www.myntra.com/mailers/makeup/renee/renee-sasha-the-blink-reusable-&-handcrafted-false-eyelashes---black/23708412/buy?utm_source=social_share_pdp&utm_medium=deeplink&utm_campaign=social_share_pdp_deeplink" 
                className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

            <div className="product">
              <img src="/images/eye-product/KohlPencil.jpg" alt="Kohl Pencil"/>
              <div className="product-info">
                <h6 className="product-title">Kohl Pencil</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://www.myntra.com/mailers/makeup/renee/renee-midnight-kohl-kajal-pencil---1.5g---black/27362474/buy?utm_source=social_share_pdp&utm_medium=deeplink&utm_campaign=social_share_pdp_deeplink" 
                className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

            <div className="product">
              <img src="/images/eye-product/GelLiner.jpg" alt="Gel Liner"/>
              <div className="product-info">
                <h6 className="product-title">Gel Liner</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://www.nykaa.com/maybelline-eye-studio-lasting-drama-gel-eyeliner-black/p/8997?ptype=product&skuId=8997&utm_content=ads&utm_source=GooglePaid&utm_medium=PLA&utm_campaign=PerformanceMax_Maybelline_Feed&gad_source=1&gad_campaignid=21289565188&gclid=Cj0KCQjwlMfABhCWARIsADGXdy99j0b4zH8sLItVyTsV8Vwz5LZni-IMsn8hI_GjZgCwt3CDjFHgjbkaAl_4EALw_wcB" 
                className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

            <div className="product">
              <img src="/images/eye-product/Mascara.jpg" alt="Mascara"/>
              <div className="product-info">
                <h6 className="product-title">Mascara</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://www.myntra.com/mailers/makeup/blue-heaven/blue-heaven-black-lash-twist-mascara-12-ml/14651050/buy?utm_source=social_share_pdp&utm_medium=deeplink&utm_campaign=social_share_pdp_deeplink " 
                className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

            <div className="product">
              <img src="/images/eye-product/GlitterEyeShadow.jpg" alt="Glitter Eye Shadow"/>
              <div className="product-info">
                <h6 className="product-title">Glitter Eye Shadow</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://www.nykaa.com/miss-claire-baked-eyeshadow/p/270220?productId=270220&pps=1&hlp=true&skuId=270217" 
                className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>
          </div>
          <br/> <br/> <br/> <br/> 

          {/* Lip Product List */}
          <h3>Lip Products</h3>
          <div className="lip-product">
              <div className="product">
              <img src="/images/lip-product/LipBalm.jpg" alt="Lip Balm"/>
              <div className="product-info">
                <h6 className="product-title">Lip Balm</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://amzn.in/d/7HujBwX" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

            <div className="product">
              <img src="/images/lip-product/LipGloss.jpg" alt="Lip Gloss"/>
              <div className="product-info">
                <h6 className="product-title">Lip Gloss</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://amzn.in/d/8rXuJkx" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

            <div className="product">
              <img src="/images/lip-product/LipLiner.jpg" alt="Lip Liner"/>
              <div className="product-info">
                <h6 className="product-title">Lip Liner</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://amzn.in/d/82lbxP9" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

            <div className="product">
              <img src="/images/lip-product/Lipstick.jpg" alt="Lipstick"/>
              <div className="product-info">
                <h6 className="product-title">Lipstick</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://amzn.in/d/9x40Uwt" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

            <div className="product">
              <img src="/images/lip-product/LiquidLipstick.jpg" alt="Liquid Lipstick"/>
              <div className="product-info">
                <h6 className="product-title">Liquid Lipstick</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://amzn.in/d/4Zxfb2r" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

            <div className="product">
              <img src="/images/lip-product/LipOil.jpg" alt="Lip Oil"/>
              <div className="product-info">
                <h6 className="product-title">Lip Oil</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://hokmakeup.com/products/eveline-cosmetics-wonder-match-soft-touch-lip-oil" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>       

            <div className="product">
              <img src="/images/lip-product/LiquidTint.jpg" alt="Liquid Tint"/>
              <div className="product-info">
                <h6 className="product-title">Liquid Tint</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://example.com" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>       

            <div className="product">
              <img src="/images/lip-product/LipPlumb.jpg" alt="Lip Plumb"/>
              <div className="product-info">
                <h6 className="product-title">Lip Plumb</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://www.trbt.ly/l/2ZVczN" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>       
          </div>
          <br/> <br/> <br/> <br/> 

          {/* Haircare Product List */}
          <h3>Haircare Products</h3>
          <div className="haircare">
              <div className="product">
              <img src="/images/haircare/HairOil.jpg" alt="Hair Oil"/>
              <div className="product-info">
                <h6 className="product-title">Hair Oil</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://amzn.in/d/dik3y63" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

            <div className="product">
              <img src="/images/haircare/Shampoo.jpg" alt="Shampoo"/>
              <div className="product-info">
                <h6 className="product-title">Shampoo</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://amzn.in/d/jjhfFog" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

            <div className="product">
              <img src="/images/haircare/Conditioner.jpg" alt="Conditioner"/>
              <div className="product-info">
                <h6 className="product-title">Conditioner</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://www.nykaa.com/l-oreal-paris-hyaluron-moisture-72h-moisture-sealing-conditioner-with-hyaluronic-acid/p/14342468?productId=14342468&pps=1&hlp=true" 
                className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

            <div className="product">
              <img src="/images/haircare/HairMask.jpg" alt="Hair Mask"/>
              <div className="product-info">
                <h6 className="product-title">Hair Mask</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://amzn.in/d/iTuGKGV" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

            <div className="product">
              <img src="/images/haircare/HairSerum.jpg" alt="Hair Serum"/>
              <div className="product-info">
                <h6 className="product-title">Hair Serum</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://www.myntra.com/mailers/hair/streax-professional/streax-professional-vitariche-gloss-hair-serum-with-macademia-oil-&-vitamin-e---115-ml/19610484/buy?utm_source=social_share_pdp&utm_medium=deeplink&utm_campaign=social_share_pdp_deeplink" 
                className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>

            <div className="product">
              <img src="/images/haircare/HeatSpray.jpg" alt="Heat Spray"/>
              <div className="product-info">
                <h6 className="product-title">Heat Protecting Spray</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://amzn.in/d/c5cGJfj" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>       

            <div className="product">
              <img src="/images/haircare/HairScrub.jpg" alt="Hair Scrub"/>
              <div className="product-info">
                <h6 className="product-title">Hair Scrub</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://amzn.in/d/amVF67C" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>       

            <div className="product">
              <img src="/images/haircare/HairCream.jpg" alt="Hair Cream"/>
              <div className="product-info">
                <h6 className="product-title">Hair Cream</h6>
                <h6 className="product-price">$120</h6>
                <a href="https://amzn.in/d/0laamtG" className="product-btn"  target="_blank" rel="noreferrer">Buy Now</a>  
              </div>
            </div>   
            </div>   
          </div>
          <br /><br />       
        </div>
  
  )
}

