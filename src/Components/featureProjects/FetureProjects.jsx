import React from 'react'
import {Link} from 'react-router-dom'
import './feature.css'
const FetureProjects = () => {
    return (
        <>
        <div className='freatureprojects1'>Feature Porjects</div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid featureLink">
                    <Link className="navbar-brand bg-warning" href="#">Egmore</Link>
                    <Link className="navbar-brand" href="#">Koyambedu</Link>
                    <Link className="navbar-brand" href="#">Sholinganullar</Link>
                    <Link className="navbar-brand" href="#">Choolaimedu</Link>
                    <Link className="navbar-brand" href="#">Grames Road</Link>
                    <Link className="navbar-brand" href="#">Royapettah</Link>
                   
                    <div className="collapse navbar-collapse arrowbtn" > 
                            <button>  <img src="https://img.icons8.com/?size=512&id=40217&format=png" alt="" /></button> <button>  <img src="https://img.icons8.com/?size=512&id=7404&format=png" alt="" /></button> 
                    </div>
                </div>
            </nav>
        </>
    )
}

export default FetureProjects
