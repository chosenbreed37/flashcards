import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ActionButton } from './ActionButton';

configure({ adapter: new Adapter() });

describe('ActionButton', () => {
    let props;
    let clicked = false;
    let mountedActionButton;
    const component = (customProps) => {
        const componentProps = customProps || props;
        if (!mountedActionButton) {
            mountedActionButton = mount(
                <ActionButton {...componentProps} />
            );
        }
        return mountedActionButton;
    }

    beforeEach(() => {
        props = {
            label: 'Next',
            id: 'next-button'
        };
        mountedActionButton = undefined;
    });

    it('renders the label', () => {
        const p = component();

        expect(p.length).toBeGreaterThan(0);
        expect(p.text()).toBe(props.label);
    });

    it('can be clicked', () => {
        const p = component({...props, onClick: () => { clicked = true; }});
        p.simulate('click');
        expect(clicked).toBe(true);
    });
});