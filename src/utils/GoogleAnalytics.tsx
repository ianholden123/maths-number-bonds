import React, { useEffect } from 'react';
import * as H from 'history'
import ReactGA from 'react-ga';
import { Route } from 'react-router-dom';

interface GoogleAnalyticsProps {
  location: H.Location
  options: any
}

const GoogleAnalytics = (props: GoogleAnalyticsProps) => {
  useEffect(() => {
    const logPageChange = (pathname: any, search = '') => {
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

const RouteTracker = () => <Route component={GoogleAnalytics} />;

const init = (): boolean => {
  const isProduction = process.env.NODE_ENV === 'production';
  if (isProduction) ReactGA.initialize("UA-176723134-1");
  return isProduction;
};

export default {
  GoogleAnalytics,
  RouteTracker,
  init
};