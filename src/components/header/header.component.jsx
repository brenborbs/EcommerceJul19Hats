import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";

// import {
//   HeaderContainer,
//   LogoContainer,
//   OptionsContainer,
//   OptionLink,
// } from "./header.styles";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
  // <HeaderContainer>
  //   <LogoContainer to="/">
  //     <Logo className="logo" />
  //   </LogoContainer>
  //   <OptionsContainer>
  //     <OptionLink to="/shop">SHOP</OptionLink>
  //     <OptionLink to="/shop">CONTACT</OptionLink>
  //     {currentUser ? (
  //       <OptionLink as="div" onClick={() => auth.signOut()}>
  //         SIGN OUT
  //       </OptionLink>
  //     ) : (
  //       <OptionLink to="/signin">SIGN IN</OptionLink>
  //     )}
  //     <CartIcon />
  //   </OptionsContainer>
  //   {hidden ? null : <CartDropdown />}
  // </HeaderContainer>
  <header>
    <div className="theme-bg">
      <div className="container">
        <div className="header-top">
          <div className="header-info">
            <span>
              Contact us - 00 221 225 123-30 or
              <Link to="/">info@domain.com</Link>
            </span>
          </div>
          <div className="book-login-register">
            <ul>
              <li>
                {currentUser ? (
                  <>
                    <Link as="div" onClick={() => auth.signOut()}>
                      <i className="fa fa-sign-out"></i>
                      Signout
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/signin">
                      <i className="fa fa-user-o"></i>
                      Signin
                    </Link>
                  </>
                )}
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-heart"></i>wishlist
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="header-bottom clearfix">
      <div className="container">
        <div className="header-bottom-wrapper">
          <div className="logo-2 ptb-40">
            <Link to="/">
              <Logo className="logo" />
            </Link>
          </div>
          <div className="menu-style-2 book-menu menu-hover">
            <nav>
              <ul>
                <li>
                  <Link to="/shop">shop</Link>
                </li>
                <li>
                  <Link to="/contact">contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-cart-2">
            <CartIcon />
            {hidden ? null : <CartDropdown />}
          </div>
        </div>
      </div>
    </div>
  </header>
);

// Advance destructure arguments
// destructure currentUser from user state
// destructure hidden from cart state
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
