import React from 'react'
import './plotpart.css'
const Plotpart = () => {
    return (
        <>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body imgdiv">
                            <img src="https://st4.depositphotos.com/3418487/38952/i/450/depositphotos_389529602-stock-photo-aerial-view-land-positioning-point.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title">Discover Your Perfect Plot of Land</h2>
                            <p class="card-text">Starting At</p>
                            <p className='spantag'>₹3999 <span>per.sqft</span></p>
                            <div className='inputdiv'>
                                <input type="text" placeholder='Search area or location' />
                                <span className='para1'>₹Budget<select value=""></select></span>
                                <button className='btn'>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Plotpart;
