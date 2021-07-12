import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import ResultPage from './result-page';


let wrapper;

const DEFAULT_PROPS = {
  onClick,
  card,
  index,
  isInactive: false,
  isFlipped: false,
  isDisabled: false
}

const setup = props =>
  shallow(<ResultPage {...DEFAULT_PROPS} {...props} />);

configure({adapter: new Adapter()});
describe('ResultPage', () => {

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
  });

});
