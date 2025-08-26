const config = {
    // basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
    // like '/berry-material-react/react/default'
    basename: '/free',
    defaultPath: '/default',
    fontFamily: `'Satoshi', sans-serif`,
    borderRadius: 12
};
export const googleAnalyticsConfig = process.env.REACT_APP_GA_MEASUREMENT_ID;
export default config;
