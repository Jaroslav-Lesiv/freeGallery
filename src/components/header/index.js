import React, { Component } from 'react'
import { HeaderWrapper, NavMenu, NavLink,  } from '../../ui/components/header/index.jsx'
import MiniFavorite from './miniFavorite'
import AuthBlock from './authBlock'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { user } from '../../actions/user'
import { Link } from 'react-router-dom'
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
                    <NavLink><Link to="/" >Home</Link></NavLink>
                    <NavLink><Link to="/gallery">Gallery</Link></NavLink>
                    <NavLink><Link to="/anoth">Another</Link></NavLink>
                    <NavLink><Link to="/ourteam">Our team</Link></NavLink>
                </NavMenu>
								<MiniFavorite />
								{!isLogin ? <AuthBlock /> :  <div>User</div>}
            </HeaderWrapper>
        )
    }
}
export default connect(mapStateToProps, mapDispachToProps)(Header)
