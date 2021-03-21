import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({ adapter: new Adapter() });

describe('<NavigationItems />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it('Should render two <NavigationItem /> elements if not authenticated', () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });

  it('Should render three <NavigationItem /> elements if authenticated', () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });

  it('Should render logout <NavigationItem /> element if authenticated', () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(
      wrapper.contains(<NavigationItem link='/logout'>Log out</NavigationItem>)
    ).toEqual(true);
  });
});
