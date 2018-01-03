import React from 'react';
import { fromJS } from 'immutable';
import { Demo } from '../index';

describe('Demo Component', () => {
  it('should render correctly', () => {
    const props = {
      t: jest.fn(),
      demo: fromJS({
        count: 0,
      }),
      demoActions: {},
    };
    const wrapper = shallow(<Demo {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
