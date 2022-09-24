import { Box, AppBar, Toolbar, IconButton, Typography, Switch, Badge, List, ListItem, Icon } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, NavLink } from 'react-router-dom';
import { useAppSelector } from '../store/configureStore';

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

  const { basket } = useAppSelector(state=>state.basket)

  const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar sx={{ direction: "row-reverse", justifyContent: "space-between", alignItems: "center" }}>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>

            <Switch
              onChange={props.handleMode} color="default" />

            <IconButton color="inherit" component={Link} to='/'>
              <Typography variant="h6" >Ching-Restores</Typography>
            </IconButton>

          </Box>

          <List sx={{ display: 'flex', alignItems: 'center' }}>
            {midLinks.map(({ title, path }) => (
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
              {rightLinks.map(({ title, path }) => (
                <ListItem component={NavLink} to={path} sx={navStyles}>{title}</ListItem>
              ))}
            </List>
          </Box>

        </Toolbar>
      </AppBar>
    </Box >
  )
}
