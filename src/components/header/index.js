import React, { Component } from 'react'
import { HeaderWrapper, NavMenu, NavLinkStyle,  } from '../../ui/components/header/index.jsx'
import MiniFavorite from './miniFavorite'
import AuthBlock from './authBlock'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { user } from '../../actions/user'
import { Link } from 'react-router-dom'
import NavLinkHeader from '../modules/navlink'
const mapStateToProps = ({ user }) => ({
	userSettings: user.userSettings,
	isShow: user.isShow,
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
                    <NavLinkStyle><Link exact activeStyle='display: none;' to="/" >Home</Link></NavLinkStyle>
                    <NavLinkStyle><Link activeStyle='display: none;' to="/gallery">Gallery</Link></NavLinkStyle>
                    <NavLinkStyle><Link activeStyle='display: none;' to="/anoth">Another</Link></NavLinkStyle>
                    <NavLinkHeader to='ourteam' t='Our team' />
                </NavMenu>
								<MiniFavorite />
								{!isLogin ? <AuthBlock /> :  <div>User</div>}
            </HeaderWrapper>
        )
    }
}
export default connect(mapStateToProps, mapDispachToProps)(Header)
