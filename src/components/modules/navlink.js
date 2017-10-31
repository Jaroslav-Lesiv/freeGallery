import React, { Component } from 'react'
import _ from 'lodash'
import { NavLinkStyle,  } from '../../ui/components/header/index.jsx'
import { Link } from 'react-router-dom'

class NavLinkHeader extends Component {

    render() {
        const { to, t } = this.props

        return (
            <NavLinkStyle>
                <Link to={to}>{t}</Link>
            </NavLinkStyle>
        )
    }
}
export default NavLinkHeader