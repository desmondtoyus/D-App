import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changesActiveMenu } from '../../redux/actions/menu'
import './header.css';


function Header(props){
    const { activeMenu } = useSelector((state)=>state.menus);
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log('Menu Changed', activeMenu)
    }, [activeMenu]);


    const handleMenu = (e)=>{
        let active = ''
        switch(e.target.id){
            case 'home':
            case 'desmond':
                active = 'home';
            break;
            case 'contact':
                active = 'contact';
            break;
            case 'portfolio':
                active = 'portfolio';
            break;
            case 'about':
                active = 'about';
            break;
            default:
            return
        }
      return dispatch(changesActiveMenu(active))
    }

    return(
        <header>
           	<nav className="navbar">
				<div className="container">
					<div className="navbar-header">
						<div className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<span className="glyphicon glyphicon-menu-hamburger"></span>
						</div>
						<li><Link to='/' className="navbar-brand" id='desmond' onClick={handleMenu}>desmond.pro</Link></li>
					</div>
					<div id="navbar" className="collapse navbar-collapse navbar-right">
						<ul className="nav navbar-nav">
							<li className={activeMenu === "home" ? "active": ""} > <Link to='/' id='home' onClick={handleMenu}>Home</Link></li>
							<li className={activeMenu === "about" ? "active": ""} ><Link to='/about' id='about' onClick={handleMenu}>About</Link></li>
                            <li className={activeMenu === "portfolio" ? "active": ""}><Link to='/portfolio' id='portfolio'  onClick={handleMenu}>Portfolio</Link></li>
							<li className={activeMenu === "contact" ? "active": ""}><Link to='/contact' id='contact' onClick={handleMenu}>Contact</Link></li>
						</ul>
                        <hr className="hidden-sm hidden-md hidden-lg" style={{margin: '0 30px'}}/>
					</div>
				</div>
			</nav>
        </header>
    )
}

export default memo(Header)