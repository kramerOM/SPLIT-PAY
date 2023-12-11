import React from 'react'
import './SignIn.css'

const SignIn = () => {
  return (
    <div>
     
      <section className="sign-in">
        <div className="container">
            <div className="wrapper-signin">
                <div className="form-div-signin">
                    <div className="intro">
                        <h1>Welcome to Share Wallet</h1>
                        <p>Transforming Group finances, One expense at a time</p>
                    </div>
                    <form action="/login" method="post">
                        <h3>Log In</h3>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder="Your Name" name="name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Email</label>
                            <input type="email" placeholder="Your Email" name="email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Password</label>
                            <input type="password" placeholder="Your Password" name="Password"/>
                        </div>
                        <div className="form-group login">
                            <button type="submit">Login</button>
                        </div>
    
                    </form>
                </div>
    
                <div className="description-right">
                    <div className="brief-desc">
                        <h1>Your ultimate platform for seamless expense sharing</h1>
                    <p>Turn group outings into hassle free experiences</p>
                    </div>

                    <div>
                        <img src='../../Assets/rectangle4.png' alt='rectangleImage'/>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <section className="why-join section-margin">
        <div className="container">
            <div className="white-bg">
                <div className="wallet-heading">
                    <h1>Why join Share Wallet?</h1>
                </div>
                <div className="content">
                    <h2>Effortless <br/>Planning</h2>
                    <p>Plan trips, lunch dates, or any group activity without the stress of managing expenses.</p>
                </div>
                <div className="content">
                    <h2>Smart Bill <br/>Splitting</h2>
                    <p>Our platform calculates and divides expenses automatically, ensuring everyone pays their fair share.</p>
                </div>
                <div className="content">
                    <h2>Clear <br/> Balances</h2>
                    <p>Easily track who has paid, who owes, and settle balances with confidence.</p>
                </div>
                <div className="content">
                    <h2>Secure Transactions</h2>
                    <p>Your financial information is secure with our robust encryption and authentication systems..</p>
                </div>
            </div>

            <div className="newsletter">
                <div className="tick-box"></div>
                <p>Subscribe to our newsletter</p> 
            </div>
        </div>
    </section>

    </div>
  )
}

export default SignIn