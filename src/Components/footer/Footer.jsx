import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <>
           
            <footer className="text-center text-lg-start bg-white text-muted">
               
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    
                   
                   
                    <div>
                        <a href="" className="me-4 link-secondary">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="/" className="me-4 link-secondary">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="/" className="me-4 link-secondary">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="/" className="me-4 link-secondary">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="/" className="me-4 link-secondary">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="/" className="me-4 link-secondary">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                   
                </section>
               
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                       
                        <div className="row mt-3">
                           
                            <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mb-4">
                              
                                <h6 className="textcolor mb-4">
                                    <i className="fas fa-gem me-3 text-secondary"></i>Discover Plots
                                </h6>
                                <p classNameName='p-3'>
                                    Here you can use rows and columns to organize .
                                </p>
                            </div>
                          
                            
                           
                          
                      
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-4">
                              
                                <h6 className="textcolor mb-4">company</h6>
                               
                                <p> Contact</p>
                            </div>


                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-4">
                              
                                <h6 className="textcolor mb-4">Who we help</h6>
                                <p className="textcolor">Customers</p>
                                <p className="textcolor">Brokers</p>
                                <p className="textcolor">Lenders</p>
                               
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-4 footersapn">
                              
                                <h6 className="textcolor mb-4">Follow Us</h6>
                               <p className="textcolor"> <span>  <img src="https://img.icons8.com/?size=512&id=8818&format=png" alt="" /></span>Facebook </p>

                               <p className="textcolor"> <span>  <img src="https://img.icons8.com/?size=512&id=oTCfhnCni4zR&format=png" alt="" /></span>Instagram </p>
                             
                                
                               
                            </div>
                           
                        </div>
                       
                    </div>
                </section>
               

               
                <div className="text-center p-4" style={{"backgroundColor": "rgba(0, 0, 0, 0.025)"}}>
                    © 2023 Copyright:
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">cityplots.com</a>
                </div>
             
            </footer>
           
        </>
    )
}

export default Footer
