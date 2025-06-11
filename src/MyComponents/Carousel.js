import React from 'react'

const Carousel = () => {
  return (
        <div>
                <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" 
                aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="/images/carousel/Chhavi1.jpg" class="d-block w-100" alt="Chhavi"/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>A New Journey!</h5>
                    <p>Unleash your true potential.</p>
                </div>
                </div>

                <div class="carousel-item">
                <img src="/images/carousel/Chhavi2.jpg" class="d-block w-100" alt="Chhavi"/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Groom yourelf!</h5>
                    <p>Learn Everything that you need.</p>
                </div>
                </div>

                <div class="carousel-item">
                <img src="/images/carousel/Chhavi3.jpg" class="d-block w-100" alt="Chhavi"/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>The Perfect You!</h5>
                    <p>ABC that would teach a new lesson of productivity.</p>
                </div>
                </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
    </div>
  )
}

export default Carousel

