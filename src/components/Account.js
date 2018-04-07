import React from 'react';

import AuthUserContext from './AuthUserContext';
import { PasswordForgetLink } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';

const AccountPage = () =>
    <AuthUserContext.Consumer>
        {authUser =>
            <div>
                <h1>Account: {authUser.email}</h1>
                <PasswordChangeForm />
                <PasswordForgetLink />
            </div>
        }
    </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);