import React from 'react'
import './SignUp.css'

const SignUp = () => {
  return (
    <section className="sign-in">
        <div className="container">
            <div className="wrapper-signup">
                <div className="form-div-signup">
                    <div className="intro">
                        <h1>Join the Share Wallet Club</h1>
                        <p>Transforming Group finances, One expense at a time</p>
                    </div>
                    <form action="/signup" method="post">
                        <h3>Register</h3>
                        <div className="form-group">
                            <label htmlForr="name">Name</label>
                            <input type="text" placeholder="Your Name" name="name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Email</label>
                            <input type="email" placeholder="Your Email" name="email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Password</label>
                            <input type="password" placeholder="Your Password" name="password"/>
                        </div>
                        <div className="form-group login">
                            <button type="submit">Signup</button>
                        </div>
    
                    </form>
                </div>
    
                <div className="description-right">
                    <div className="brief-desc">
                        <h1>Your ultimate platform for seamless expense sharing</h1>
                    <p>Turn group outings into hassle free experiences</p>
                    </div>

                    <div className='image-parent'>
                        <img src="../../Assets/hammocks-with-palm-trees.jpg" alt='natureImage'/>
                    </div>
                </div>
            </div>
        </div>

    </section>

  )
}

export default SignUp