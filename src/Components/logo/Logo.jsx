import React from 'react'
import './logo.css'
const Logo = () => {
    return (
        <>
            <div className="row  mt-5">
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <span className='span1'>International</span><br />
                            <sapn className='span2'> Business </sapn> <br />
                            <sapn className='span3'> Times </sapn>  
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="marketwatch">MarketWatch</h5>
                           
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title forbes">Forbes</h5>
                           
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="title1">yahoo<span>!</span></h5>
                           
                        </div>
                    </div>
                </div>
               
                
            </div>
        </>
    )
}

export default Logo
