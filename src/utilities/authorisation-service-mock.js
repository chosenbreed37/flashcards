const getSesssion = () => {
    const accessToken = 'access-token';
    return {
        accessToken
    };
};

const getUserProfile = (accessToken) => {
    return Promise.resolve({});
}

export const getAuthenticationResult = () => {
    return Promise.resolve({
        accessToken: 'access-token',
        idToken: 'id-token',
        expiresIn: 1000
    });
}

export const authorise = (e) => {
}

export const setSession = (authResult) => {
}

export const isAuthenticated = () => {
    return true;
}

export const unauthorise = () => {
}
