import React, { Component } from 'react';
import { HeaderWrapper, NavMenu, NavLinkStyle,  } from '../../ui/components/header/index.jsx';
import { ButtonToCallSett } from '../../ui/core';
import MiniFavorite from './miniFavorite';
import './index.css';
import AuthBlock from './authBlock';
import UserShort from './userShort';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { user } from '../../actions/user';
import { NavLink } from 'react-router-dom'

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
    showUserModal: user.showUserModal,
}, dispatch)

class Header extends Component {

    showUserModal = () => {
        this.props.showUserModal()
    }

    render() {
		const { isLogin } = this.props
        return (
            <HeaderWrapper>
                <NavMenu>
                    <NavLink activeClassName={'active'} exact to="/"><NavLinkStyle>Home</NavLinkStyle></NavLink>
                    <NavLink activeClassName={'active'} exact to="/gallery"><NavLinkStyle>Gallery</NavLinkStyle></NavLink>
                    <NavLink activeClassName={'active'} exact to="/anoth"><NavLinkStyle>Another</NavLinkStyle></NavLink>
                    <NavLink activeClassName={'active'} exact to="/ourteam"><NavLinkStyle>Our team</NavLinkStyle></NavLink>
                </NavMenu>
                    <MiniFavorite />
        {isLogin && <ButtonToCallSett onMouseEnter={() => this.showUserModal()} /> }
                    
                { isLogin ? <UserShort /> : <AuthBlock /> }
            </HeaderWrapper>
        )
    }
}
export default connect(mapStateToProps, mapDispachToProps)(Header)
