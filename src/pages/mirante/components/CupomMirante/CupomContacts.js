
import Iconify from '../../../../components/Iconify';
// material
import { Box, Card, Stack, Button, Tooltip, Typography, CardHeader } from '@mui/material';
// utils
//
import { MIconButton } from '../../../../components/@material-extend';
import axios from 'axios';
import { useEffect, useState } from 'react';
import urlApi from '../../../../_mock/url';

// ----------------------------------------------------------------------
 

// ----------------------------------------------------------------------

export default function CupomContacts() {
  const [cupons, setcupons] = useState([])
  useEffect(() => {
   const BuscarDados = async()=>{
    await axios.get(`${urlApi}/mirante/list/cupons/atualizar`).then((response) => {
      //console.log(response.data.dados);
    });
    axios.get(`${urlApi}/mirante/list/cupons/listNames`).then((response) => {
      const data = response.data.dados.map((dado, index) => ({
        id: index + 1, // Você pode ajustar a lógica para obter o ID apropriado
        name: dado, // Aqui, estamos assumindo que o nome é diretamente obtido do array de dados
      }));

      setcupons(data);
    });
   }
   BuscarDados()

  }, []);
  return (
    <Card>
      <CardHeader
        title="Cupons sendo monitorados"
        subheader={`${cupons.length} cupond sendo monitorados`}
        action={
          <Tooltip title="Add Contact">
            <MIconButton color="primary" size="large">
              <Iconify icon="ic:outline-plus" width={20} height={20} />
            </MIconButton>
          </Tooltip>
        }
      />
      <Stack spacing={3} sx={{ p: 3 }}>
        {cupons &&cupons.map((contact) => (
          <Stack direction="row" alignItems="center" key={contact.id}>
            <Box sx={{ flexGrow: 1, ml: 2, minWidth: 100 }}>
              <Typography variant="subtitle2" sx={{ mb: 0.5 }} noWrap>
                {contact.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                {contact.email}
              </Typography>
            </Box>

            <Tooltip title="Quick Transfer">
              <MIconButton size="small">
                <Iconify icon="mdi:flash" width={22} height={22} />
              </MIconButton>
            </Tooltip>
          </Stack>
        ))}

        <Button variant="outlined" size="large" color="inherit">
          View All
        </Button>
      </Stack>
    </Card>
  );
}
