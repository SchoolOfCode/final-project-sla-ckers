import React from 'react';
import { matchReducer } from './index';

describe('reducer', () => {
  it('should add test org to matchResults array when swiped right', function () {
    const initialMatchState = { matchResults: [], swipeRights: 0 };
    const org = { orgName: 'Test Org' };
    const actual = matchReducer(initialMatchState, {
      type: 'swipe-right',
      payload: org,
    });
    expect(actual).toEqual({ matchResults: [org], swipeRights: 1 });
  });
  it('should not add test org to matchResults array when swiped left', function () {
    const initialMatchState = { matchResults: [], swipeRights: 0 };
    const org = { orgName: 'Test Org' };
    const actual = matchReducer(initialMatchState, {
      type: 'swipe-left',
      payload: org,
    });
    expect(actual).toEqual(initialMatchState);
  });
});
