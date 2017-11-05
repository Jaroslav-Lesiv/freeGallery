import React, { Component } from 'react'

import {
    UserSettingsItems,
    UserSettingsItemsImage,
    UserSettingsItemsName
} from '../../../ui/components/header'
import _ from 'lodash'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import { user } from '../../../actions/user'

const mapStateToProps = ({ user }) => ({

})

const mapDispachToProps = dispatch => bindActionCreators({

}, dispatch)

class UserSettingsBlock extends Component {

  state = {
    isShow: null
  }

    render() {
        const { images, name, clickFunc } = this.props
        return (
          <UserSettingsItems onClick={clickFunc || null}>
              <UserSettingsItemsImage images={images} />
              <UserSettingsItemsName>{name}</UserSettingsItemsName>
          </UserSettingsItems>
        )
    }
}
export default connect(mapStateToProps, mapDispachToProps)(UserSettingsBlock)
