import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { auth } from '../../Firebase/firebase.utils'

import { ReactComponent as Logo } from '../../Assets/logo.svg'
import './header.styles.scss'
import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../Cart-Dropdown/cart-dropdown'

const Header = ({ currentUser, hidden }) =>
    (
        <div className='header'>
            <Link className='logo-container' to="/" >
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
            </Link>
                <Link className='option' to='/contact'>
                    CONTACT
            </Link>
                {
                    currentUser ?
                        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                        :
                        <Link className='option' to='/signin'>SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {
                hidden ? null :
                    <CartDropdown />
            }
        </div>
    )

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser: currentUser,
    hidden: hidden
})

export default connect(mapStateToProps)(Header);