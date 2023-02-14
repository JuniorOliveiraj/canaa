import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion, useDrag } from 'framer-motion';

export default function Tarefas() {
  const [columns, setColumns] = useState([
    {
      id: 1,
      title: 'To Do',
      cards: [
        { id: 1, content: 'Task 1' },
        { id: 2, content: 'Task 2' },
        { id: 3, content: 'Task 3' },
      ],
    },
    {
      id: 2,
      title: 'In Progress',
      cards: [
        { id: 4, content: 'Task 4' },
        { id: 5, content: 'Task 5' },
      ],
    },
    {
      id: 3,
      title: 'Done',
      cards: [
        { id: 6, content: 'Task 6' },
        { id: 7, content: 'Task 7' },
        { id: 8, content: 'Task 8' },
        { id: 9, content: 'Task 9' },
      ],
    },
  ]);

  function handleDrop(card, sourceColumnIndex, targetColumnIndex) {
    const newColumns = [...columns];
    const sourceColumn = newColumns[sourceColumnIndex];
    const targetColumn = newColumns[targetColumnIndex];
    sourceColumn.cards = sourceColumn.cards.filter((c) => c.id !== card.id);
    targetColumn.cards.push(card);
    setColumns(newColumns);
  }

  return (
    <Container >
      <Grid container spacing={2}>
        {columns.map((column, columnIndex) => (
          <Grid item xs={4} key={column.id} sx={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <Typography variant="h5">{column.title}</Typography>
            {column.cards.map((card) => (
              <motion.div
                key={card.id}
                whileHover={{ scale: 1.05 }}
                onDragEnd={(event, info) => {
                  if (info.destination) {
                    handleDrop(card, columnIndex, info.destination.index);
                  }
                }}
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                style={{ height: '100%' }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}>
                    <Typography>{card.content}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}