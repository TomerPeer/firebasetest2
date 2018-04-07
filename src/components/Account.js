import React from 'react';

import AuthUserContext from './AuthUserContext';
import { PasswordForgetLink } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';

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

export default AccountPage;