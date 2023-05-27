import { Box, Button } from "@mui/material";

import { useState, forwardRef, useEffect } from 'react';
import { alpha, styled } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Slide from '@mui/material/Slide';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import FormAddgastoCartao from "./forms/formGastoCartao";
import TodosOsGastosList from "./todosOsGastosCard";
import Iconify from "../../../components/Iconify";
const drawerBleeding = 15;
const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function DrawerFinancas({ drawerValue, handleClose, item, usuario, gastos, ...other }) {
    const [openAdd, setOpenAdd] = useState(drawerValue);
    useEffect(() => {
        setOpenAdd(drawerValue);
    }, [drawerValue]);



    const handleClose2 = (x) => {
        setOpenAdd(false);
        handleClose(false);
    };
    return (
        <Box>
            <SwipeableDrawer
                anchor="bottom"
                open={openAdd}
                onClose={handleClose2}
                onOpen={() => { }}
                TransitionComponent={Transition}
                disableSwipeToOpen
                {...other}
            >
                <Box

                    sx={{
                        position: 'absolute',
                        top: -drawerBleeding,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        visibility: 'visible',
                        right: 0,
                        left: 0,
                        backgroundColor: (theme) => alpha(theme.palette.grey[999], 0.9),
                    }}
                >
                    <Puller />
                </Box>
                <List sx={{ backgroundColor: (theme) => alpha(theme.palette.grey[100], 0.9), height: '100%', width: '100%' }}>
                    <Button  onClick={handleClose2}><Iconify Onclick={handleClose2} icon={'ion:chevron-back-circle'} sx={{ width: 40, height: 40 }} /></Button>
                    <ListItem sx={{ width: '100%', paddingTop: 5 }}>
                        {
                            item.title === 'gasto cartão' ? <FormAddgastoCartao feixar={handleClose2} usuario={usuario} /> :
                            item.title === 'todos os gastos' ? <TodosOsGastosList feixar={handleClose2} gastos={gastos} /> :
                            <p>{item.title}</p>
                        }
                    </ListItem>
                        <Divider />
                </List>
            </SwipeableDrawer>
        </Box>
    );
}

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.grey[200],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));

