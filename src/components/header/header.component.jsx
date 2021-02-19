import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils';

import './header.style.scss';

const Header =({currentUser})=>{
    return <div className='header'>
        <Link className='logo-container' to='/'>
        <Logo className='logo' />
        </Link>
        <div className='options'>
        <div className='option'>
            <Link to='/shop'>
                SHOP
            </Link>
        </div>
        <div className='option'>
            <Link to='/contact'>
                CONTACT
            </Link>
        </div>
        <div className='option'>
            {
                currentUser ? <div className='option' onClick={()=>{auth.signOut();}}>SIGN OUT</div> : <Link  to='/signIn'>SIGN IN</Link>
            }
        </div>
        </div>
    </div>
}
export default Header;