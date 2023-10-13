import Iconify from '../../Iconify';
// material
import { Stack, Paper, Button, Tooltip, OutlinedInput } from '@mui/material';
//
import { MIconButton } from '../../@material-extend';
import MyAvatar from '../../MyAvatar';


// ----------------------------------------------------------------------
 
export default function KanbanTaskCommentInput() {
  return (
    <Stack direction="row" spacing={2} sx={{ py: 3, px: 2.5 }}>
      <MyAvatar />

      <Paper variant="outlined" sx={{ p: 1, flexGrow: 1 }}>
        <OutlinedInput
          fullWidth
          multiline
          rows={3} // Define o número mínimo de linhas exibidas
          maxRows={3} // Define o número mínimo de linhas exibidas
          placeholder="Type a message"
          sx={{ '& fieldset': { display: 'none' } }}
        />

        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" spacing={0.5}>
            <Tooltip title="Add photo">
              <MIconButton size="small">
                <Iconify icon={'ic:round-add-photo-alternate'} width={20} height={20} />
              </MIconButton>
            </Tooltip>
            <Tooltip title="Attachment">
              <MIconButton size="small">
                <Iconify icon={'ion:trash-outline'} width={20} height={20} />
              </MIconButton>
            </Tooltip>
          </Stack>

          <Button variant="contained">Comment</Button>
        </Stack>
      </Paper>
    </Stack>
  );
}
