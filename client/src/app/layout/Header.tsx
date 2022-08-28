import { Box, AppBar, Toolbar, IconButton, Typography, Button, Switch } from '@mui/material'
import React from 'react'

export default function Header(props:any) {
  return (
    <Box sx={{ flexGrow: 1 ,mb: 2}}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Switch onChange={props.handleMode} color="default"/>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Chxiei
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}
