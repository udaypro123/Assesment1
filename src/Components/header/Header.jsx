import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'


const Header = () => {
    return (
        <>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <div>
                        <h4>Discover </h4>
                        <h4>Plots </h4>
                    </div>
                   <div className='linkdiv'>
                    <Link>Projects <select value=""></select></Link>
                    <Link> Agents</Link>
                    <Link> Amenities</Link>
                    <Link>|</Link>
                    <Link> Sign in</Link>
                    <Link> <button className='btn'>Schedule a Call</button></Link>
                   </div>
                </div>
            </nav>
        </>
    )
}

export default Header
