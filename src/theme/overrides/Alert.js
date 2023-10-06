import Iconify from '../../components/Iconify';
// ----------------------------------------------------------------------

export default function Alert(theme) {
  const isLight = theme.palette.mode === 'light';

  const standardStyle = (color) => ({
    color: theme.palette[color][isLight ? 'darker' : 'lighter'],
    backgroundColor: theme.palette[color][isLight ? 'lighter' : 'darker'],
    '& .MuiAlert-icon': {
      color: theme.palette[color][isLight ? 'main' : 'light']
    }
  });

  const filledStyle = (color) => ({
    color: theme.palette[color].contrastText
  });

  const outlinedStyle = (color) => ({
    color: theme.palette[color][isLight ? 'darker' : 'lighter'],
    border: `solid 1px ${theme.palette[color][isLight ? 'light' : 'dark']}`,
    backgroundColor: theme.palette[color][isLight ? 'lighter' : 'darker'],
    '& .MuiAlert-icon': {
      color: theme.palette[color][isLight ? 'main' : 'light']
    }
  });

  return {
    MuiAlert: {
      defaultProps: {
        iconMapping: {
          error: <Iconify icon={'material-symbols:info'} />,
          info: <Iconify icon={'mdi:alert-circle'} />,
          success: <Iconify icon={'ion:checkmark-circle'} />,
          warning: <Iconify icon={'tabler:alert-triangle-filled'} />
        }
      },

      styleOverrides: {
        message: {
          '& .MuiAlertTitle-root': {
            marginBottom: theme.spacing(0.5)
          }
        },
        action: {
          '& button:not(:first-of-type)': {
            marginLeft: theme.spacing(1)
          }
        },

        standardInfo: standardStyle('info'),
        standardSuccess: standardStyle('success'),
        standardWarning: standardStyle('warning'),
        standardError: standardStyle('error'),

        filledInfo: filledStyle('info'),
        filledSuccess: filledStyle('success'),
        filledWarning: filledStyle('warning'),
        filledError: filledStyle('error'),

        outlinedInfo: outlinedStyle('info'),
        outlinedSuccess: outlinedStyle('success'),
        outlinedWarning: outlinedStyle('warning'),
        outlinedError: outlinedStyle('error')
      }
    }
  };
}
