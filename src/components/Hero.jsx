import React from 'react'

const Hero = () => {
  return (
    <main className='hero container'>
      <div className="hero-content">
        <h1>FIND YOUR DREAM SNEKERS</h1>
        <p>Powerful, strong, durable – every athlete and their clothes. With innovative sportswear designed to bring optimum comfort and support, Nike brings to you the best you’ll ever get.</p>
      <div className="hero-btn">
        <button>Shop Now</button>
        <button className='sec-btn'>Category</button>
      </div>
      <div className="shopping">
        <p>Also Available On</p>
        <div className="brand-icon">
            <img src="/a.png" width="45px" alt="amazon-logo" />
            <img src="/flipkart.png" alt="filpcart-logo" />
        </div>
      </div>
      </div>
      <div className="hero-img">
          <img src="hero-image.png" alt="hero-img" />
      </div>
    </main>
  )
}

export default Hero
