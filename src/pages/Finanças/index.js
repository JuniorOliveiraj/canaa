import { faker } from '@faker-js/faker';


// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Box } from '@mui/material';


import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Button, Dialog, DialogActions, DialogContentText, DialogContent, DialogTitle, useMediaQuery, Paper } from '@mui/material';
import Slide from '@mui/material/Slide';
import { alpha, styled } from '@mui/material/styles';


// components
import Page from '../../components/Page';
import { useState, forwardRef, useEffect } from 'react';
import Iconify from '../../components/Iconify';

//import Iconify from '../../components/Iconify';
// sections
import {
    AppOrderTimeline,
    /*AppTasks,
    AppNewsUpdate,
   
    AppCurrentVisits,
    AppWebsiteVisits,
    AppTrafficBySite,
    AppWidgetSummary,
    AppCurrentSubject,
    AppConversionRates,*/
} from '../../sections/@dashboard/app';
import { db } from '../../firebase';
import { collection, query,/* where, */getDocs } from "firebase/firestore";
import Cartao from './cartao';




// firebase 


//   cores = info,  primary , secondary,  success, warning, error







// ----------------------------------------------------------------------

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body,
    padding: theme.spacing(1),
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    index: 1,
    justifyContent: ' center',
    flexWrap: 'wrap',
    color: theme.palette.text.secondary,
    margin: 10,
}));
const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 30;
const APPBAR_DESKTOP = 92;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    minHeight: APPBAR_MOBILE,
    [theme.breakpoints.up('lg')]: {
        minHeight: APPBAR_DESKTOP,
        padding: theme.spacing(0, 5),
    },
}));

const RootStyle = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
    backgroundColor: alpha(theme.palette.background.default, 0.72),
    color: theme.palette.text.secondary,
    [theme.breakpoints.up('lg')]: {
        width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
    },
}));
export default function Finanças() {
    /* 
    *
    *
    *Buscar 
    *
    */

    const cards = [{
        id: 1,
        title: '? ',
        total: '?.???',
        color: 'primary',
        rotate: 2

    }, {
        id: 1,
        title: '? ',
        total: '?.???',
        color: 'primary',
        rotate: 2

    }]
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );
    const [errorMessage, setErrorMessage] = useState()
    const [dataApiFireBase, setDataApiFireBase] = useState(null);
    const CoarCondition = [];

    const [state, setState] = useState({
        openNotification: false,
        vertical: 'top',
        horizontal: 'right',

    });
    console.log(errorMessage, state)

    // const { vertical, horizontal, openNotification } = state;
    // const handleClose2 = () => {
    //   setState({ ...state, openNotification: false });
    // };

    useEffect(() => {
        const dbFirebase = async () => {
            try {

                const q = query(collection(db, "Cartoes")/*, where("capital", "==", true)*/);
                const querySnapshot = await getDocs(q);
                const dbData = [];
                querySnapshot.forEach(function (doc) {
                    dbData.push(doc.data());
                });

                // console.log( dbData)
                setDataApiFireBase(dbData)
            } catch (error) {
                console.log("Fire base => ", error.message)
                const daleyNotification = async () => {
                    await delay(100);
                    setState({
                        openNotification: true,
                        vertical: 'top',
                        horizontal: 'right',

                    })
                    setErrorMessage(error.message === "Missing or insufficient permissions." ? "sem permição Firebase" : error.message)

                }; daleyNotification()
            }
        };
        dbFirebase()
    }, []);


    const cardsFireBase = [];
    if (dataApiFireBase !== null) {
        dataApiFireBase.forEach(function (e) {
            cardsFireBase.push(e)
        })
    }



    const theme = useTheme();

    const [open, setOpen] = useState(false);
    const [totalCard, setTotalCard] = useState(null);

    const openTrue = (total, id, openValor) => {
        setTotalCard({ total, id, openValor })
        setOpen(true)
    }



    const handleClose = (e) => {
        setOpen(false);
    };
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const [activeStep, setActiveStep] = useState(0);

    const [gridList, setGridList] = useState(false);
    const GridList = () => {
        setGridList(true)
    }
    const GridList2 = () => {
        setGridList(false)
    }
    const handleStepChange = (step) => {
        setActiveStep(step);
    };
//   if (dataApiFireBase !== null && matchDownSM) {
//     CoarCondition.push({ value: 1 })
//   }  else if (dataApiFireBase !== null && !matchDownSM) {
//     CoarCondition.push({ value: 3 })
//   }


    if (dataApiFireBase === null) {
        CoarCondition.push({ value: 2 })
    }
    else if (dataApiFireBase != null) {
        CoarCondition.push({ value: 4 })
    }






    return (
        <Page title="Dashboard">
            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Hi, Welcome back {matchDownSM && (
                        <Iconify cursor={'pointer'} icon={!gridList ? 'ic:baseline-grid-view' : 'material-symbols:format-list-bulleted'} width={25} height={25} sx={{ float: 'right', marginRight: 2 }} onClick={gridList ? GridList2 : GridList} />
                    )}
                </Typography>

                <Grid container spacing={3}>





                    {CoarCondition[0].value === 2 && (
                        cards.map((index) => (
                            <Grid item xs={12} sm={6} md={4}>
                                <Cartao id={index.id} title={index.title} total={index.total} rotate={index.rotate} color={index.color} adicionar={openTrue} />
                            </Grid>
                        ))
                    )}



                    {CoarCondition[0].value === 4 && (


                        dataApiFireBase.map((index) => (
                            <Grid item xs={12} sm={6} md={4}>
                                <Cartao id={index.id} title={index.title} total={index.total} rotate={index.rotate} color={index.color} adicionar={openTrue} />
                            </Grid>
                        ))
                    )}

                    {/* { ()=>{
        switch (CoarCondition[0].value) {
          case 1:
            
            break;
            case 2:
              
              break;
              case 3:
          
              
              
             
                  <SwipeableViews
                  axis={"x-reverse" }
                  index={activeStep}
                  onChangeIndex={handleStepChange}
                  item 
                  spacing={3}
                  sx={{ mb: 5  , margin: 3 , padding:3}}
                  enableMouseEvents
                >
                  {cards.map((index) => (
                    <Grid item xs={12} sm={6} md={4}  sx={{ mb: 5  , margin: 3 , padding:3}}>
                      <Cartao id={index.id} title={index.title} total={index.total} rotate={index.rotate} color={index.color} adicionar={openTrue} />
                    </Grid>
                  ))}
                </SwipeableViews> 
                
            break;
            case 4:
            console.log('Oranges are $0.59 a pound.');
            break;
          default:
            //console.log(`Sorry, we are out of ${expr}.`);
        }
        
       }
      
       } */}



                    {/* {cardsFireBase.length > 0 ? cardsFireBase.map((index) => (
            <Grid item xs={12} sm={6} md={4}>
              <Cartao id={index.id} title={index.title} total={index.total} rotate={index.rotate} color={index.color} adicionar={openTrue} />
            </Grid>
          )) :
            cards.map((index) => (
              <Grid item xs={12} sm={6} md={4}>
                <Cartao id={index.id} title={index.title} total={index.total} rotate={index.rotate} color={index.color} adicionar={openTrue} />
              </Grid>
            ))
          } */}


                    {/* {CoarCondition ? 
          
        :cards.map((index) => (
            <Grid item xs={12} sm={6} md={4}>
              <Cartao id={index.id} title={index.title} total={index.total} rotate={index.rotate} color={index.color} adicionar={openTrue} />
            </Grid>
          )) 
        
        
        
        } */}






                    {/* <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="New Users" total={1352831} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Item Orders" total={1723315} color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Bug Reports" total={234} color="error" icon={'ant-design:bug-filled'} />
          </Grid> */}

                    {/* <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Website Visits"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid> */}

                    {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Current Visits"
              chartData={[
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.chart.blue[0],
                theme.palette.chart.violet[0],
                theme.palette.chart.yellow[0],
              ]}
            />
          </Grid> */}
                    {/* 
          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Conversion Rates"
              subheader="(+43%) than last year"
              chartData={[
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ]}
            />
          </Grid> */}

                    {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Current Subject"
              chartLabels={['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math']}
              chartData={[
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid> */}

                    {/* <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/static/mock-images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid> */}

                    <Grid item xs={12} md={6} lg={4}>
                        <AppOrderTimeline
                            title="Ultimos gastos "
                            list={[...Array(5)].map((_, index) => ({
                                id: faker.datatype.uuid(),
                                title: [
                                    '1983, orders, $4220',
                                    '12 Invoices have been paid',
                                    'Order #37745 from September',
                                    'New order placed #XF-2356',
                                    'New order placed #XF-2346',
                                ][index],
                                type: `order${index + 1}`,
                                time: faker.date.past(),
                            }))}
                        />
                    </Grid>



                </Grid>
            </Container>
            <DialogAdicionar media={matchDownSM} handleClose={handleClose} valores={open ? totalCard : null} />
        </Page>
    );
}
function DialogAdicionar({/*valores =>*/ media, valores, /*cunctions =>*/  handleClose, ...other }) {
    const [openAdd, setOpenAdd] = useState(false);

    if (valores != null && openAdd === false) {
        if (valores.openValor) {
            setOpenAdd(true)
        }

    }
    const handleClose2 = () => {
        setOpenAdd(false)
        handleClose(false);
    };
    if (media) {
        if (valores != null) {
            return (
                <div>
                    <Dialog
                        fullScreen
                        open={openAdd}
                        onClose={handleClose2}
                        TransitionComponent={Transition}
                    >
                        <RootStyle sx={{ position: 'relative' }}>
                            <ToolbarStyle >
                                <IconButton
                                    edge="start"

                                    onClick={handleClose2}
                                    aria-label="close"

                                >
                                    <Iconify cursor={'pointer'} icon={'material-symbols:arrow-back'} width={30} height={30} />
                                    {/* <CloseIcon />  botão de close */}
                                </IconButton>
                                <Typography sx={{ ml: 2, flex: 1, }} variant="h6" component="div">
                                    New Expense
                                </Typography>

                                {/* <Button autoFocus color="inherit" onClick={handleClose} sx={{ color:'black'}}>
                    save
                  </Button> */}
                            </ToolbarStyle>
                        </RootStyle>
                        <List>
                            <Grid item xs={12} md={6} lg={4}>
                                <Item>

                                    {"R$ " + valores.total}
                                </Item>
                            </Grid>
                            <Divider />
                            <ListItem button>
                                <ListItemText
                                    primary="Default notification ringtone"
                                    secondary="Tethys"
                                />
                            </ListItem>
                        </List>
                    </Dialog>
                </div>
            )
        }
    } else {
        if (valores != null) {
            return (
                <div>
                    <Dialog
                        open={openAdd}
                        onClose={handleClose2}
                        aria-labelledby="draggable-dialog-title"
                    >
                        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
                            Subscribe
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                <Grid item xs={12} md={6} lg={4}>
                                    <Item>

                                        {"R$ " + valores.total}
                                    </Item>
                                </Grid>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={handleClose2}>
                                Cancel
                            </Button>
                            <Button onClick={handleClose2}>Subscribe</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            )
        }
    }
}
