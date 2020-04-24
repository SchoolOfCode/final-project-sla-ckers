import React from 'react';
import { matchReducer } from './index';

describe('reducer', () => {
  it('should add a todo', function () {
    const initialMatchState = { matchResults: [] };
    const org = { orgName: 'Test Org' };
    const actual = matchReducer(initialMatchState, {
      type: 'swipe-right',
      payload: org,
    });
    expect(actual).toEqual([{ org }]);
  });
});
