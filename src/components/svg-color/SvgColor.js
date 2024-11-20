import { forwardRef } from 'react';
import Box from '@mui/material/Box';

const svgColorClasses = { root: 'mnl__svg__color__root' };

export const SvgColor = forwardRef((props, ref) => {
  const { src, width = 24, height, className, sx, ...other } = props;

  return (
    <Box
      ref={ref}
      component="span"
      className={svgColorClasses.root.concat(className ? ` ${className}` : '')}
      sx={{
        width,
        flexShrink: 0,
        height: height ?? width,
        display: 'inline-flex',
        bgcolor: 'currentColor',
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        ...sx,
      }}
      {...other}
    />
  );
});
