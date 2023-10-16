import PropTypes from 'prop-types';
import Iconify from '../../Iconify';
import { useState, useRef, useEffect } from 'react';
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
import EditorBlog from '../../../pages/Blog/editdocs';
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
  width: 90,
  fontSize: 13,
  flexShrink: 0,
  color: theme.palette.text.secondary
}));
const StyleQuill = styled('div')(({ theme }) => {


  return {
    '& .ql-container.ql-snow':
    {
      border: `solid 0.5px ${theme.palette.grey[500_32]} !important`,
      height: '100% !important',
      maxHeight: '450px !important',
      minHeight: '300px   !important',
      overflow: 'auto !important'
    }
  };
});

const ScrollbarStyle = styled(Scrollbar)(({ theme }) => ({
  "& ::-webkit-scrollbar": {
    width: "7px"
  },

  /* Track */
  '& ::-webkit-scrollbar-track:': {
    background: ' #f1f1f1'
  },

  /* Handle */
  '& ::-webkit-scrollbar-thumb': {
    background: theme.palette.primary.light
  },

  /* Handle on hover */
  '& ::-webkit-scrollbar-thumb:hover': {
    background: ' #555'
  }
}));
// ----------------------------------------------------------------------

export default function KanbanTaskDetailsMobile({ card, isOpen, onClose, onDeleteTask }) {
  const fileInputRef = useRef(null);
  const [taskCompleted, setTaskCompleted] = useState(card.completed);
  const [prioritize, setPrioritize] = useState('low');
  const [quilValue, setQuilValue] = useState(``);
  const { name, description, due, assignee, attachments, comments,/* priority*/ } = card;

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
  useEffect(() => {
    setQuilValue(description)
  }, [description]);
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

        <ScrollbarStyle>
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
              <Stack direction="row" flexWrap="wrap" alignItems="center">
                <LabelStyle sx={{ mt: 1.5 }}>Assignee</LabelStyle>
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



            <Stack direction="row" alignItems="center"sx={{py: 3, marginLeft: 0 }} >
              <Stack direction="row" alignItems="center">
                <>
                  <LabelStyle > Due date</LabelStyle>
                  {startTime && endTime ? (
                    <DisplayTime
                      startTime={startTime}
                      endTime={endTime}
                      isSameDays={isSameDays}
                      isSameMonths={isSameMonths}
                      onOpenPicker={onOpenPicker}
                      sx={{ typography: 'body2' , width:90 }}
                    />
                  ) : (
                    <Tooltip title="Add assignee">
                      <MIconButton
                        onClick={onOpenPicker}
                        sx={{
                          p: 1,
                          ml: 0.5,
                          border: (theme) => `dashed 1px ${theme.palette.divider}`,
                          width:90

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
                  />
                </>
              </Stack>
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
              <Box sx={{ width: "100%", height: "auto", minHeight: 550 }}>
                <LabelStyle sx={{ mt: 0 }}>Description</LabelStyle>
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

            <Stack direction="row">
              <LabelStyle sx={{ mt: 2 }}>Attachments</LabelStyle>
              <Stack direction="row" flexWrap="wrap">
                <KanbanTaskAttachments attachments={attachments} />
              </Stack>
            </Stack>
          </Stack>

          {comments.length > 0 && <KanbanTaskCommentList comments={comments} />}
        </ScrollbarStyle>

        <Divider />

        <KanbanTaskCommentInput />
      </Drawer>
    </>
  );
}
