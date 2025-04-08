import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IconExternalLink, IconShoppingCart } from '@tabler/icons-react';
import { Link } from 'react-router';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: 'rgb(55, 65, 81)',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '10px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
    ...theme.applyStyles('dark', {
      color: theme.palette.grey[300],
    }),
  },
}));

// Styling Link within MenuItem
const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none', // Remove underline
  color: 'inherit', // Ensure it inherits the primary text color
  '&:hover': {
    color: theme.palette.primary.main, // Ensure no underline on hover
  },
}));



const MenuItems = [
  {
    id: 1,
    title: "Buy React Version",
    href: "https://adminmart.com/product/modernize-react-mui-dashboard-theme/?ref=56#product-price-section"
  },
  {
    id: 2,
    title: "Buy Angular Version",
    href: "https://adminmart.com/product/modernize-angular-material-dashboard/?ref=56#product-price-section"
  },
  {
    id: 3,
    title: "Buy VueJs Version",
    href: "https://adminmart.com/product/modernize-vuetify-vue-admin-dashboard/?ref=56#product-price-section"
  },
  {
    id: 4,
    title: "Buy NextJs Version",
    href: "https://adminmart.com/product/modernize-next-js-admin-dashboard/?ref=56#product-price-section"
  },
  {
    id: 5,
    title: "Buy Bootstrap Version",
    href: "https://adminmart.com/product/modernize-bootstrap-5-admin-template/?ref=56#product-price-section"
  },
  {
    id: 6,
    title: "Buy Tailwind Version",
    href: "https://adminmart.com/product/modernize-tailwind-nextjs-dashboard-template/?ref=56#product-price-section"
  },

]

export default function BuyNowDropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        startIcon={<IconShoppingCart size={18} />}
        variant="contained" color="primary"
        target="_blank"
        sx={{ borderRadius: "7px" }}
      >
        Buy Now
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {
          MenuItems.map((item) => {
            return (
              <StyledLink key={item.id} to={item.href} target='_blank' ><MenuItem sx={{ gap: "4px", padding: "8px 16px" }} onClick={handleClose} disableRipple>
                <IconExternalLink size={18} />
                {item.title}
              </MenuItem></StyledLink>
            )
          })
        }
      </StyledMenu>
    </div>
  );
}
