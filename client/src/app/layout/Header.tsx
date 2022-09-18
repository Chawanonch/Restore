import { Box, AppBar, Toolbar, IconButton, Typography, Switch, Badge, List, ListItem } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, NavLink } from 'react-router-dom';
import { useStoreContext } from '../context/StoreContext';

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

  const { basket } = useStoreContext();
  const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);

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
            <IconButton color='inherit' size="large" component={Link} to='/basket'>
              <Badge badgeContent={itemCount} color="error">
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
