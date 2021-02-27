import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';

import './header.style.scss';
import CartIcon from '../../components/cart-icon/cart-icon.component'
import ProfileImg from '../../components/profile-img/profile-img.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
const Header = ({ currentUser }) => {
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
                <div className='suboption'>
                    {
                      currentUser ? <ProfileImg url={currentUser.currentUser.photoURL} /> : <div></div>

                    }
                    {
                        currentUser ? <div onClick={() => { auth.signOut(); }}>SIGN OUT</div> : <Link to='/signIn'>SIGN IN</Link>
                    }
                </div>

            </div>
            <CartIcon></CartIcon>
        </div>
        <CartDropdown></CartDropdown>
    </div>
}
const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);