import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Deck } from './Deck';
import { CardDefinition } from './CardDefinition';
import AppState from '../AppState';
import { model } from '../data/model';

configure({ adapter: new Adapter() });

const initialState = {
    words: model.words,
    currentIndex: 0
};

describe('Deck', () => {
    let props;
    let mountedDeck;
    const words = model.words;

    const deck = (state) => {
        if (!mountedDeck) {
            mountedDeck = mount(
                <AppState state={state || initialState}>
                    <Deck />
                </AppState>
            );
        }
        return mountedDeck;
    }

    beforeEach(() => {
        mountedDeck = undefined;
    });

    it('renders the title', () => {
        const p = deck().find('#title');
        expect(p.length).toBeGreaterThan(0);
        expect(p.text()).toBe(words[0].name);
    });

    it('renders the subtitle', () => {
        const p = deck().find('#subtitle');
        expect(p.length).toBeGreaterThan(0);
        expect(p.text()).toContain(words[0].type);
    });

    it('renders the definitions', () => {
        const e = deck().find(CardDefinition);
        expect(e.length).toBeGreaterThan(0);
    });

    it('renders the back button', () => {
        const e = deck().find('#backButton');
        expect(e.length).toBeGreaterThan(0);
    });

    it('renders the next button', () => {
        const e = deck().find('#nextButton');
        expect(e.length).toBeGreaterThan(0);
    });

    it('back button is disabled at the start', () => {
        const e = deck().find('#backButton').first();
        expect(e.prop('disabled')).toBe(true);
    });

    it('back button is disabled at the start', () => {
        const e = deck().find('#backButton').first();
        expect(e.prop('disabled')).toBe(true);
    });

    it('next button is disabled at the end', () => {
        const currentIndex = initialState.words.length - 1;
        const state = { ...initialState, currentIndex };
        const e = deck(state).find('#nextButton').first();
        expect(e.prop('disabled')).toBe(true);
    });

    it('next button moves to the next word', () => {
        const deckHandle = deck();
        const e = deckHandle.find('#nextButton').first();
        e.simulate('click');
        const f = deckHandle.find('#title');
        expect(f.text()).toBe(words[1].name);
    });

    it('last button moves to the last word', () => {
        const deckHandle = deck();
        const e = deckHandle.find('#lastButton').first();
        e.simulate('click');
        const f = deckHandle.find('#title');
        const lastWord = words[words.length - 1];
        expect(f.text()).toBe(lastWord.name);
    });

    it('last button moves to the last word', () => {
        const deckHandle = deck();
        const e = deckHandle.find('#lastButton').first();
        e.simulate('click');
        const f = deckHandle.find('#title');
        const lastWord = words[words.length - 1];
        expect(f.text()).toBe(lastWord.name);
    });

    it('first button moves to the first word', () => {
        const state = {
            ...initialState,
            currentIndex: words.length - 1
        };
        const deckHandle = deck(state);
        const e = deckHandle.find('#firstButton').first();
        e.simulate('click');
        const f = deckHandle.find('#title');
        expect(f.text()).toBe(words[0].name);
    });
});