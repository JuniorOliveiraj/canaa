import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { forwardRef, useEffect, useCallback } from 'react';
import { Box } from '@mui/material';
import track from '../utils/analytics';

const Page = forwardRef(({ children, title = '', meta = [], ...other }, ref) => {
  const { pathname } = useLocation();
  const {  meta_description, meta_tags } = meta;
  const sendPageViewEvent = useCallback(() => {
    track.pageview({
      page_path: pathname
    });
  }, [pathname]);

  useEffect(() => {
    sendPageViewEvent();
  }, [sendPageViewEvent]);

  return (
    <Box ref={ref} {...other}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={meta_description} />
        <meta name="keywords" content={meta_tags} />
      </Helmet>
      {children}
    </Box>
  );
});

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object)
};

export default Page;
