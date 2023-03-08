

import { styled } from '@mui/material/styles';
import { Card, SwipeableDrawer, Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
// components
import Iconify from '../../components/Iconify';
import * as React from "react";
import { useRef, useState } from "react";
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, RHFTextField } from '../../components/hook-form';
import { LoadingButton } from '@mui/lab';
// ----------------------------------------------------------------------
const drawerBleeding = 56;
const CardPadrao = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.grey[999]
}));


const SwipeableEdge = styled(SwipeableDrawer)(({ theme }) => ({
    '& .MuiPaper-root': {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    '& .MuiDrawer-paperAnchorBottom': {
        height: 'calc(100% - 350px)',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        boxShadow: theme.customShadows.z20,
        overflow: 'hidden',
        paddingTop: 48,
        paddingBottom: 24,
    },
    '& .MuiDrawer-paperAnchorBottom .MuiTypography-root': {
        marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
        '& .MuiDrawer-paperAnchorBottom': {
            width: '100%',
            backgroundColor: theme.palette.grey[999]
        },
    },
}));

// ----------------------------------------------------------------------


export default function AdicionarCartao({ sx, Iduser, ...other }) {
    const matchDownSM = useMediaQuery('(min-width:700px)');
    const [open, setopen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setopen(open);
    };
    return (
        <>
            <CardPadrao
                onClick={toggleDrawer(true)}
                sx={{
                    py: 6,
                    boxShadow: 1,
                    textAlign: 'center',
                    height: matchDownSM ? '190px' : '175px',
                    backgroundImage:
                        'radial-gradient(ellipse farthest-corner at 10% 0%, #5470cb 0%, #3f55a2 70%, #4760b4 20%);',
                    ...sx
                }}
                {...other}
            >
                <Iconify
                    cursor={'pointer'}
                    icon={'material-symbols:add-circle-sharp'}
                    width={100}
                    height={100}
                    color='#ffffff'
                />
            </CardPadrao>
            <Swipeablemobile open={open} toggleDrawer={toggleDrawer} Iduser={Iduser} />

        </>
    );

}
const Swipeablemobile = ({ open, toggleDrawer, Iduser }) => {
    const methodsRef = useRef(null); // criar uma referência para o objeto 'methods'
    /******************
    validar formulario 
    ************************** */
    const [defoutEmail, setdefoutEmail] = useState(false);
    const LoginSchema = Yup.object().shape({
        email: !defoutEmail ? '' : Yup.string().email('Email must be a valid email address').required('Email is required'),
    });
    const defaultValues = {
        email: '',
    };
    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });

    methodsRef.current = methods; // atribuir a referência ao objeto 'methods'

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const onSubmit = async (data, e) => {
        console.log(data)

    };
    return (
        <React.Fragment>
            <SwipeableEdge
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <FormProvider
                        methods={methods}
                        onSubmit={handleSubmit(onSubmit)}>
                        {!defoutEmail ? <RHFTextField name="email" label="Email address" value={""} onClick={e => { setdefoutEmail(true) }} /> : <RHFTextField name="email" label="Email address" />}
                        <LoadingButton fullWidth size="large" type="submit" loading={isSubmitting} sx={{ width: '6ch', backgroundColor: '#FA541C', color: '#ffffff', '&:hover': { backgroundColor: '#37514d' } }}>
                            <Iconify icon="material-symbols:chevron-right" width={25} height={25} style={{ marginRight: 5, marginTop: 5 }} />
                        </LoadingButton>

                    </FormProvider>
                </Box>
            </SwipeableEdge>
        </React.Fragment>
    )
}
