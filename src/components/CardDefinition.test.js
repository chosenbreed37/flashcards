import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CardDefinition } from './CardDefinition';

configure({ adapter: new Adapter() });

describe('CardDefinition', () => {
    let props;
    let mountedCardDefinition;
    const cardDefinition = () => {
        if (!mountedCardDefinition) {
            mountedCardDefinition = mount(
                <CardDefinition {...props} />
            );
        }
        return mountedCardDefinition;
    }

    beforeEach(() => {
        props = {
            description: 'Lorem ipsum dolor met',
            synonyms: 'Lorem ipsum dolor met',
            antonyms: 'Lorem ipsum dolor met'
        };
        mountedCardDefinition = undefined;
    });

    it('renders the description', () => {
        const p = cardDefinition().find('#description');
        expect(p.length).toBeGreaterThan(0);
        expect(p.text()).toBe(props.description);
    });

    it('renders the synonyms', () => {
        const field = cardDefinition().find('#synonyms');
        expect(field.length).toBeGreaterThan(0);
        expect(field.text()).toBe(props.synonyms);
    });

    it('renders the antonyms', () => {
        const field = cardDefinition().find('#antonyms');
        expect(field.length).toBeGreaterThan(0);
        expect(field.text()).toBe(props.antonyms);
    });
});