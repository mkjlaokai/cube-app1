import * as at from '../actionTypes';
import reducer from '../reducer';

describe('main reducer', () => {
  it('should add count correctly', () => {
    const result = reducer(undefined, {
      type: at.ADD_COUNT,
    });
    expect(result.get('count')).toBe(1);
  });

  it('should minus count correctly', () => {
    const result = reducer(undefined, {
      type: at.MINUS_COUNT,
    });
    expect(result.get('count')).toBe(-1);
  });
});
