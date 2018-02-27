console.log('>>> env: ', process.env.NODE_ENV);

const getSession = () => {
    const accessToken = localStorage.getItem('access_token');
    const idToken = localStorage.getItem('id_token');
    const expiresAt = localStorage.getItem('expires_at');
    return { accessToken, idToken, expiresAt };
}

const setSession = (authResult) => {
    // Set the time that the Access Token will expire at
    var expiresAt = JSON.stringify(
        authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
}

const clearSession = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
}

export default {
    getSession,
    setSession,
    clearSession
};