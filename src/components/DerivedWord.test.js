import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { DerivedWord } from './DerivedWord';

configure({ adapter: new Adapter() });

describe('DerivedWord', () => {
    let props;
    let mountedDerivedWord;
    const cardDefinition = (customProps) => {
        const componentProps = customProps || props;
        if (!mountedDerivedWord) {
            mountedDerivedWord = mount(
                <DerivedWord {...componentProps} />
            );
        }
        return mountedDerivedWord;
    }

    beforeEach(() => {
        props = {
            derivation: 'voluptate ',
            type: 'adj'
        };
        mountedDerivedWord = undefined;
    });

    it('renders the derived word', () => {
        const p = cardDefinition().find('#derived-word');
        expect(p.length).toBeGreaterThan(0);
        expect(p.text()).toBe(props.derivation);
    });

    it('renders the derived word type', () => {
        const p = cardDefinition().find('#derived-word-type');
        expect(p.length).toBeGreaterThan(0);
        expect(p.text()).toContain(props.type);
    });

});