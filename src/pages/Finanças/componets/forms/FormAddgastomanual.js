import { Box, Button } from '@mui/material';
import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DateTimePicker, DateTimePickerToolbar, DatePicker } from "@mui/x-date-pickers";
import dayjs from 'dayjs';
import { styled } from '@mui/system';
import { useState } from 'react';



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
          <DateTimePicker
            label="Date And Time Picker"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
            ToolbarComponent={DateTimePickerToolbar}
            componentsProps={{
              actionBar: {
                actions: ["cancel", "clear", "accept", "today"],
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
              actionBar: {
                actions: ["cancel", "clear", "accept", "today"],
              },
            }}
          />

          <Button onClick={() => setValue(null)}>Clear</Button>
        </Stack>
      </LocalizationProvider>
    </Box>
  );
}
