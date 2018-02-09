import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppState from './AppState';
import { words } from './data/model';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

configure({ adapter: new Adapter() });

describe('App', () => {
  let mountedApp;
  const app = () => {
    if (!mountedApp) {
      mountedApp = mount(
        <MuiThemeProvider>
          <AppState>
            <App />
          </AppState>
        </MuiThemeProvider>
      );
    }
    return mountedApp;
  }

  beforeEach(() => {
    mountedApp = undefined;
  });

  it('renders without crashing', () => {
    app();
  });
});
