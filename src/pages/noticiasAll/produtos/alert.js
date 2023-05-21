import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { alpha } from '@mui/material';
import urlApi from '../../../_mock/url';
import axios from 'axios';

export default function AlertDialogDelet({ open, setOpen, name, id,  produtosReload, setProdutosReload }) {
    const handleClose = () => {
        setOpen(false);
    };

    const delet = async (id) => {
        try {
            const caminho = '/produtos/delet';
            const response = await axios.get(`${urlApi}${caminho}`, {
                params: {
                    id: id,
                },
    
            });
            console.log(response);
            setProdutosReload(produtosReload + 1 )
            handleClose()
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                variant="contained"
                aria-labelledby="alert-dialog-title"
                sx={{ backgroundColor: (theme) => alpha(theme.palette.grey[900], 0.7) }}
            >
                <DialogTitle id="alert-dialog-title" sx={{ backgroundColor: (theme) => alpha(theme.palette.grey[900], 9.9) }}>
                    {`deseja expluir o produto ${name}`}
                </DialogTitle>
                <DialogActions sx={{ backgroundColor: (theme) => alpha(theme.palette.grey[900], 9.9) }}>
                    <Button variant="contained" onClick={ ()=>{delet(id)}} >sim</Button>
                    <Button variant="contained" onClick={handleClose} autoFocus>
                        não
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}