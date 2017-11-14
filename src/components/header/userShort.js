import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { auth, user } from '../../actions';
import UserSettingsBlock from '../modules/modal/userSettingsItems';
import {
    ShortProfile,
    ShortProfilePhoto,
    ShortProfileName,
    Profile,
    ProfilePhoto,
    ProfileName,
    UserSettingsWrapper,
    UserSettingsItems
} from '../../ui/components/header';
import Modal from '../modules/modal';

const mapStateToProps = ({ user }) => ({
    profile: user.profile,
    isShowUserModal: user.isShowUserModal,
    isShowUserSettings: user.isShowUserSettings
})

const mapDispachToProps = dispatch => bindActionCreators({
    showUserModal: user.showUserModal,
    hideUserModal: user.hideUserModal,
    showUserSettings: user.showUserSettings,
    logOut: auth.logOut
}, dispatch)

class UserShort extends Component {

    showUserModal = () => {
        this.props.showUserModal()
    }

    hideUserModal = () => {
        this.props.hideUserModal()
    }

    showUserSettings = () => {
        this.props.showUserSettings()
    }

    logOutFunc  = () => {
        this.props.logOut()
    }
    render() {
        const { profile, isShowUserModal } = this.props
        return (
            <div>
                <ShortProfile onClick={this.showUserModal}>
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
                    isShow={isShowUserModal}
                    hideModalFunc={this.hideUserModal}
                    confirmModalFunc={this.logOutFunc}
                    acceptButtonText={'Log out'}
                    modalBody={
                        <UserSettingsWrapper>
                            <UserSettingsBlock
                                images={'profile.svg'}
                                name={'Profile'}
                                clickFunc={this.showUserSettings}
                                 />
                            <UserSettingsBlock images={'profile.svg'} name={'My Gallery'} />
                            <UserSettingsBlock images={'profile.svg'} name={'Favorite'} />
                            <UserSettingsBlock images={'profile.svg'} name={'Profile'} />
                            <UserSettingsBlock images={'profile.svg'} name={'Profile'} />
                        </UserSettingsWrapper>
                    }
                        />
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispachToProps)(UserShort)
