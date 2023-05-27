import { Grid, Typography } from '@mui/material';
import { Card, Box } from '@mui/material';
import Iconify from '../../../components/Iconify';
import DrawerFinancas from './DrawerMobile';
import { useState } from 'react';
export default function CardFinacas({ matchDownSM, usuario,item , setLoadingGastos, loadingGastos,gastos}) {
    const [open, setOpen] = useState(false);
    const handleClose =()=>{
        setOpen(false);
        setLoadingGastos(loadingGastos  + 1)
    }
    return (
        <Grid xs={6}>
            <Box sx={{
                margin: 1, 
            }}>
                <Card sx={{ padding: 2, minHeight:170, backgroundColor: item.color, color:'black'}} onClick={()=>{setOpen(true)}}>
                    <Iconify
                        cursor={'pointer'}
                        icon={item.icon}
                        width={30}
                        height={30}
                    />
                    <Typography variant='h6' sx={{ fontSize: 18 }}>{item.title}</Typography>
                    <Typography variant='h7' sx={{ fontSize: !matchDownSM ? 12 : 18 }}>{item.describe}</Typography>
                </Card>
            </Box>
           <DrawerFinancas drawerValue={open} handleClose={handleClose} item={item} usuario={usuario} gastos={gastos}/>
        </Grid>
    )
}
