import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router';
// mui imports
import {
  ListItemIcon,
  ListItem,
  List,
  styled,
  ListItemText,
  Chip,
  useTheme,
  Typography,
} from '@mui/material';

const NavItem = ({ item, level, pathDirect, onClick, hideMenu }) => {
  const Icon = item.icon;
  const theme = useTheme();
  const itemIcon =
    level > 1 ? <Icon stroke={1.5} size="1rem" /> : <Icon stroke={1.5} size="1.3rem" />;

  const ListItemStyled = styled(ListItem)(() => ({
    whiteSpace: 'nowrap',
    marginBottom: '2px',
    padding: '8px 10px',
    borderRadius: `7px`,
    backgroundColor: level > 1 ? 'transparent !important' : 'primary',
    color:
      level > 1 && pathDirect === item.href ? `${theme.palette.primary.main}!important` : theme.palette.text.secondary,
    paddingLeft: hideMenu ? '10px' : level > 2 ? `${level * 15}px` : '10px',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.main,
    },
    '&.active': {
      color: 'white',
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
      },
    },
  }));

  return (
    <List component="li" disablePadding key={item.id}>
      <ListItemStyled
        button="true"
        component={item.external ? 'a' : NavLink}
        to={item.href}
        href={item.external ? item.href : ''}
        target={item.chip ? "blank" : "_self"}
        disabled={item.disabled}
        selected={pathDirect === item.href}
        onClick={onClick}
      >
        <ListItemIcon
          sx={{
            minWidth: '36px',
            p: '3px 0',
            color:
              level > 1 && pathDirect === item.href
                ? `${theme.palette.primary.main}!important`
                : 'inherit',
          }}
        >
          {itemIcon}
        </ListItemIcon>
        <ListItemText>
          {hideMenu ? '' : <>{(`${item.title}`)}</>}
          <br />
          {item.subtitle ? (
            <Typography variant="caption">{hideMenu ? '' : item.subtitle}</Typography>
          ) : (
            ''
          )}
        </ListItemText>

        {!item.chip || hideMenu ? null : (
          <Chip
            variant={'filled'}
            size="small"
            label={"Pro"}
            sx={{
              height: 'fit-content',
              backgroundColor: 'secondary.light',
              color: 'secondary.main',
              borderRadius: "7px",
              '& .MuiChip-label': {
                fontSize: "10px",
                paddingX: "10px",
              },
            }}
          />
        )}
      </ListItemStyled>
    </List>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number,
  pathDirect: PropTypes.any,
  hideMenu: PropTypes.any,
  onClick: PropTypes.func,
};

export default NavItem;
