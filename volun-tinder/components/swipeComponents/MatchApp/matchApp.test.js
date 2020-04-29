import React from 'react';
import { matchReducer } from './index';

const initialMatchState = { matchResults: [], swipeRights: 0 };
const org = { orgName: 'Test Org' };

describe('matchReducer', () => {
  it('should add test org to matchResults array when swiped right', function () {
    const actual = matchReducer(initialMatchState, {
      type: 'swipe-right',
      payload: org,
    });
    expect(actual).toEqual({ matchResults: [org], swipeRights: 1 });
  });
  it('should not add test org to matchResults array when swiped left', function () {
    const actual = matchReducer(initialMatchState, {
      type: 'swipe-left',
      payload: org,
    });
    expect(actual).toEqual(initialMatchState);
  });
  it('should not add test org to matchResults array when an undefined action happens', function () {
    const actual = matchReducer(initialMatchState, {
      type: 'swipe-undefined',
      payload: org,
    });
    expect(actual).toEqual(initialMatchState);
  });
});
