import PropTypes from 'prop-types';
import Iconify from '../../Iconify';
import { useState, useRef } from 'react';
// material
import { MobileDateRangePicker } from '@mui/lab';
import { styled } from '@mui/material/styles';
import {
  Box,
  Stack,
  Drawer,
  Button,
  Avatar,
  Tooltip,
  Divider,
  MenuItem,
  TextField,
  Typography,
  OutlinedInput
} from '@mui/material';
//
import Scrollbar from '../../Scrollbar';
import { MIconButton, MHidden } from '../../@material-extend';
import KanbanTaskCommentList from './KanbanTaskCommentList';
import KanbanTaskAttachments from './KanbanTaskAttachments';
import KanbanTaskCommentInput from './KanbanTaskCommentInput';
import { useDatePicker, DisplayTime } from './KanbanTaskAdd';

// ----------------------------------------------------------------------

const PRIORITIZES = ['low', 'medium', 'hight'];

KanbanTaskDetailsMobile.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  card: PropTypes.object,
  onDeleteTask: PropTypes.func
};

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  width: 140,
  fontSize: 13,
  flexShrink: 0,
  color: theme.palette.text.secondary
}));

// ----------------------------------------------------------------------

export default function KanbanTaskDetailsMobile({ card, isOpen, onClose, onDeleteTask }) {
  const fileInputRef = useRef(null);
  const [taskCompleted, setTaskCompleted] = useState(card.completed);
  const [prioritize, setPrioritize] = useState('low');

  const { name, description, due, assignee, attachments, comments ,/* priority*/} = card;

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
    <>
      <Drawer open={isOpen} onClose={onClose} anchor="right" PaperProps={{ sx: { width: { xs: 1, sm: 480 } } }}>
        <Stack p={2.5} direction="row" alignItems="center">
          <MHidden width="smUp">
            <Tooltip title="Back">
              <MIconButton onClick={onClose} sx={{ mr: 1 }}>
                <Iconify icon={'eva:arrow-ios-back-fill'} width={20} height={20} />
              </MIconButton>
            </Tooltip>
          </MHidden>

          <Button
            size="small"
            variant="outlined"
            color={taskCompleted ? 'primary' : 'inherit'}
            startIcon={!taskCompleted && <Iconify icon={'ion:checkmark-sharp'} width={16} height={16} />}
            onClick={handleToggleCompleted}
          >
            {taskCompleted ? 'Complete' : 'Mark complete'}
          </Button>

          <Stack direction="row" spacing={1} justifyContent="flex-end" flexGrow={1}>
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

            <Tooltip title="More actions">
              <MIconButton size="small">
                <Iconify icon={'teenyicons:more-horizontal-outline'} width={20} height={20} />
              </MIconButton>
            </Tooltip>
          </Stack>
        </Stack>

        <Divider />

        <Scrollbar>
          <Stack spacing={3} sx={{ px: 2.5, py: 3 }}>
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
            />
            <Stack direction="row">
              <LabelStyle sx={{ mt: 1.5 }}>Assignee</LabelStyle>
              <Stack direction="row" flexWrap="wrap" alignItems="center">
                {assignee.map((user) => (
                  <Avatar key={user.id} alt={user.name} src={user.avatar} sx={{ m: 0.5, width: 36, height: 36 }} />
                ))}
                <Tooltip title="Add assignee">
                  <MIconButton sx={{ p: 1, ml: 0.5, border: (theme) => `dashed 1px ${theme.palette.divider}` }}>
                    <Iconify icon={'ic:baseline-plus'} width={20} height={20} />
                  </MIconButton>
                </Tooltip>
              </Stack>
            </Stack>

            <Stack direction="row" alignItems="center">
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
                  renderInput={() => {}}
                />
              </>
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

            <Stack direction="row">
              <LabelStyle sx={{ mt: 2 }}>Description</LabelStyle>
              <OutlinedInput
                fullWidth
                multiline
                rows={3}
                size="small"
                placeholder="Task name"
                value={description}
                sx={{ typography: 'body2' }}
              />
            </Stack>

            <Stack direction="row">
              <LabelStyle sx={{ mt: 2 }}>Attachments</LabelStyle>
              <Stack direction="row" flexWrap="wrap">
                <KanbanTaskAttachments attachments={attachments} />
              </Stack>
            </Stack>
          </Stack>

          {comments.length > 0 && <KanbanTaskCommentList comments={comments} />}
        </Scrollbar>

        <Divider />

        <KanbanTaskCommentInput />
      </Drawer>
    </>
  );
}
