import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Iconify from '../../components/Iconify';

export default function DialogProdutosMirante({ setOpen, open, productImageUrl , id}) {



    return (

        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Adicionar umagem "  }<br/>
            </DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', marginTop:2}}>
                    <Button sx={{ width: 150, marginLeft:2 }}><Iconify icon={'ic:baseline-plus'} width={40} height={40} /></Button>
                    <Box sx={{ display: 'flex', }}>
                        {
                            productImageUrl.url.map((url, index) => (
                                <img src={url} style={{ width: 150, margin: 2, borderRadius: 9 }} alt={`Produto ${index}`} />
                            ))
                        }
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>Disagree</Button>
                <Button onClick={() => setOpen(false)} autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>

    );
}
