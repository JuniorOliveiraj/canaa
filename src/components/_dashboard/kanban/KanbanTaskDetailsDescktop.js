import PropTypes from 'prop-types';
import Iconify from '../../Iconify';
import { useState, useRef, useEffect } from 'react';
// material
import EditorBlog from '../../../pages/Blog/editdocs';
import { styled } from '@mui/material/styles';
import {
  alpha,
  Box,
  Grid,
  Avatar,
  Stack,
  Dialog,
  Button,
  Tooltip,
  Divider,
  MenuItem,
  TextField,
  Typography,
  OutlinedInput,
  DialogTitle,
  DialogContent

} from '@mui/material';
//
import Scrollbar from '../../Scrollbar';
import { MIconButton } from '../../@material-extend';
import KanbanTaskCommentList from './KanbanTaskCommentList';
import KanbanTaskAttachments from './KanbanTaskAttachments';
import KanbanTaskCommentInput from './KanbanTaskCommentInput';
import { useDatePicker, DisplayTime } from './KanbanTaskAdd';
import { AnimatePresence, motion } from 'framer-motion';
import useSettings from '../../../hooks/useSettings';
import { MobileDateRangePicker } from '@mui/lab';
// ----------------------------------------------------------------------

const PRIORITIZES = ['low', 'medium', 'hight'];

KanbanTaskDetailsDescktop.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  card: PropTypes.object,
  onDeleteTask: PropTypes.func
};
const StyleQuill = styled('div')(({ theme }) => {


  return {
    '& .ql-container.ql-snow':
    {
      border: `solid 0.5px ${theme.palette.grey[500_32]} !important`,
      maxHeight: '450px !important',
      minHeight: '450px !important',
      overflow: 'auto !important'
    }
  };
});

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  width: 80,
  fontSize: 13,
  flexShrink: 0,
  color: theme.palette.text.secondary
}));

// ----------------------------------------------------------------------

export default function KanbanTaskDetailsDescktop({ card, isOpen, onClose, onDeleteTask }) {
  const fileInputRef = useRef(null);
  const [taskCompleted, setTaskCompleted] = useState(card.completed);
  const [quilValue, setQuilValue] = useState(``);
  const [prioritize, setPrioritize] = useState('low');
  const { themeMode } = useSettings()
  const { name, description, due, assignee, attachments, comments,/* priority*/ } = card;
  useEffect(() => {
    setQuilValue(description)
  }, [description]);
  const {
    dueDate,
    startTime,
    endTime,
    isSameDays,
    isSameMonths,
    onChangeDueDate,
    openPicker,
    onOpenPicker,
    onClosePicker
  } = useDatePicker({
    date: due
  });

  const handleAttach = () => {
    fileInputRef.current.click();
  };

  const handleToggleCompleted = () => {
    setTaskCompleted((prev) => !prev);
  };

  const handleChangePrioritize = (event) => {
    setPrioritize(event.target.value);
  };

  return (
    <AnimatePresence>
      <Dialog
        open={isOpen}
        onClose={onClose}
        PaperProps={{ sx: { width: '1920px', borderRadius: 2, height: '90vh', overflow: 'hidden', bgcolor: (theme) => alpha(themeMode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[0], 1) } }}
        PaperComponent={motion.div}
        maxWidth="false"


      >

        <DialogTitle id="scroll-dialog-title">
          <Stack p={1} direction="row" alignItems="center">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ height: '100%' }}>
              <Grid xs={6}  >
                <Stack p={1} direction="row" alignItems="center">
                  <Button
                    size="small"
                    variant="outlined"
                    color={taskCompleted ? 'primary' : 'inherit'}
                    startIcon={!taskCompleted && <Iconify icon={'ion:checkmark-sharp'} width={16} height={16} />}
                    onClick={handleToggleCompleted}
                  >
                    {taskCompleted ? 'Complete' : 'Mark complete'}
                  </Button>
                  <Divider orientation="vertical" variant="middle" flexItem sx={{ marginLeft: 3, marginRight: 0 }} />
                  <Box width={'50%'} sx={{ marginLeft: 2 }}>
                    <OutlinedInput
                      fullWidth
                      multiline
                      size="small"
                      placeholder="Task name"
                      value={name}
                      sx={{
                        typography: 'h6',
                        '& .MuiOutlinedInput-notchedOutline': { borderColor: 'transparent' }
                      }}
                    /></Box>
                </Stack>

              </Grid>
              <Grid xs={6}  >

                <Stack direction="row" spacing={1} justifyContent="flex-end" flexGrow={1}>
                  <Stack direction="row" alignItems="center" sx={{ marginRight: 4 }}>
                    <LabelStyle> Due date</LabelStyle>
                    <>
                      {startTime && endTime ? (
                        <DisplayTime
                          startTime={startTime}
                          endTime={endTime}
                          isSameDays={isSameDays}
                          isSameMonths={isSameMonths}
                          onOpenPicker={onOpenPicker}
                          sx={{ typography: 'body2' }}
                        />
                      ) : (
                        <Tooltip title="Add assignee">
                          <MIconButton
                            onClick={onOpenPicker}
                            sx={{
                              p: 1,
                              ml: 0.5,
                              border: (theme) => `dashed 1px ${theme.palette.divider}`
                            }}
                          >
                            <Iconify icon={'ic:baseline-plus'} width={20} height={20} />
                          </MIconButton>
                        </Tooltip>
                      )}
                      <MobileDateRangePicker
                        open={openPicker}
                        onClose={onClosePicker}
                        onOpen={onOpenPicker}
                        value={dueDate}
                        onChange={onChangeDueDate}
                        renderInput={() => { }}
                      />s
                    </>
                    <Divider orientation="vertical" variant="middle" flexItem sx={{ marginLeft: 3, marginRight: 0 }} />
                  </Stack>

                  <Stack direction="row" alignItems="center">
                    <LabelStyle>Prioritize</LabelStyle>
                    <TextField
                      fullWidth
                      select
                      size="small"
                      value={prioritize}
                      onChange={handleChangePrioritize}
                      sx={{
                        '& svg': { display: 'none' },
                        '& fieldset': { display: 'none' },
                        '& .MuiSelect-select': { p: 0, display: 'flex', alignItems: 'center' }
                      }}
                    >
                      {PRIORITIZES.map((option) => (
                        <MenuItem key={option} value={option}>
                          <Box
                            sx={{
                              mr: 1,
                              width: 14,
                              height: 14,
                              borderRadius: 0.5,
                              bgcolor: 'error.main',
                              ...(option === 'low' && { bgcolor: 'info.main' }),
                              ...(option === 'medium' && { bgcolor: 'warning.main' })
                            }}
                          />
                          <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>
                            {option}
                          </Typography>
                        </MenuItem>
                      ))}
                    </TextField>
                  </Stack>
                  <Divider orientation="vertical" variant="middle" flexItem sx={{ marginLeft: 3, marginRight: 0 }} />
                  <Tooltip title="Like this">
                    <MIconButton size="small">
                      <Iconify icon={'ic:round-thumb-up'} width={20} height={20} />
                    </MIconButton>
                  </Tooltip>

                  <Tooltip title="Attachment">
                    <MIconButton size="small" onClick={handleAttach}>
                      <Iconify icon={'ion:attach'} width={20} height={20} />
                    </MIconButton>
                  </Tooltip>
                  <input ref={fileInputRef} type="file" style={{ display: 'none' }} />

                  <Tooltip title="Delete task">
                    <MIconButton onClick={onDeleteTask} size="small">
                      <Iconify icon={'ion:trash-outline'} width={20} height={20} />
                    </MIconButton>
                  </Tooltip>

                  <Tooltip title="Close">
                    <MIconButton onClick={onClose} sx={{ mr: 1 }}>
                      <Iconify icon={'material-symbols:close'} width={20} height={20} />
                    </MIconButton>
                  </Tooltip>
                </Stack>
              </Grid>

            </Grid>



          </Stack>
          <Divider />
        </DialogTitle>
        <DialogContent  >
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ height: '100%' }}>
            <Grid xs={6}  >
              <Box sx={{ height: '100%' }}>
                <Scrollbar sx={{ maxHeight: 5 }}>
                  <Box sx={{ marginLeft: 3, }}>
                    <Stack p={2.5} direction="row" alignItems="center"  >

                      <Stack direction="row" alignItems="center" sx={{ paddingLeft: 4 }}>
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <Stack direction="row" sx={{ paddingLeft: 4 }}>
                          <Stack direction="row" flexWrap="wrap" alignItems="center">
                            <LabelStyle sx={{ mt: 1.5 }}>Assignee</LabelStyle>
                            {assignee.map((user) => (
                              <Avatar key={user.id} alt={user.name} src={user.avatarUrl} sx={{ m: 0.1, width: 36, height: 36 }} />
                            ))}
                            <Tooltip title="Add assignee">
                              <MIconButton sx={{ p: 1, ml: 0.5, border: (theme) => `dashed 1px ${theme.palette.divider}` }}>
                                <Iconify icon={'ic:baseline-plus'} width={20} height={20} />
                              </MIconButton>
                            </Tooltip>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Stack>
                    <Stack p={0} direction="row" alignItems="center" marginLeft={3}>
                      <Box sx={{ width: "100%", height: '500px' }}>
                        <LabelStyle sx={{ mt: 2 }}>Description</LabelStyle>
                        <Stack direction="row">
                          <StyleQuill>
                            <EditorBlog
                              id="product-description"
                              value={quilValue}
                              onChange={(val) => setQuilValue(description, val)}

                            />
                          </StyleQuill>
                        </Stack>
                      </Box>
                    </Stack>
                    <Box marginTop={3}>
                      <Stack p={2.5} direction="row" alignItems="center">
                        <Stack direction="row">
                          <LabelStyle sx={{ mt: 2 }}>Attachments</LabelStyle>
                          <Stack direction="row" flexWrap="wrap">
                            <KanbanTaskAttachments attachments={attachments} />
                          </Stack>
                        </Stack>
                      </Stack>
                    </Box>
                  </Box>
                </Scrollbar>
              </Box>
            </Grid>
            <Grid xs={6} >
              <Scrollbar sx={{ maxHeight: 5 }}>
                <Box sx={{ height: "50%", maxHeight: 700, }} whiteSpace={2}>
                  {comments.length > 0 && <KanbanTaskCommentList comments={comments} />}
                </Box>
              </Scrollbar>
              <Box sx={{ position: 'absolute', top: '79%', width: '49%' }}>
                <Divider />
                <KanbanTaskCommentInput />
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </AnimatePresence>
  );
}
