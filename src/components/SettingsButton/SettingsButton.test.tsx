import React from 'react';
import { shallow } from 'enzyme';

import SettingsButton from './SettingsButton';

describe('<SettingsButton />', () => {
  it('should render a button', () => {
    const wrapper: any = shallow(<SettingsButton />)
    expect(wrapper.find('button')).toHaveLength(1)
  })

  it('should contain a Link to the Settings page', () => {
    const wrapper: any = shallow(<SettingsButton />)
    expect(wrapper.find('Link').prop('to')).toEqual('/settings');
  })
})