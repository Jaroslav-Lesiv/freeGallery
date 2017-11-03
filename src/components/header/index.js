import React, { Component } from 'react'
import { HeaderWrapper, NavMenu, NavLinkStyle,  } from '../../ui/components/header/index.jsx'
import MiniFavorite from './miniFavorite'
import AuthBlock from './authBlock'
import UserShort from './userShort'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { user } from '../../actions/user'
import { Link } from 'react-router-dom'
import NavLinkHeader from '../modules/navlink'
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
                    <NavLinkStyle><Link exact to="/" >Home</Link></NavLinkStyle>
                    <NavLinkStyle><Link to="/gallery">Gallery</Link></NavLinkStyle>
                    <NavLinkStyle><Link to="/anoth">Another</Link></NavLinkStyle>
                    <NavLinkStyle><Link to="/ourteam">Our team</Link></NavLinkStyle>
                </NavMenu>
                    <MiniFavorite />
                { isLogin ? <UserShort /> : <AuthBlock /> }
            </HeaderWrapper>
        )
    }
}
export default connect(mapStateToProps, mapDispachToProps)(Header)
