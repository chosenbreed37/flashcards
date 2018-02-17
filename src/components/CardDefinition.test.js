import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CardDefinition } from './CardDefinition';

configure({ adapter: new Adapter() });

describe('CardDefinition', () => {
    let props;
    let mountedCardDefinition;
    const cardDefinition = (customProps) => {
        const componentProps = customProps || props;
        if (!mountedCardDefinition) {
            mountedCardDefinition = mount(
                <CardDefinition {...componentProps} />
            );
        }
        return mountedCardDefinition;
    }

    beforeEach(() => {
        props = {
            definition: 'Lorem ipsum dolor met',
            example: 'consectetur adipiscing elit',
            synonyms: 'Lorem ipsum dolor met',
            antonyms: 'Lorem ipsum dolor met'
        };
        mountedCardDefinition = undefined;
    });

    it('renders the description', () => {
        const p = cardDefinition().find('#description');
        expect(p.length).toBeGreaterThan(0);
        expect(p.text()).toBe(props.definition);
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

    it('renders the example', () => {
        const field = cardDefinition().find('#example');
        expect(field.length).toBeGreaterThan(0);
        expect(field.text()).toContain(props.example);
    });

    it('omits antonyms when not available', () => {
        const customProps = {
            definition: 'Lorem ipsum dolor met'
        };
        const field = cardDefinition(customProps).find('#antonyms');
        expect(field.length).toBe(0);
    });
    
    it('omits synonyms when not available', () => {
        const customProps = {
            definition: 'Lorem ipsum dolor met'
        };
        const field = cardDefinition(customProps).find('#synonyms');
        expect(field.length).toBe(0);
    });

    it('omits example when not available', () => {
        const customProps = {
            definition: 'Lorem ipsum dolor met'
        };
        const field = cardDefinition(customProps).find('#example');
        expect(field.length).toBe(0);
    });
});