import * as AuthorisationService from './authorisation-service';
import * as AuthorisationServiceMock from './authorisation-service-mock';

const CLIENT_ID = process.env.REACT_APP_AUTH_CLIENT_ID;
const DOMAIN = process.env.REACT_APP_AUTH_DOMAIN;
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const createAuthorisationService = () => {
    if (process.env.NODE_ENV === 'test') {
        return AuthorisationServiceMock;
    } else {
        return AuthorisationService;
    }
}