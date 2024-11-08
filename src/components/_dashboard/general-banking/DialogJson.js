
import PropTypes from 'prop-types';
import urlApi from '../../../_mock/url';
// material
import {
    Dialog,
    DialogTitle,
    Typography,
    DialogActions,
    Button,
    TextField,
    Stack,
    SwipeableDrawer
} from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

async function PostJson(data) {
    try {
        const response = await axios.post(`${urlApi}/add/gastos/jsonMercadoPago`,  data); // Replace with your API endpoint
        return response.data;
    } catch (error) {
        console.error('Error posting JSON:', error);
        return null;
    }
}

function DialogJson({ open, amount, autoWidth, contactInfo, onClose, onBlur, onChange }) {
    const [json, setJson] = useState(null);
    const changeSetJson = async(data) => {
         const res = await PostJson(data);
         console.log(res);
       // setJson(data)
        //console.log(data);
    }

    return (
        <Dialog open={open} fullWidth maxWidth="xl" onClose={onClose}>
            <DialogTitle>adicionar gastos manuais Mercado pago</DialogTitle>

            <Stack spacing={3} sx={{ p: 3, pb: 0 }}>

                <TextField
                    fullWidth
                    multiline
                    rows={10}
                    placeholder="Write a message..."
                    onChange={e => {
                        try {
                            const parsedJson = JSON.parse(e.target.value);
                            setJson(parsedJson);
                        } catch (error) {
                            console.error("O texto não é um JSON válido", error);
                        }
                    }}
                />

            </Stack>
            <DialogActions>
                <Button variant="contained" disabled={amount === 0} onClick={() => {
                   changeSetJson(json);
                    onClose();
                }}>
                    Confirm & ADD
                </Button>
                <Button onClick={() => { 
                    onClose();
                }}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}

DialogJson.propTypes = {
    amount: PropTypes.number,
    autoWidth: PropTypes.number,
    contactInfo: PropTypes.shape({
        avatar: PropTypes.string,
        email: PropTypes.string,
        name: PropTypes.string
    }),
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClose: PropTypes.func,
    open: PropTypes.bool
};

JsonTransferDrawer.propTypes = {
    amount: PropTypes.number,
    autoWidth: PropTypes.number,
    contactInfo: PropTypes.shape({
        avatar: PropTypes.string,
        email: PropTypes.string,
        name: PropTypes.string
    }),
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClose: PropTypes.func,
    open: PropTypes.bool
};


function JsonTransferDrawer({ open, amount, autoWidth, contactInfo, onClose, onBlur, onChange }) {
    return (
        <SwipeableDrawer anchor="bottom" open={open} onClose={onClose} onOpen={() => { }}>
            <div style={{ minWidth: 250, padding: '16px' }}>
                <Typography variant="h6" paddingLeft={4}>adicionar gastos manuais marcado pago</Typography>

                <Stack spacing={3} sx={{ p: 3, pb: 0 }}>

                    <TextField fullWidth multiline rows={20} placeholder="Write a message..." />
                </Stack>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                    <Button variant="contained" onClick={onClose}>
                        Confirm & Transfer
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </div>
            </div>
        </SwipeableDrawer>
    );
}

export { DialogJson, JsonTransferDrawer };
