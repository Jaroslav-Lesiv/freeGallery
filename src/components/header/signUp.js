import React, { Component } from 'react'
import {
  ModalInput
} from '../../ui/components/modal/index.jsx'
import _ from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { auth } from '../../actions'

const mapStateToProps = ({ auth }) => ({
  password: auth.sign.password
})

const mapDispachToProps = dispatch => bindActionCreators({
  setSignFirstName: auth.signUp.firstName,
  setSignLastName: auth.signUp.lastName,
  setSignEmail: auth.signUp.email,
  setSignPassword: auth.signUp.password,
  setSignPasswordConf: auth.signUp.passwordConfirm,
  setSignRememberMe: auth.signUp.rememberMe,
	setSignAgree: auth.signUp.agree,
}, dispatch)

class SignUp extends Component {

  setSignFirstName = (event) => {
    const e = event.target.value
    if (e.length > 3) {
      this.props.setSignFirstName(e)
    }
    else if (e.length <= 3) {
      this.props.setSignFirstName(null)
    }
  }

  setSignLastName = (event) => {
    const e = event.target.value
    if (e.length > 3) {
      this.props.setSignLastName(e)
    }
    else if (e.length <= 3) {
      this.props.setSignLastName(null)
    }
  }

  setSignEmail = (event) => {
    const e = event.target.value
    const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/
    if (valid.test(e)) {
      this.props.setSignEmail(e)
    }
    else {
      this.props.setSignEmail(null)
    }
  }

  setSignPassword = event => {
    const e = event.target.value
    if (e.length < 8) {
      this.props.setSignPassword(null)
    } else if (e.length >= 8) {
      this.props.setSignPassword(e)
    }
  }

  setSignPasswordConf = event => {
    const e = event.target.value
    if (e.length < 8 || e !== this.props.password) {
      this.props.setSignPasswordConf(null)
    } else if (e.length >= 8 && e === this.props.password) {
      this.props.setSignPasswordConf(e)
    }
  }


  rememberMe = event => {
    const e = event.target.value
    console.log(e + 'checkbox' + event.target.checked)
  }

  setSignAgree = event => {

  }



    render() {
        return (
          <div>
            Firstname
            <ModalInput onChange={this.setLogName}/>
            LastName
            <ModalInput onChange={this.setLogPassword}/>
            Email
            <ModalInput onChange={this.setLogName} type={'email'}/>
            Password
            <ModalInput onChange={this.setLogPassword} type={'password'} />
            Repead Password
            <ModalInput onChange={this.setSignPasswordConf} type={'password'} />
            Remember me
            <ModalInput onChange={this.setLogPassword} type={'checkbox'} />
            I agree
            <ModalInput onChange={this.setLogPassword} type={'checkbox'} />
          </div>
        )
    }
}
export default connect(mapStateToProps, mapDispachToProps)(SignUp)
