import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { user } from '../../actions/user';
import Modal from '../modules/modal/index.js';


const mapStateToProps = ({ user }) => ({
    user: user.profile,
	userSettings: user.userSettings,
    isShow: user.isShow,
    isShowProfile: user.isShowProfile
});

const mapDispachToProps = dispatch => bindActionCreators({
	
}, dispatch);

class Header extends Component {

    render() {
		const { isShowProfile } = this.props;
        return (
            <Modal isShow={isShowProfile} />
        )
    }
}

export default connect(mapStateToProps, mapDispachToProps)(Header)
