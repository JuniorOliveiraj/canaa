import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import {
  Tabs,
  Tab,
  Typography,
  Card,
  Grid,
  CardMedia,
  CardActionArea,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

import FormControlLabel from '@mui/material/FormControlLabel';
const CardPadrao = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.grey[999]
    
  }));
const TabData = [
  {
    label: 'Projetos',
    content: (
      <>
        <CardPadrao >
          <CardActionArea>
            <CardMedia
              sx={{ height: 140, backgroundColor: 'Blue' }}
              image="project1.jpg"
              title="Project 1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Project 1
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Description of project 1 goes here.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </CardPadrao>
      </>
    ),
  },
  {
    label: 'Hello World',
    content: (
      <>
        <CardPadrao >
          <CardActionArea>
            <CardMedia
              sx={{ height: 140, backgroundColor: 'red' }}
              image="project1.jpg"
              title="Project 1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Project 2
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Description of project 1 goes here.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </CardPadrao>
      </>
    ),
  },
];

export default function TabbedContent() {

  const [value, setValue] = React.useState(0);
  const matches2 = useMediaQuery('(min-width:670px)');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ flexGrow: 1, }}>
      <Grid container>
        <Grid item xs={2} sx={{
          width: '20%',
          minWidth: matches2 ? 100 : 300
        }}>
          <Tabs
            orientation={matches2 ? "vertical" :"horizontal"}
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            aria-label="Vertical tabs example"
          >
            {TabData.map((tab, index) => (
              <Tab key={tab.label} label={tab.label} />
            ))}
          </Tabs>
        </Grid>
        <Grid item xs={10} sx={{
          width: '80%',
        }}>
          {TabData[value].content}
        </Grid>
      </Grid>
    </div>
  );
}