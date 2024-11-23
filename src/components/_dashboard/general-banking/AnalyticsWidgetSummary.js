import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { alpha, useTheme } from '@mui/material/styles';
 
import { fNumber,  fPercent, fShortenNumber} from '../../../utils/formatNumber';
 

import Iconify from '../../Iconify';
import { ChartApp } from '../../charts/CartsApp'; 
import { SvgColor } from '../../svg-color/SvgColor';

//import { Chart, useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function AnalyticsWidgetSummary({
  icon,
  title,
  total,
  chart,
  percent,
  color = 'primary',
  sx,
  ...other
}) {
  const theme = useTheme();


  const chartColors = [theme.palette[color].main];

  const chartOptions = {
    chart: { sparkline: { enabled: true } },
    colors: chartColors,
    xaxis: { categories: chart.categories },
    grid: {
      padding: {
        top: 7,
        left: 7,
        right: 7,
        bottom: 7,
      },
    },
    tooltip: {
      y: { formatter: (value) => fNumber(value), title: { formatter: () => '' } },
    },
    ...chart.options,
  }
  

  const renderTrending = (
    <Box
      sx={{
        py:5,
        top: 16,
        gap: 0.5,
        right: 16,
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
      }}
    >
      <Iconify width={20} icon={percent < 0 ? 'eva:trending-down-fill' : 'eva:trending-up-fill'} />
      <Box component="span" sx={{ typography: 'subtitle2' }}>
        {percent > 0 && '+'}
        {fPercent(percent)}
      </Box>
    </Box>
  );

  return (
    <Card
      sx={{ 
        ...bgGradient({
            color: `135deg, ${alpha(theme.palette[color].darker, 0.08)},  ${alpha(theme.palette[color].lighter, 0.08)}`,
          }),
        p: 3, 
        boxShadow: 'none',
        position: 'relative',
        //color: `${color}.darker`,
        //background: 'opacity(50)',
        ...sx,
      }}
      {...other}
    >
      <Box sx={{ width: 48, height: 48, mb: 3 }}>{icon}</Box>

      {renderTrending}

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}
      >
        <Box sx={{ flexGrow: 1, minWidth: 112 }}>
          <Box sx={{ mb: 1, typography: 'subtitle2' }}>{title}</Box>
          <Box sx={{ typography: 'h4' }}>{fShortenNumber(total)}</Box>
        </Box>

        <ChartApp
          type="line"
          series={[{ data: chart.series }]}
          options={chartOptions}
          width={84}
          height={56}
        />
   
      </Box>
      

     
      <SvgColor
        src="/static/background/shape-square.svg"
        sx={{
          top: 0,
          left: -20,
          width: 240,
          zIndex: -1,
          height: 240,
          opacity: 0.24,
          position: 'absolute',
          color: `${color}.main`,
        }}
      />
     *
    </Card>
  );
}


export function bgGradient({ color, imgUrl }) {
    if (imgUrl) {
      return {
        background: `linear-gradient(${color}), url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      };
    }
    return { background: `linear-gradient(${color})` };
  }
  