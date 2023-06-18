import { useRef, useState } from 'react';
import tornarAdm from './requisição/ADMpermicao';
// material
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText, alpha } from '@mui/material';
// component
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

export default function UserMoreMenu({ isItemSelected, user, calc }) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const update = async (cargo) => {
    try {
      const update = await tornarAdm(user, isItemSelected, cargo);
      if (update) {
        calc(1);

      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Iconify icon="eva:more-vertical-fill" width={20} height={20} />
      </IconButton>
      {
        user && user.role === 'ADM' ? <>

          <Menu
            open={isOpen}
            anchorEl={ref.current}
            onClose={() => setIsOpen(false)}
            PaperProps={{
              sx: { width: 200, maxWidth: '100%', backgroundColor: (theme) => alpha(theme.palette.grey[999], 0.72) },
            }}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >


            <MenuItem sx={{ color: 'text.secondary' }} onClick={() => { update('ADM') }}>
              <ListItemIcon>
                <Iconify icon="grommet-icons:user-admin" width={24} height={24} />
              </ListItemIcon>
              <ListItemText primary="Tornar adm" primaryTypographyProps={{ variant: 'body2' }} />
            </MenuItem>
            <MenuItem sx={{ color: 'text.secondary' }} onClick={() => { update('convidado') }}>
              <ListItemIcon>
                <Iconify icon="eva:edit-fill" width={24} height={24} />
              </ListItemIcon>
              <ListItemText primary="Tornar convidado" primaryTypographyProps={{ variant: 'body2' }} />
            </MenuItem>
          </Menu>
        </> :
          <Menu
            open={isOpen}
            anchorEl={ref.current}
            onClose={() => setIsOpen(false)}
            PaperProps={{
              sx: { width: 200, maxWidth: '100%', backgroundColor: (theme) => alpha(theme.palette.grey[999], 0.72) },
            }}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem sx={{ color: 'text.secondary' }}>
              <ListItemIcon>
                <Iconify icon="material-symbols:block" width={24} height={24} />
              </ListItemIcon>
              <ListItemText primary="Sem permição de ADM" primaryTypographyProps={{ variant: 'body2' }} />
            </MenuItem>
          </Menu>
      }
      
    </>
  );
}
