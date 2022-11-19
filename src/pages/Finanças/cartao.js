// @mui
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Card, Typography,  Paper, } from '@mui/material';
// components
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------



const IconWrapperStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
}));
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    ...theme.typography.body,
    padding: theme.spacing(1),
    textAlign: 'right',
    alignItems: 'right',
    display: 'flex',
    justifyContent: ' right',
    flexWrap: 'wrap',
    color: theme.palette.text.secondary,
    margin: 10,
    width: 42,
    height: 42,

    marginTop: -30
}));

// ----------------------------------------------------------------------

Cartao.propTypes = {
    color: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    sx: PropTypes.object,
};


export default function Cartao({ adicionar,title, total, rotate, icon, color = 'primary', sx, ...other }) {

  const open = () =>{
    adicionar(true)
  }


   
 
    return (
        <Card
            sx={{
                py: 6,
                boxShadow: 0,
                textAlign: 'center',
                color: (theme) => theme.palette[color].darker,
                bgcolor: (theme) => theme.palette[color].lighter,
                ...sx,
            }}
            {...other}
        >
            <Item sx={{ float: 'right' }}>
                <Typography variant="p" sx={{ float: 'left', paddingLeft: 4 }}>
                    <Iconify onClick={open}  cursor={'pointer'} icon={'mdi:dots-horizontal'} width={32} height={32} sx={{ float: 'right' }} />
                </Typography>

            </Item>
            <Item sx={{ marginLeft: 3 }}>
                <Typography variant="p" sx={{ float: 'left', paddingLeft: 4 }}>
                    <Iconify onClick={open} cursor={'pointer'} icon={'uil:money-withdraw'} width={30} height={30} sx={{ float: 'right' }} />
                </Typography>
            </Item>
            <Typography variant="p" sx={{ float: 'left', paddingLeft: 4 }}>{title}</Typography><br />
            <Typography variant="h3" sx={{ float: 'left', paddingLeft: 4, fontSize: 20 }}>{"R$ " + total} <Iconify icon="material-symbols:arrow-circle-up-rounded" rotate={rotate === 1 ? "0deg" : "180deg"} width={20} height={20} color={rotate === 2 ? '#fc6a42' : '#0ea300'}> </Iconify></Typography>
        </Card>
    );
}



