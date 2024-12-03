import PropTypes from 'prop-types';
import { paramCase } from 'change-case';
import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText, LinearProgress, Backdrop, CircularProgress } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../../routes/paths';
import Iconify from '../../../Iconify';
import axios from 'axios';
import { urlWebHuckN8n } from '../../../../_mock/url';
import { set } from 'lodash';
import { useDispatch } from '../../../../redux/store';
import { getListaDeGastos } from '../../../../redux/slices/Analytics';


// ----------------------------------------------------------------------

UserMoreMenu.propTypes = {
  onDelete: PropTypes.func,
  userName: PropTypes.string,
  handleNotion: PropTypes.string
};

export default function UserMoreMenu({ onDelete, userName, id, handleNotion }) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const SendToNotion = async (index) => {
    setLoading(true);
    axios.get(`http://100.64.64.223:3002/webhook/c4fcbd3d-722e-40e4-bc19-ba68fd08d5fb?id_notion=${index}`).then((response) => {
      //axios.get(`http://100.64.64.223:3002/webhook-test/c4fcbd3d-722e-40e4-bc19-ba68fd08d5fb?id_notion=${index}`).then((response) => {
      dispatch(getListaDeGastos());
      setLoading(false);
    });

  };



  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Iconify icon={'lucide:more-vertical'} width={20} height={20} />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' }
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Backdrop
          open={loading}
          style={{
            zIndex: 1300, // Deve estar acima de outros elementos
            color: "#fff",
          }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        {handleNotion === null && <MenuItem onClick={() => { SendToNotion(id) }} sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Iconify icon={'mingcute:send-fill'} width={24} height={24} />

          </ListItemIcon>
          <ListItemText primary="Send to Notion" primaryTypographyProps={{ variant: 'body2' }} />
          <LinearProgress />
        </MenuItem>}

        <MenuItem
          component={RouterLink}
          to={`${PATH_DASHBOARD.user.root}/${paramCase(userName)}/edit`}
          sx={{ color: 'text.secondary' }}
        >
          <ListItemIcon>
            <Iconify icon={'material-symbols:edit'} width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Edit" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>
      </Menu>
    </>
  );
}
