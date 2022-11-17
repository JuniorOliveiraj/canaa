
// material
import { Box, Card, Grid,  Container,  CardContent,  Avatar, Tabs, Tab, Paper } from '@mui/material';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

// components
import Page from '../components/Page';


import Iconify from '../components/Iconify';

import { styled } from '@mui/material/styles';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
// mock

const CardMediaStyle = styled('div')({
  position: 'relative',
  paddingTop: window.innerWidth > 500 ? 'calc(50% * 2 / 7)' : 'calc(50% * 2 / 4)',
});



const TitleStyle = styled('h1')(({ theme }) => ({
  zIndex: 9,
  fontSize: '1.4em',
  position: 'absolute',
  color: '#ffffff',



}));


const AvatarStyle = styled(Avatar)(({ theme, matches }) => ({
  zIndex: 9,


  border: '3px solid #ffffff',

}));
const CoverImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------
export default function Perfil() {

  const [value, setValue] = useState(0);
  const matches = useMediaQuery('(min-width:900px)');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(value)
  const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;
  return (
    <Page title="Dashboard: perfil">
      <Container >





        <Grid xs={8}>
          <Card sx={{
            position: 'relative',
          }}>
            <CardMediaStyle
              sx={{
                alignItems: matches ? 'left' : 'center',
                textAlign: matches ? 'left' : 'center',
                display: 'flex',
                textAlign: matches ? 'left' : 'center',
                justifyContent: matches ? 'left' : 'center',
              }}

            >

              <AvatarStyle
                sx={{
                  width: matches ? 150 : 100,
                  height: matches ? 150 : 100,
                  top: matches ? 20 : -50,
                  left: matches ? 30 : 0

                }}

                alt="teste junior"
                src="https://media-exp1.licdn.com/dms/image/C4D03AQHcbFe9-Phe1Q/profile-displayphoto-shrink_200_200/0/1656433703054?e=1674086400&v=beta&t=R3JO2gZg4qI9gBV7PLAt1pYB8HS7xn_MSoyWInSjYC0"

              />
              <TitleStyle
                sx={{
                  left: matches ? 200 : false,
                  bottom: matches ? 50 : 10,
                }}
              >
                {"junior oliveira"}

              </TitleStyle>

              <CoverImgStyle alt="teste foto" src="https://miro.medium.com/max/786/1*92adf06PCF91kCYu1nPLQg.jpeg" />
            </CardMediaStyle>

            <CardContent
              sx={{
                float: matches ? 'right' : 'center',
                marginTop: -4,

              }}

            >
              <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Tabs value={value} onChange={handleChange} centered={matches ? false : true}  >
                  <Tab icon={getIcon('mdi:pencil')} label="editar " iconPosition="start" />
                  <Tab icon={getIcon('eva:file-text-fill')} label="Blog" iconPosition="start" />
                  <Tab icon={getIcon('material-symbols:person-add')} label="amigos" iconPosition="start" />
                </Tabs>
              </Box>

            </CardContent>
          </Card>
        </Grid>

        <Grid xs={8}>
          <Item value={value}>
      s

        
          </Item>
        </Grid>

      </Container>

    </Page>
  );
}