import * as AuthorisationService from './authorisation-service';
import * as AuthorisationServiceMock from './authorisation-service-mock';

export const createAuthorisationService = () => {
    if (process.env.NODE_ENV === 'test') {
        return AuthorisationServiceMock;
    } else {
        return AuthorisationService;
    }
}