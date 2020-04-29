import React from 'react';
import { reducer } from './index';

//PLAN:
//TODO: test animal choice
//TODO: test environment choice
//TODO: test localGroups choice
//TODO: test event choice
//TODO: test default case (by doing an action not defined in the reducer)

//FIXME: have a look into beforeEach and afterEach for tests - might help as each test should be completely stand alone, and there is some potential here for stuff to "leak" between tests

import {
  ADD_ANIMAL_CHOICE,
  ADD_ENVIRONMENT_CHOICE,
  ADD_LOCALGROUPS_CHOICE,
  ADD_EVENTS_CHOICE,
} from './actionTypes';

const initialState = { quizResults: [] };

describe('reducer', () => {
  it('should add an animal response when animal choice is made', function () {
    const actual = reducer(initialState, {
      type: ADD_ANIMAL_CHOICE,
    });
    expect(actual).toEqual({ quizResults: ['animals'] });
  });
  it('should add an environment response when environment choice is made', function () {
    const actual = reducer(initialState, {
      type: ADD_ENVIRONMENT_CHOICE,
    });
    expect(actual).toEqual({ quizResults: ['environment'] });
  });
  it('should add an localGroups response when localGroups choice is made', function () {
    const actual = reducer(initialState, {
      type: ADD_LOCALGROUPS_CHOICE,
    });
    expect(actual).toEqual({ quizResults: ['localGroups'] });
  });
  it('should add an localGroups response when events choice is made', function () {
    const actual = reducer(initialState, {
      type: ADD_EVENTS_CHOICE,
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
