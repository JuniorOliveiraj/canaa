import { faker } from '@faker-js/faker';


// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';


import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Button, Dialog, DialogActions, DialogContentText, DialogContent, DialogTitle, useMediaQuery, Paper , Stack} from '@mui/material';
import Slide from '@mui/material/Slide';
import { alpha, styled } from '@mui/material/styles';





import { LoadingButton } from '@mui/lab';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, RHFTextField } from '../../components/hook-form';


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
    //const [activeStep, setActiveStep] = useState(0);

    const [gridList, setGridList] = useState(false);
    const GridList = () => {
        setGridList(true)
    }
    const GridList2 = () => {
        setGridList(false)
    }
    // const handleStepChange = (step) => {
    //     setActiveStep(step);
    // };
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


//     const [defoutEmail, setdefoutEmail] = useState(false);
// const [defoutName, setdefoutName] = useState(false);
// const [defoutSobrenome, setdefoutSobrenome] = useState(false);
// const [defoutTelefone, setdefoutTelefone] = useState(false);
// const [defoutRole, setdefoutRole] = useState(false);
// const [defoutComunity, setdefoutComunity] = useState(false);


    const LoginSchema = Yup.object().shape({
        value:  Yup.string().required('name is required'),
    });

    const defaultValues = {
      
        value: '',
    
       
    };

    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });

        const {
            handleSubmit,
            formState: { isSubmitting },
        } = methods;

    const onSubmit = async (data, e) => {
        // if(!defoutEmail || !defoutName || !defoutSobrenome || !defoutTelefone || !defoutRole || !defoutComunity){
        //     alert("não foi")
        // }
        console.log("data")

        //  login(data.email, data.password).then((val) => val ? null:setState({ ...state, openNotification: true }) );


    };
    const matches = useMediaQuery('(min-width:900px)');
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
                                <Grid xs={matches ? 6 : 22} md={8}>

                                    <Item>
                                        <FormProvider
                                            methods={methods}
                                            onSubmit={handleSubmit(onSubmit)}
                                            >
                                            <Stack >

                                                <Paper spacing={2} sx={{
                                                    '& > :not(style)': { m: 1.5, width: '35ch' },
                                                }}>
                                                    <RHFTextField name="value" label="valor " type="number"/>
                                                   
                                                </Paper>
                                            </Stack>
                                            <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting} sx={{ width: '18ch', float: 'right', m: 1.5 }}>
                                                Login
                                            </LoadingButton>
                                        </FormProvider>
                                    </Item>
                                </Grid>
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
