import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { alpha } from '@mui/material';
// material
import { Dialog } from '@mui/material';
//
import { varFadeInUp } from './variants';
import useSettings from '../../hooks/useSettings';
// ----------------------------------------------------------------------

DialogAnimate.propTypes = {
  open: PropTypes.bool.isRequired,
  animate: PropTypes.object,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default function DialogAnimate({ open = false, animate, onClose, children, ...other }) {
const {themeMode}=useSettings()
console.log(themeMode)
  return (
    <AnimatePresence>
      {open && (
        <Dialog
          fullWidth
          maxWidth="xs"
          open={open}
          onClose={onClose}
          PaperComponent={motion.div}
          PaperProps={{
            sx: {
              borderRadius: 2,
              bgcolor: (theme) => alpha(themeMode  ==='dark' ? theme.palette.grey[900]: theme.palette.grey[0], 1)
            },
            ...(animate || varFadeInUp)
          }}
          {...other}
        >
          {children}
        </Dialog>
      )}
    </AnimatePresence>
  );
}
