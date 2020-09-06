import React, { memo } from 'react';
import { Link } from 'react-router-dom';
// import './header.css';
import Logo from '../../assets/images/comigo-logo-black.png'


function Header(props){
    return(
        <header>
           	<nav className="navbar">
				<div className="container">
					<div className="navbar-header">
						<div className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<span className="glyphicon glyphicon-menu-hamburger"></span>
						</div>
						<li><Link to='/' className="navbar-brand">desmond.pro</Link></li>
					</div>
					<div id="navbar" className="collapse navbar-collapse navbar-right">
						<ul className="nav navbar-nav">
							<li className="active"> <Link to=''>Home</Link></li>
							<li><Link to='/about'>About</Link></li>
                            <li><Link to='/portfolio'>Portfolio</Link></li>
							<li><Link to='/contact'>Contact</Link></li>
						</ul>
                        <hr className="hidden-sm hidden-md hidden-lg" style={{margin: '0 30px'}}/>
					</div>
				</div>
			</nav>
        </header>
    )
}

export default memo(Header)