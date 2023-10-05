import { useState } from 'react';
import Iconify from '../../../../components/Iconify';
// material
import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';
//
import { Block } from '../../Block';

// ----------------------------------------------------------------------

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '& > *': { m: '8px !important' }
};

export default function ToggleButtons() {
  const [alignment, setAlignment] = useState('left');
  const [formats, setFormats] = useState(() => ['bold', 'italic']);
  const [view, setView] = useState('list');
  const [selected, setSelected] = useState(false);

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };
  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Block title="Exclusive selection" sx={style}>
          <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment}>
            <ToggleButton value="left">
            <Iconify icon={'teenyicons:align-left-solid'} width='24' height='24' />
            </ToggleButton>
            <ToggleButton value="center">
            <Iconify icon={'fe:align-center'} width='24' height='24' />
            </ToggleButton>
            <ToggleButton value="right">
            <Iconify icon={'teenyicons:align-right-solid'} width='24' height='24' />
            </ToggleButton>
            <ToggleButton value="justify" disabled>
            <Iconify icon={'mingcute:align-justify-fill'} width='24' height='24' />
            </ToggleButton>
          </ToggleButtonGroup>
        </Block>
      </Grid>

      <Grid item xs={12} md={6}>
        <Block title="Multiple selection" sx={style}>
          <ToggleButtonGroup value={formats} onChange={handleFormat}>
            <ToggleButton value="bold">
            <Iconify icon={'ooui:bold-b'} width='24' height='24' />
            </ToggleButton>
            <ToggleButton value="italic">
            <Iconify icon={'fa-solid:italic'} width='24' height='24' />
            </ToggleButton>
            <ToggleButton value="underlined">
            <Iconify icon={'material-symbols:format-underlined'} width='24' height='24' />
            </ToggleButton>
            <ToggleButton value="color" disabled>
            <Iconify icon={'mdi:color'} width='24' height='24' />
            <Iconify icon={'ic:outline-arrow-drop-down'} width='24' height='24' />
            </ToggleButton>
          </ToggleButtonGroup>
        </Block>
      </Grid>

      <Grid item xs={12} md={6}>
        <Block title="Exclusive selection" sx={style}>
          <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item>
              <ToggleButtonGroup size="small" value={alignment} exclusive onChange={handleAlignment}>
                <ToggleButton value="left">
                <Iconify icon={'teenyicons:align-left-solid'} width='24' height='24' />
                </ToggleButton>
                <ToggleButton value="center">
                <Iconify icon={'fe:align-center'} width='24' height='24' />
                </ToggleButton>
                <ToggleButton value="right">
                <Iconify icon={'teenyicons:align-right-solid'} width='24' height='24' />
                </ToggleButton>
                <ToggleButton value="justify" disabled>
                <Iconify icon={'mingcute:align-justify-fill'} width='24' height='24' />
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>

            <Grid item>
              <ToggleButtonGroup size="medium" value={alignment} exclusive onChange={handleAlignment}>
                <ToggleButton value="left">
                <Iconify icon={'teenyicons:align-left-solid'} width='24' height='24' />
                </ToggleButton>
                <ToggleButton value="center">
                <Iconify icon={'fe:align-center'} width='24' height='24' />
                </ToggleButton>
                <ToggleButton value="right">
                <Iconify icon={'teenyicons:align-right-solid'} width='24' height='24' />
                </ToggleButton>
                <ToggleButton value="justify" disabled>
                <Iconify icon={'mingcute:align-justify-fill'} width='24' height='24' />
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>

            <Grid item>
              <ToggleButtonGroup size="large" value={alignment} exclusive onChange={handleAlignment}>
                <ToggleButton value="left">
                <Iconify icon={'teenyicons:align-left-solid'} width='24' height='24' />
                </ToggleButton>
                <ToggleButton value="center">
                <Iconify icon={'fe:align-center'} width='24' height='24' />
                </ToggleButton>
                <ToggleButton value="right">
                <Iconify icon={'teenyicons:align-right-solid'} width='24' height='24' />
                </ToggleButton>
                <ToggleButton value="justify" disabled>
                <Iconify icon={'mingcute:align-justify-fill'} width='24' height='24' />
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
        </Block>
      </Grid>

      <Grid item xs={12} md={6}>
        <Block title="Vertical & Standalone buttons" sx={style}>
          <ToggleButtonGroup orientation="vertical" value={view} exclusive onChange={handleChange}>
            <ToggleButton value="list">
              <Iconify icon={'material-symbols:view-list-sharp'} width='24' height='24' />
            </ToggleButton>
            <ToggleButton value="module">
              <Iconify icon={'material-symbols:view-module'} width='24' height='24' />
            </ToggleButton>
            <ToggleButton value="quilt">
              <Iconify icon={'material-symbols:view-quilt'} width='24' height='24' />
            </ToggleButton>
          </ToggleButtonGroup>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          >
            <Iconify icon={'material-symbols:check'} width='24' height='24' />
          </ToggleButton>
        </Block>
      </Grid>
    </Grid>
  );
}
