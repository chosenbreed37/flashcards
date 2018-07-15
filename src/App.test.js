import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppState from './AppState';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App', () => {
  let mountedApp;
  const app = () => {
    if (!mountedApp) {
      mountedApp = mount(
          <AppState>
            <App />
          </AppState>
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
