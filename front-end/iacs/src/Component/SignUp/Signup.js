import * as React from 'react';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function Signup(){
    return (
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl>
        <InputLabel htmlFor="component-outlined">First Name</InputLabel>
        <OutlinedInput
          id="component-outlined"
          defaultValue=""
          label="firstname"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Last Name</InputLabel>
        <OutlinedInput
          id="component-outlined"
          defaultValue=""
          label="lastname"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Email Address</InputLabel>
        <OutlinedInput
          id="component-outlined"
          defaultValue=""
          label="email"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Password</InputLabel>
        <OutlinedInput
          id="component-outlined"
          defaultValue=""
          label="email"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Retype Password</InputLabel>
        <OutlinedInput
          id="component-outlined"
          defaultValue=""
          label="email"
        />
      </FormControl>
    </Box>
    )
}