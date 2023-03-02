import { Box, List, ListItemText } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import { StyledNavItem, StyledNavItemIcon } from './NavSection.styles';

interface Item {
  title: string;
  path: string;
  icon?: JSX.Element;
  info?: string;
}

interface NavItemProps {
  item: Item;
}

const NavItem = ({ item }: NavItemProps) => {
  const { title, path, icon, info } = item;

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  );
};

interface NavSectionProps {
  data: Item[];
}

export const NavSection = ({ data = [], ...other }: NavSectionProps) => {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map(item => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  );
};
