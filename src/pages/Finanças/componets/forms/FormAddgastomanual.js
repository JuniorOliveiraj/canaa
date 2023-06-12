import { Box, Button } from '@mui/material';
import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DateTimePicker, DateTimePickerToolbar, DatePicker } from "@mui/x-date-pickers";
import dayjs from 'dayjs';
import { styled } from '@mui/system';
import { useState } from 'react';

const StyledDateTimePicker = styled(DateTimePicker)(({ theme }) => ({
  "& .MuiCalendarPicker-root": {
    backgroundColor: "red",
    color: 'black'
  },
  "& .MuiPaper-root": {
    border: "1px solid black",
    padding: 2,
    marginTop: 1,
    backgroundColor: "rgba(120, 120, 120, 0.2)",
    color: 'black'
  },
  "& .MuiCalendarPicker-root": {
    backgroundColor: "rgba(45, 85, 255, 0.4)",
    color: 'black'
  },
  "& .MuiPickersDay-dayWithMargin": {
    color: "rgb(229, 228, 226)",
    backgroundColor: "rgba(50, 136, 153, 0.8)",
    color: 'black'
  },
  "& .MuiTabs-root": {
    backgroundColor: "rgba(120, 120, 120, 0.4)",
    color: 'black'
  },

}));

export default function FormAddgastomanual({ feixar, usuario, ...other }) {
  const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));
  const [open, setOpen] = useState(false);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3}>
          <StyledDateTimePicker
            label="Date And Time Picker"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
            ToolbarComponent={DateTimePickerToolbar}
            componentsProps={{
              PaperProps: {
                sx: {
                  backgroundColor: 'red',
                },
              },
              actionBar: {
                actions: ["cancel", "clear", "accept", "today"],
                sx: {
                  color: 'black',
                  backgroundColor: 'red',
                  borderRadius: 1
                }
              },

            }}
            PopperProps={{
              sx: { '&.MuiPickersPopper-root': { border: '4px solid red' }, backgroundColor: 'red', color: 'black' },
              actionBar: {

                sx: {
                  color: 'black',
                  backgroundColor: 'black',

                }
              },
            }}
          />
          <DatePicker
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            inputFormat="dd MMM yyyy"
            disableMaskedInput
            value={value}
            onChange={handleChange}
            renderInput={(params) => {
              console.log(params);
              return <TextField {...params} onClick={(e) => setOpen(true)} />;
            }}
            componentsProps={{
             popper:{
              sx: {
                color: 'black',
                backgroundColor: 'red',
                
              }
             },
            paper:{
              sx: {
              backgroundColor: 'black',
              }
             },
              actionBar: {
                actions: ["cancel", "clear", "accept", "today"],
                sx: {
                  color: 'black',
                  backgroundColor: 'transparet',
                  
                }
              },
            }}
          />

          <Button onClick={() => setValue(null)}>Clear</Button>
        </Stack>
      </LocalizationProvider>
    </Box>
  );
}
