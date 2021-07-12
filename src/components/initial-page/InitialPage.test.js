import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import InitialPage from './initialPageContainer';

configure({adapter: new Adapter()});
describe('InitialPage', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<InitialPage />);
    expect(wrapper.exists()).toBe(true);
  });
});
