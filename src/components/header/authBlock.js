import React, { Component } from 'react'
import {
  LogButton,
  LogWrapper
} from '../../ui/components/header/index.jsx'
import _ from 'lodash'
import Modal from '../modal/index.js'
import LogIn from './logIn.js'
import SignUp from './signUp.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import { user, auth } from '../../actions'

const mapStateToProps = ({ user, auth }) => ({
	isLogin: user.isLogin,
  isShowLogInModal: auth.modal.isShowLogInModal,
  isShowModal: auth.modal.isShowModal,
  isShowSignUpModal: auth.modal.isShowSignUpModal,
  login: auth.login,
  sign: auth.sign,
})

const mapDispachToProps = dispatch => bindActionCreators({
  showLogInModal: auth.modal.showLogInModal,
  showSignUpModal: auth.modal.showSignUpModal,
  hideModal: auth.modal.hideModal

}, dispatch)

class AuthBlock extends Component {

  state = {
    ModalToDo: false,
  }


  showLogInModal = () => {
    this.props.showLogInModal()
  }
  showSignUpModal = () => {
    this.props.showSignUpModal()
  }
  hideAuthModal = () => {
    this.props.hideModal()
  }

  submitLogIn = () => {
    const { name, pass } = this.props.login
    const data = {
      username: name,
      password: pass
    }
  }

  submitSignIn = () => {
    const {
      firstName,
      lastName,
      email,
      password,
      passConfirm,
      remember,
      agree
    } = this.props.sign

    const data = {
      firstName,
      lastName,
      email,
      proff: '',
      password,
      passConfirm,
      agree,
    }
  }
    render() {
			const { isLogin, isShowLogInModal, isShowModal, isShowSignUpModal, logName, logPass } = this.props
      const { ModalToDo } = this.state
      const { hideAuthModal, showLogInModal, showSignUpModal } = this
        return (
          !isLogin &&
          <LogWrapper>
            <Modal
              title={
                isShowModal && (
                isShowLogInModal ? 'Are you want to Log in?':
                isShowSignUpModal ? 'Are you want to Sign up?' :
                null)
              }
              isShow={isShowModal}
              hideModalFunc={hideAuthModal}
              confirmModalFunc={
                isShowLogInModal ? this.submitLogIn :
                isShowSignUpModal ? this.submitSignIn :
                null
              }
              modalBody={
                isShowLogInModal ? <LogIn /> :
                isShowSignUpModal ? <SignUp /> :
                null
              }
                />
            <LogButton onClick={showLogInModal}>
              Log In
            </LogButton>
            <LogButton onClick={showSignUpModal}>
              Sign Up
            </LogButton>
          </LogWrapper>
        )
    }
}
export default connect(mapStateToProps, mapDispachToProps)(AuthBlock)
