import { WebAuth } from 'auth0-js';

const CLIENT_ID = process.env.REACT_APP_AUTH_CLIENT_ID;
const DOMAIN = process.env.REACT_APP_AUTH_DOMAIN;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const webAuth = new WebAuth(
    {
        domain: DOMAIN,
        clientID: CLIENT_ID,
        responseType: 'token id_token',
        // audience: 'https://function-first.eu.auth0.com/userinfo',
        scope: 'openid profile email',
        redirectUri: `${BASE_URL}/callback`
    }
);

export const getSession = () => {
    const accessToken = localStorage.getItem('access_token');

    return {
        accessToken
    }
};

export const getUserProfile = (accessToken) => {
    return new Promise((resolve, reject) => {
        webAuth.client.userInfo(accessToken, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

export const getAuthenticationResult = () => {
    return new Promise((resolve, reject) => {
        webAuth.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                resolve(authResult);
            } else {
                reject(err || authResult);
            }
        });
    });
}

export const authorise = (e) => {
    // e.preventDefault();
    webAuth.authorize();
}

export const setSession = (authResult) => {
    // Set the time that the Access Token will expire at
    var expiresAt = JSON.stringify(
        authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
}

export const isAuthenticated = () => {
    // Check whether the current time is past the
    // Access Token's expiry time
    var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
}

export const unauthorise = () => {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
}
