import React, { Component } from 'react'
import {
  LogButton,
  LogWrapper
} from '../../ui/components/header/index.jsx'

import {
  ModalBackDrop,
  ModalBody,
  ModalInput,
  ModalForm,
  ModalButton,
  ModalNavigationWrap,
  ModalTitle
} from '../../ui/components/modal/index.jsx'
import _ from 'lodash'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import { user } from '../../actions/user'

const mapStateToProps = ({ user }) => ({

})

const mapDispachToProps = dispatch => bindActionCreators({

}, dispatch)

class Modal extends Component {

  state = {
    isShow: null
  }

	componentWillReceiveProps({ isShow }) {
		if (isShow) this.showModal()
		if (!isShow) this.hideModal()
	}

  hideModal = () => {
    this.setState({ isShow: false})
  }

  showModal = () => {
    this.setState({ isShow: true})
  }

  defModalText = ' _ '

  defConfirmText = 'Ok'

  defCancelText = 'Cancel'

    render() {
      const { isShow } = this.state
      const { defCancelText, defConfirmText, defModalText } = this

        return (
          <div>
            <ModalBackDrop onClick={this.props.hideModalFunc || this.hideModal} isShow={this.state.isShow}/>
            <ModalBody isShow={this.state.isShow}>
              <ModalTitle>
                {this.props.title || defModalText}
              </ModalTitle>
              <ModalForm>
              {this.props.modalBody}
                <ModalNavigationWrap>
                  <ModalButton onClick={this.props.hideModalFunc || this.hideModal }>
                    {this.props.cancelButtonText || defCancelText}
                  </ModalButton>
                  <ModalButton onClick={this.props.confirmModalFunc}>
                    {this.props.acceptButtonText || defConfirmText}
                  </ModalButton>
                </ModalNavigationWrap>
              </ModalForm>
            </ModalBody>
          </div>
        )
    }
}
export default connect(mapStateToProps, mapDispachToProps)(Modal)
