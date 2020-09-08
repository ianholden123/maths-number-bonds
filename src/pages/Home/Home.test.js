import React from 'react';
import { shallow } from 'enzyme';

import Home from './Home';
import SettingsButton from '../../components/SettingsButton/SettingsButton';

describe('<Home />', () => {
  it('renders the <SettingsButton /> component.', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(SettingsButton)).toHaveLength(1);
  })
})