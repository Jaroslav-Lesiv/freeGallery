import React, { Component } from 'react';
import { HeaderWrapper, NavMenu, NavLinkStyle, SiteLogo  } from '../../ui/components/header';
import { ButtonToCallSett } from '../../ui/core';
import MiniFavorite from './miniFavorite';
import './index.css';
import AuthBlock from './authBlock';
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
                <SiteLogo>Logo</SiteLogo>
                <NavMenu>
                    <NavLink activeClassName={'active'} strict exact to="/"><NavLinkStyle background={'basic_home.svg'}/></NavLink>
                    <NavLink activeClassName={'active'} strict exact to="/gallery"><NavLinkStyle background={'basic_webpage_multiple.svg'}/></NavLink>
                    <NavLink activeClassName={'active'} strict exact to="/anoth"><NavLinkStyle background={'basic_mail.svg'}/></NavLink>
                    <NavLink activeClassName={'active'}  strict exact to="/ourteam"><NavLinkStyle background={'basic_headset.svg'}/></NavLink>
                    <MiniFavorite />
                </NavMenu>
                    
        {isLogin && <ButtonToCallSett onMouseEnter={() => this.showUserModal()} /> }
                    
                <AuthBlock />
            </HeaderWrapper>
        )
    }
}
export default connect(mapStateToProps, mapDispachToProps)(Header)
