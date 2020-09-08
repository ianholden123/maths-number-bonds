import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';
import Home from './pages/Home/Home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<App />', () => {
  it('renders the <Home /> page.', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Home)).toHaveLength(1);
  })
})
