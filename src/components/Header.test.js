import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';
import AppState from '../AppState';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

configure({ adapter: new Adapter() });

const initialState = { isLoggedIn: false }
describe('Header', () => {
    let props;
    let mountedHeader;
    const header = (state) => {
        if (!mountedHeader) {
            mountedHeader = mount(
                <MuiThemeProvider>
                    <AppState state={state || initialState}>
                        <Header />
                    </AppState>
                </MuiThemeProvider>
            );
        }
        return mountedHeader;
    }

    beforeEach(() => {
        props = {
        };
        mountedHeader = undefined;
    });

    it('renders without crashing', () => {
        header();
    });

    it('renders the title', () => {
        const p = header().find('#header-title');
        expect(p.length).toBeGreaterThan(0);
        expect(p.text()).toBe('Flashcards');
    });

    it('renders [SIGN IN] button when unauthenticated', () => {
        const p = header().find('#sign-in-button');
        expect(p.length).toBeGreaterThan(0);
    })

    it.skip('renders [SIGN OUT] button when authenticated', () => {
        const customProps = { isLoggedIn: true };
        const p = header(customProps).find('#sign-out-button');
        expect(p.length).toBeGreaterThan(0);
    })

    it.skip('sign in button logs the user in', () => {
        const headerHandle = header();
        const e = headerHandle.find('#sign-in-button').first();
        e.simulate('click');
        const f = headerHandle.find('#sign-out-button');
        expect(f.length).toBeGreaterThan(0);
    });
});