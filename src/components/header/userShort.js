import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { user } from '../../actions'
import {
    ShortProfile,
    ShortProfilePhoto,
    ShortProfileName,
    Profile,
    ProfilePhoto,
    ProfileName,
    UserSettingsWrapper,
    UserSettingsItems
} from '../../ui/components/header'
import Modal from '../modules/modal'

const mapStateToProps = ({ user }) => ({
    profile: user.profile,
    isShowUserSettings: user.isShowUserSettings
})

const mapDispachToProps = dispatch => bindActionCreators({
    showUserSettings: user.showUserSettings,
    hideUserSettings: user.hideUserSettings
}, dispatch)

class UserShort extends Component {

    showUserSettings = () => {
        this.props.showUserSettings()
    }

    hideUserSettings = () => {
        this.props.hideUserSettings()
    }
    render() {
        const { profile, isShowUserSettings } = this.props
        return (
            <div>
                <ShortProfile onClick={this.showUserSettings}>
                    <ShortProfilePhoto images={profile.avatar} />
                    <ShortProfileName>{profile.username || 'user'}</ShortProfileName>
                </ShortProfile>
                <Modal
                    title={
                        <Profile>
                            <ProfilePhoto images={profile.avatar} />
                            <ProfileName>{profile.username}</ProfileName>
                        </Profile>
                    }
                    isShow={isShowUserSettings}
                    hideModalFunc={this.hideUserSettings}
                    modalBody={
                        <UserSettingsWrapper>
                            <UserSettingsItems images={'profile.svg'} />
                            <UserSettingsItems images={'profile.svg'} />
                            <UserSettingsItems images={'profile.svg'} />
                            <UserSettingsItems images={'profile.svg'} />
                            <UserSettingsItems images={'profile.svg'} />
                            <UserSettingsItems images={'profile.svg'} />
                            <UserSettingsItems images={'profile.svg'} />
                        </UserSettingsWrapper>
                    }
                        />
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispachToProps)(UserShort)
