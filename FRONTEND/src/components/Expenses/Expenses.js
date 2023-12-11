import React from 'react'
import './Expenses.css'

const Expenses = () => {
  return (
    <div>
      <section className="sign-in-expense">
        <div className="container">
            <div className="wrapper-div">
                <div className="form-div">
                    <form>
                        <h3 className="form-heading">Expenses</h3>
                        <div className="form-group">
                            <label for="name">Group Name</label>
                            <input type="text" placeholder="Group Name"/>
                        </div>
                        <div className="form-group">
                            <label for="name">Title</label>
                            <input type="text" placeholder="Title"/>
                        </div>
                        <div className="form-group">
                            <label for="name">Amount</label>
                            <input type="text" placeholder="Amount"/>
                        </div>
                        <div className="form-group">
                            <label for="name">Description</label>
                            <input type="text" placeholder="Description"/>
                        </div>
                        <div className="form-group">
                            <label for="name">Time</label>
                            <input type="text" placeholder="Time"/>
                        </div>
                        <div className="form-group">
                            <label for="name">Paid by</label>
                            <input type="text" placeholder="Paid by"/>
                        </div>
    
                    </form>
                </div>
            </div>

            <div className="welcome-section section-margin">
                <div className="container">
                   <div className="wrapper">
                        <div className="wallet">
                            <p>Split options</p>
                        </div>

                        <div className="subscribe">
                            <button>Split Equally</button>
                        </div>
                
                        <div className="description">
                            <p className="one-font details">Split 300,000 Kshs into 2 portions [Maggie k: 150,000KSHs] [David K: 150,000 kSHs]</p>
                        </div>
                
                        <div className="newsletter">
                            <div className="tick-box"></div>
                            <p className="one-font">Subscribe to our newsletter</p> 
                        </div>
                   </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Expenses