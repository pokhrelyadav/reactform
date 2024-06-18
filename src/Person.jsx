import React, { useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";

const Person = () => {
  const [userName, setUserName] = useState("Yadav");
  return (
    <Stack gap="2rem">
      <Typography variant="h3">{userName}</Typography>

      <Button
        variant="outlined"
        color="error"
        onClick={() => {
          setUserName("Pokhrel");
        }}
      >
        Change User
      </Button>

      <TextField
        label="Name"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      >
        Enter Name
      </TextField>
    </Stack>
  );
};

export default Person;
