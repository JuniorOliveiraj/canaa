import PropTypes from 'prop-types';
import { useState } from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
// material
import { Box, Tooltip, IconButton, DialogActions, Stack, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
//
import { DialogAnimate } from '../../../animate';
import InvoicePDF from './InvoicePDF';
import Iconify from '../../../Iconify';

// ----------------------------------------------------------------------

InvoiceToolbar.propTypes = {
  invoice: PropTypes.object.isRequired
};

export default function InvoiceToolbar({ invoice }) {
  const [openPDF, setOpenPDF] = useState(false);

  const handleOpenPreview = () => {
    setOpenPDF(true);
  };

  const handleClosePreview = () => {
    setOpenPDF(false);
  };

  return (
    <>
      <Stack mb={5} direction="row" justifyContent="flex-end" spacing={1.5}>
        <Button color="error" size="small" variant="contained" endIcon={<Iconify icon={'material-symbols:share'} />}>
          Share
        </Button>

        <Button
          color="info"
          size="small"
          variant="contained"
          onClick={handleOpenPreview}
          endIcon={<Iconify icon={'mdi:eye'} />}
          sx={{ mx: 1 }}
        >
          Preview
        </Button>

        <PDFDownloadLink
          document={<InvoicePDF invoice={invoice} />}
          fileName={`INVOICE-${invoice.id}`}
          style={{ textDecoration: 'none' }}
        >
          {({ loading }) => (
            <LoadingButton
              size="small"
              loading={loading}
              variant="contained"
              loadingPosition="end"
              endIcon={<Iconify icon={'material-symbols:download'} />}
            >
              Download
            </LoadingButton>
          )}
        </PDFDownloadLink>
      </Stack>

      <DialogAnimate fullScreen open={openPDF}>
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <DialogActions
            sx={{
              zIndex: 9,
              padding: '12px !important',
              boxShadow: (theme) => theme.customShadows.z8
            }}
          >
            <Tooltip title="Close">
              <IconButton color="inherit" onClick={handleClosePreview}>
                <Iconify icon={'material-symbols:close'} />
              </IconButton>
            </Tooltip>
          </DialogActions>
          <Box sx={{ flexGrow: 1, height: '100%', overflow: 'hidden' }}>
            <PDFViewer width="100%" height="100%" style={{ border: 'none' }}>
              <InvoicePDF invoice={invoice} />
            </PDFViewer>
          </Box>
        </Box>
      </DialogAnimate>
    </>
  );
}
