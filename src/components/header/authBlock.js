import React, { Component } from 'react'
import {
  LogButton,
  LogWrapper
} from '../../ui/components/header/index.jsx'
import _ from 'lodash'
import Modal from '../modules/modal/index.js'
import LogIn from '../auth/logIn.js'
import SignUp from '../auth/signUp.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import { user, auth } from '../../actions'

const mapStateToProps = ({ user }) => ({
	isLogin: user.isLogin,
})

const mapDispachToProps = dispatch => bindActionCreators({
  showLogInModal: auth.modal.showLogInModal,
  showSignUpModal: auth.modal.showSignUpModal,
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

    render() {
			const { isLogin, isShowLogInModal, isShowModal, isShowSignUpModal, logName, logPass } = this.props
      const { ModalToDo } = this.state
      const { hideAuthModal, showLogInModal, showSignUpModal } = this
        return (
          !isLogin &&
          <LogWrapper>
            <LogButton onClick={showLogInModal}>
              Log In
            </LogButton>
            <LogButton onClick={showSignUpModal}>
              Sign Up
            </LogButton>
            <LogIn />
            <SignUp />
          </LogWrapper>
        )
    }
}
export default connect(mapStateToProps, mapDispachToProps)(AuthBlock)
