import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div>

      <section className="image-bg">
      </section>

      <div className="welcome-section section-margin">
          <div className="container">
            <div className="wrapper-home">
                  <div className="wallet">
                      <p className="one-font">Welcome to Share Wallet</p>
                  </div>
          
                  <div className="description">
                      <p className="one-font">You paid for a hotel, Maggie covered the fuel costs and <br/> David did some shopping. Share Wallet does the math for you</p>
                  </div>
          
                  <div className="subscribe">
                      <button>Next</button>
                  </div>

                  <div className="newsletter">
                      <div className="tick-box"></div>
                      <p className="one-font">Subscribe to our newsletter</p> 
                  </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home