import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Iconify from '../../components/Iconify';
import useDrivePicker from 'react-google-drive-picker'
import { useEffect, useState } from 'react';
export default function DialogProdutosMirante({ setOpen, open, productImageUrl, id }) {
    const [images, setImages] = useState([]);
    const [openPicker] = useDrivePicker();
    const handleOpenPicker = () => {
        openPicker({
            clientId: process.env.REACT_APP_GOOGLE_DRIVE_PIKER_CLIENT_ID,
            developerKey: process.env.REACT_APP_GOOGLE_DRIVE_PIKER_DEVELOPER_KEY,
            viewId: "DOCS",
            // token: token, // pass oauth token in case you already have one
            showUploadView: true,
            showUploadFolders: true,
            supportDrives: true,
            multiselect: true,
            // configurações do Google Drive Picker
            callbackFunction: (data) => {
                if (data.action === 'picked') {
                    const selectedImages = data.docs.map((doc) => ({
                        id: doc.id,
                        name: doc.name,
                        url: `https://drive.google.com/uc?id=${doc.id}`, // URL de download direto
                       
                    }));
                    // Atualize o estado com as imagens selecionadas
                    setImages(selectedImages);
                } else if (data.action === 'cancel') {
                    console.log('Usuário cancelou a seleção de arquivos.');
                }
            },
        })
    }
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{ zIndex: 2 }}
        >
            <DialogTitle id="alert-dialog-title">
                {"Adicionar umagem "}<br />
            </DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', marginTop: 2 }}>
                    <Button sx={{ width: 150, marginLeft: 2 }} onClick={() => handleOpenPicker()}><Iconify icon={'ic:baseline-plus'} width={40} height={40} /></Button>
                    <Box sx={{ display: 'flex', }}>
                        {
                            productImageUrl.url.map((url, index) => (
                                <img src={url} style={{ width: 150, margin: 2, borderRadius: 9 }} alt={`Produto ${index}`} />
                            ))
                        }
                   
                    </Box>
                    {images.map((image, index) => (
                    <img key={index} src={image.url} alt={image.name} style={{ width: '150px', margin: '5px' }} />
                ))}
                  

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



