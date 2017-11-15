import React, { Component } from 'react'
import {
  ModalInput,
} from '../../ui/components/modal/index.jsx'
import Modal from '../modules/modal/index.js'
import _ from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { auth } from '../../actions'

const mapStateToProps = ({ auth }) => ({
  isShowSignUpModal: auth.modal.isShowSignUpModal,
  
})

const mapDispachToProps = dispatch => bindActionCreators({
  hideModal: auth.modal.hideModal,  
	setLogUserName: auth.login.name,
  setLogUserPass: auth.login.pass,
  signUp: auth.signUp.request.pending
}, dispatch)

class SignUp extends Component {

  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    remember: '',
    agree: '',
  }


  hideAuthModal = () => {
    this.props.hideModal()
  }

  setFirstName = ( event ) => {
    let value = event.target.value
    this.setState({ firstname: value })
  }
  setLastName = ( event ) => {
    let value = event.target.value
    this.setState({ lastname: value })
  }
  setEmail = ( event ) => {
    let value = event.target.value
    this.setState({ email: value })
  }
  setPassword = ( event ) => {
    let value = event.target.value
    this.setState({ password: value })
  }
  setConfirmPassword = ( event ) => {
    let value = event.target.value
    this.setState({ confirmPassword: value })
  }
  setRemember = ( event ) => {
    let value = event.target.value
    this.setState({ remember: value })
  }
  setAgree = ( event ) => {
    let value = event.target.value
    this.setState({ agree: value })
  }

  signUp = () => {
    let data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      remember: this.state.remember,
      agree: this.state.agree
    }
    this.props.signUp(data)
  }
    render() {
      const { hideAuthModal } = this;
      const { isShowModal, isShowSignUpModal } = this.props;
        return (
          <Modal
            title={'Are you want to Log in?'}
            isShow={isShowSignUpModal}
            hideModalFunc={hideAuthModal}
            confirmModalFunc={this.signUp}
            modalBody={
              <div>
                Firstname
                <ModalInput onChange={this.setFirstName} value={this.state.firstname}/>
                LastName
                <ModalInput onChange={this.setLastName} value={this.state.lastname}/>
                Email
                <ModalInput onChange={this.setEmailtName} type={'email'} />
                Password
                <ModalInput onChange={this.setPassword} type={'password'} />
                Confirm Password
                <ModalInput onChange={this.setConfirmPassword} type={'password'} />
                Remember me
                <ModalInput onChange={this.setRemember} type={'checkbox'} />
                I agree
                <ModalInput onChange={this.setAgree} type={'checkbox'} />
              </div>
              }
            />
          
        )
    }
}
export default connect(mapStateToProps, mapDispachToProps)(SignUp)
