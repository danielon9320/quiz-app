import React from "react";
import { TextField, Button, Box, Card, CardContent } from "@mui/material";
import Center from './components/Center'

export default function Login() {
  return (
    <Center>
        <Card sx={{width:'400'}}>
     <CardContent>
     <Box sx={{
      '& .MuiTextField-root':{
        m: 1,
        width:'90%'
      }
    }}>
      <form noValidate autoComplete="off">
        <TextField label="Email" name="email" variant="outlined" />
        <TextField label="Name" name="name" variant="outlined" />
        <Button type="submit" variant="contained" size="large" sx={{width:'90%'}}>
          Start{" "}
        </Button>
      </form>
    </Box>
     </CardContent>
    </Card>
    </Center>

 
  );
}
