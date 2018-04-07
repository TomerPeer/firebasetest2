import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { PasswordForgetLink } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';

const AccountPage = ({ authUser }) =>
    <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetLink />
        <PasswordChangeForm />
    </div>

const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
});

const authCondition = (authUser) => !!authUser;

export default compose(
    withAuthorization(authCondition),
    connect(mapStateToProps)
)(AccountPage);