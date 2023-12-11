import React from 'react'
import './CreateGroup.css'

const CreateGroup = () => {
  return (
    <div>
    {/* main body section */}
    <section class="sign-in">
        <div class="container">
            <div class="wrapper-div">
                <div class="form-div-create">
                    <form>
                        <h3 class="form-heading">New Group</h3>
                        <div class="form-group">
                            <label htmlFor="name">Title</label>
                            <input type="text" placeholder="Title"/>
                        </div>
                        <div class="form-group">
                            <label htmlFor="name">Description</label>
                            <input type="email" placeholder="Description"/>
                        </div>
                        <div class="form-group">
                            <label htmlFor="name">Currency</label>
                            <input type="password" placeholder="Currency"/>
                        </div>
                        <div class="form-group login">
                            <button type="submit">Create group</button>
                        </div>
    
                    </form>
                </div>
            </div>
        </div>

    </section>

    <section class="categories-section">
        <div class="container">
            <h3 class="form-heading start-point">Category</h3>
            <div class="wrapper-create">
                <div class="category">
                    <p>Trip</p>
                </div>
                <div class="category">
                    <p>Party</p>
                </div>
                <div class="category">
                    <p>Drinks</p>
                </div>
                <div class="category">
                    <p>Date</p>
                </div>
                <div class="category">
                    <p>Airbnb</p>
                </div>
                <div class="category">
                    <p>Gathering</p>
                </div>

            </div>

            <div class="not-center">
                <form>
                    <h3 class="form-heading start-point">New Group</h3>
                    <div class="inline-look">
                        <div class="form-group">
                            <label htmlFor="name">Add Participant</label>
                            <input type="text" placeholder="Participant"/>
                        </div>
                        <div class="form-group">
                            <label htmlFor="name">Amount</label>
                            <input type="email" placeholder="Amount"/>
                        </div>
                    </div>
                </form>
            </div>

            <div class="newsletter">
                <div class="tick-box"></div>
                <p class="one-font">Subscribe to our newsletter</p> 
            </div>
        </div>
    </section>
   
    </div>
  )
}

export default CreateGroup