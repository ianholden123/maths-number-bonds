import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { Route } from 'react-router-dom';

const GoogleAnalytics = (props) => {
  useEffect(() => {
    const logPageChange = (pathname, search = '') => {
      const page = pathname + search;
      const { location } = window;
      ReactGA.set({
          page,
          location: `${location.origin}${page}`,
          ...props.options
      });
      ReactGA.pageview(page);
    }

    logPageChange(props.location.pathname, props.location.search);
  }, [props.location.pathname, props.location.search, props.options])

  return null;
}

GoogleAnalytics.propTypes = {
  location: PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string
  }).isRequired
};

const RouteTracker = () => <Route component={GoogleAnalytics} />;

const init = () => {
  const isProduction = process.env.NODE_ENV === 'production';
  if (isProduction) ReactGA.initialize("UA-176723134-1");
  return isProduction;
};

export default {
  GoogleAnalytics,
  RouteTracker,
  init
};