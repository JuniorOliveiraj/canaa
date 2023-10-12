import { useState } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
// material
import { Paper, Typography, Box, Checkbox , useMediaQuery, useTheme} from '@mui/material';
//
import KanbanTaskDetailsMobile from './KanbanTaskDetailsMobile';
import KanbanTaskDetailsDescktop from './KanbanTaskDetailsDescktop';
import Iconify from '../../Iconify';


// ----------------------------------------------------------------------

KanbanTaskCard.propTypes = {
  card: PropTypes.object,
  index: PropTypes.number,
  onDeleteTask: PropTypes.func
};

export default function KanbanTaskCard({ card, onDeleteTask, index }) {
  const { name, attachments } = card;
  const [openDetails, setOpenDetails] = useState(false);
  const [completed, setCompleted] = useState(card.completed);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const handleOpenDetails = () => {
    setOpenDetails(true);
  };

  const handleCloseDetails = () => {
    setOpenDetails(false);
  };

  const handleChangeComplete = (event) => {
    setCompleted(event.target.checked);
  };

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <Paper
            sx={{
              px: 2,
              width: 1,
              position: 'relative',
              boxShadow: (theme) => theme.customShadows.z1,
              '&:hover': {
                boxShadow: (theme) => theme.customShadows.z16
              },
              ...(attachments.length > 0 && {
                pt: 2
              })
            }}
          >
            <Box onClick={handleOpenDetails} sx={{ cursor: 'pointer' }}>
              {attachments.length > 0 && (
                <Box
                  sx={{
                    pt: '60%',
                    borderRadius: 1,
                    overflow: 'hidden',
                    position: 'relative',
                    transition: (theme) =>
                      theme.transitions.create('opacity', {
                        duration: theme.transitions.duration.shortest
                      }),
                    ...(completed && {
                      opacity: 0.48
                    })
                  }}
                >
                  <Box
                    component="img"
                    src={attachments[0]}
                    sx={{ position: 'absolute', top: 0, width: 1, height: 1 }}
                  />
                </Box>
              )}

              <Typography
                noWrap
                variant="subtitle2"
                sx={{
                  py: 3,
                  pl: 5,
                  transition: (theme) =>
                    theme.transitions.create('opacity', {
                      duration: theme.transitions.duration.shortest
                    }),
                  ...(completed && { opacity: 0.48 })
                }}
              >
                {name}
              </Typography>
            </Box>

            <Checkbox
              disableRipple
              checked={completed}
              icon={<Iconify icon={'eva:radio-button-off-outline'} />}
              checkedIcon={<Iconify icon={'ion:checkmark-circle-outline'} />}
              onChange={handleChangeComplete}
              sx={{ position: 'absolute', bottom: 15 }}
            />
          </Paper>

         { isMobile ? (<KanbanTaskDetailsMobile
            card={card}
            isOpen={openDetails}
            onClose={handleCloseDetails}
            onDeleteTask={() => onDeleteTask(card.id)}
          />):(
            <KanbanTaskDetailsDescktop
            card={card}
            isOpen={openDetails}
            onClose={handleCloseDetails}
            onDeleteTask={() => onDeleteTask(card.id)}
          />
          )}
        </div>
      )}
    </Draggable>
  );
}
