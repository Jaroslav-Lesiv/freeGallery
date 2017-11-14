import React, { Component } from 'react';
import { HeaderWrapper, NavMenu, NavLinkStyle,  } from '../../ui/components/header/index.jsx';
import MiniFavorite from './miniFavorite';
import './index.css';
import AuthBlock from './authBlock';
import UserShort from './userShort';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { user } from '../../actions/user';
import { NavLink as RouterNavLink } from 'react-router-dom'

// import { Link } from 'react-router-dom'
import NavLinkHeader from '../modules/navlink';
import { NavLink as HeaderLink } from '../../helper/router';
const mapStateToProps = ({ user }) => ({
	userSettings: user.userSettings,
    isShow: user.isShow,
    isLogin: user.isLogin
})

const mapDispachToProps = dispatch => bindActionCreators({
	showInform: user.showInform,
}, dispatch)

class Header extends Component {

    render() {
		const { isLogin } = this.props
        return (
            <HeaderWrapper>
                <NavMenu>
                    <RouterNavLink activeClassName={'active'} to="/"><NavLinkStyle>Home</NavLinkStyle></RouterNavLink>
                    <RouterNavLink activeClassName={'active'} to="/gallery"><NavLinkStyle>Gallery</NavLinkStyle></RouterNavLink>
                    <RouterNavLink activeClassName={'active'} to="/anoth"><NavLinkStyle>Another</NavLinkStyle></RouterNavLink>
                    <RouterNavLink activeClassName={'active'} to="/ourteam"><NavLinkStyle>Our team</NavLinkStyle></RouterNavLink>
                </NavMenu>
                    <MiniFavorite />
                { isLogin ? <UserShort /> : <AuthBlock /> }
            </HeaderWrapper>
        )
    }
}
export default connect(mapStateToProps, mapDispachToProps)(Header)
