import React, { Component } from 'react'
import {
  ModalInput
} from '../../ui/components/modal/index.jsx'
import _ from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { auth } from '../../actions'

const mapStateToProps = ({ auth }) => ({
})

const mapDispachToProps = dispatch => bindActionCreators({
	setLogUserName: auth.login.name,
  setLogUserPass: auth.login.pass
}, dispatch)

class LogIn extends Component {

  setLogName = (event) => {
    const e = event.target.value
    if (e.length > 3) {
      this.props.setLogUserName(e)
    }
    else if (e.length <= 3) {
      this.props.setLogUserName(null)
    }
  }

  setLogPassword = event => {
    const e = event.target.value
    if (e.length < 8) {
      this.props.setLogUserPass(null)
    }
    if (e.length >= 8) {
      this.props.setLogUserPass(e)
    }
  }

    render() {
        return (
          <div>
            Firstname
            <ModalInput onChange={this.setLogName}/>
            Password
            <ModalInput onChange={this.setLogPassword}/>
          </div>
        )
    }
}
export default connect(mapStateToProps, mapDispachToProps)(LogIn)
