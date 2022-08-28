import { Box, AppBar, Toolbar, IconButton, Typography, Switch, Badge, List, ListItem } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';

const midLinks = [
  { title: "Catalog", path: "/catalog" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];
const rightLinks = [
  { title: "Login", path: "/login" },
  { title: "Register", path: "/register" },
];

const navStyles = {
  color: "inherit",
  textDecoration: "none",
  typography: "h6",
  "&:hover": {
  color: "grey.500",
  },
  "&.active": {
  color: "text.secondary",
  },
  };

export default function Header(props: any) {
  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="static"> 
        <Toolbar sx={{ direction: "row-reverse", justifyContent: "space-between", alignItems: "center" }}>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>

            <Switch
              onChange={props.handleMode} color="default" />
            <Typography variant="h6" component="div">Chxiei-Restore</Typography>
          </Box>

          <List sx={{ display: 'flex', alignItems: 'center' }}>
            {midLinks.map(({title,path}) => (
              <ListItem key={title} component={NavLink} to={path} sx={navStyles}>{title}</ListItem>
            ))}
          </List>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton size="large">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <List sx={{ display: 'flex', alignItems: 'center' }}>
            {rightLinks.map(({title,path}) => (
              <ListItem component={NavLink} to={path} sx={navStyles}>{title}</ListItem>
            ))}
            </List>
          </Box>

        </Toolbar>
      </AppBar>
    </Box >
  )
}
