import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { forwardRef } from 'react';
export default function AlertaDefout({ errorMessage, responseBD, openNotification, setOpenNotification }) {

    const state = {
        vertical: 'top',
        horizontal: 'right',

    };
    const { vertical, horizontal } = state;
    const Alert = forwardRef(function Alert(props, ref, state) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const handleCloseMensage = () => {
        setOpenNotification(false);
    }
    return (
        <div>
            <Snackbar
                open={openNotification} autoHideDuration={6000}
                onClose={handleCloseMensage}
                anchorOrigin={{ vertical, horizontal }}
                key={vertical + horizontal}
            >
                <Alert
                    onClose={handleCloseMensage}
                    severity={responseBD} sx={{ width: window.innerWidth < 500 ? '70%' : '100%' }}
                >
                    {errorMessage}

                </Alert>
            </Snackbar>
        </div>
    )
}