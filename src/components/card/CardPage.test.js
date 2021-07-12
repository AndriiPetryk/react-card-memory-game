import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Card from './card';
import Grunt from "../../images/grunt.png";

const mockClick = jest.fn();

let wrapper;

const DEFAULT_PROPS = {
  onClick: mockClick,
  card: {
    type: "Grunt",
    image: Grunt
  },
  index: 10,
  isInactive: false,
  isFlipped: false,
  isDisabled: false
}

const setup = props =>
  shallow(<Card {...DEFAULT_PROPS} {...props} />);

configure({adapter: new Adapter()});
describe('CardPage', () => {

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('simulates click events', () => {
    wrapper.find('.card').simulate('click');
    expect(mockClick.mock.calls.length).toEqual(1);
  });

});
