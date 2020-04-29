import React from 'react';
import { reducer } from './index';

//PLAN:
//TODO: test animal choice
//TODO: test environment choice
//TODO: test localGroups choice
//TODO: test event choice
//TODO: test default case (by doing an action not defined in the reducer)
//FIXME: investigate how to simplify with string interpolation/dolla squigz to reduce repetition

//FIXME: have a look into beforeEach and afterEach for tests - might help as each test should be completely stand alone, and there is some potential here for stuff to "leak" between tests

/*
TODO:
Next step is to use variables for these. I actually like having these in a file called actionTypes.js and then exporting:

export const ADD_ANIMAL_CHOICE = 'ADD_ANIMAL_CHOICE';
export const ADD_EVENTS_CHOICE = 'ADD_EVENTS_CHOICE';
Then you can import into both the test file and the reducer file and you'll be using the same variables everywhere. Easy to add more, and easy to change what the strings were if you wanted then (and no chance of typos).

You could import into files as:

import {ADD_ANIMAL_CHOICE} from '../actionTypes.js';

// or

import * as actions from '../actionTypes.js';

// and then you'd do actions.ADD_ANIMAL_CHOICE, etc
*/

const initialState = { quizResults: [] };

describe('reducer', () => {
  it('should add an animal response when animal choice is made', function () {
    const actual = reducer(initialState, {
      type: 'add-animal-choice',
    });
    expect(actual).toEqual({ quizResults: ['animals'] });
  });
  it('should add an environment response when environment choice is made', function () {
    const actual = reducer(initialState, {
      type: 'add-environment-choice',
    });
    expect(actual).toEqual({ quizResults: ['environment'] });
  });
  it('should add an localGroups response when localGroups choice is made', function () {
    const actual = reducer(initialState, {
      type: 'add-localGroups-choice',
    });
    expect(actual).toEqual({ quizResults: ['localGroups'] });
  });
  it('should add an localGroups response when events choice is made', function () {
    const actual = reducer(initialState, {
      type: 'add-events-choice',
    });
    expect(actual).toEqual({ quizResults: ['events'] });
  });
  it('should not add anything to quizResults array when an action outside of defined types happens', function () {
    const actual = reducer(initialState, {
      type: 'add-undefined-choice',
    });
    expect(actual).toEqual(initialState);
  });
});
