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
  isShowModal: auth.modal.isShowModal, 
  isShowLogInModal: auth.modal.isShowLogInModal,
})

const mapDispachToProps = dispatch => bindActionCreators({
  hideModal: auth.modal.hideModal,  
	setLogUserName: auth.login.name,
  setLogUserPass: auth.login.pass,
  login: auth.login.request.pending
}, dispatch)

class LogIn extends Component {

  state = {
    name: '',
    password: ''
  }


  hideAuthModal = () => {
    this.props.hideModal()
  }


  setName = ( event ) => {
    let value = event.target.value
    this.setState({ name: value })
  }

  setPassword = ( event ) => {
    let value = event.target.value
    this.setState({ password: value })
  }

  login = () => {
    let data = {
      name: this.state.name,
      password: this.state.password,
    }
    this.props.login(data)
  }

    render() {
      const { hideAuthModal } = this;
      const { isShowModal, isShowLogInModal } = this.props;
        return (
          <Modal
            title={'Are you want to Log in?'}
            isShow={isShowLogInModal}
            hideModalFunc={hideAuthModal}
            confirmModalFunc={this.login}            
            modalBody={
              <div>
                Firstname
                <ModalInput onChange={this.setName}/>
                Password
                <ModalInput onChange={this.setPassword} type="password"/>
              </div>
              }
            />
          
        )
    }
}
export default connect(mapStateToProps, mapDispachToProps)(LogIn)
