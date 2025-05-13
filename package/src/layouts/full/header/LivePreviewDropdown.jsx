import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IconDeviceLaptop, IconExternalLink } from '@tabler/icons-react';
import { Link } from 'react-router';


import img1 from 'src/assets/images/svgs/react-cat-icon.svg';
import img2 from 'src/assets/images/svgs/angular-cat-icon.svg';
import img3 from 'src/assets/images/svgs/vue-cat-icon.svg';
import img4 from 'src/assets/images/svgs/next-cat-icon.svg';
import img5 from 'src/assets/images/svgs/bt-cat-icon.svg';
import img6 from 'src/assets/images/svgs/nuxt-cat-icon.svg';
import img7 from 'src/assets/images/svgs/tailwindcss.svg';


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
    borderRadius: 7,
    marginTop: theme.spacing(1),
    minWidth: 200,
    color: '#000c29',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '16px',
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
  textDecoration: 'none',
  color: '#000c29',
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: '#000c290d',
  },
}));

// Styled button with outline style
const StyledButton = styled(Button)(({ theme }) => ({
  border: `1px solid rgba(255,255,255,.4)`,
  fontSize: '16px',
  color: '#ffffff',
  padding: '5px 16px',
  textTransform: 'none',
  display: 'flex',
  borderRadius: '4px',
  justifyContent: 'space-between',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: '#5d87ff',
  },
  '& .MuiButton-endIcon': {
    marginLeft: '4px',
  },
}));

const MenuItems = [
  {
    id: 1,
    img: img1,
    title: "React Version",
    href: "https://adminmart.com/product/modernize-react-mui-dashboard-theme/?ref=56#product-demo-section"
  },
  {
    id: 2,
    img: img2,
    title: "Angular Version",
    href: "https://adminmart.com/product/modernize-angular-material-dashboard/?ref=56#product-demo-section"
  },
  {
    id: 3,
    img: img3,
    title: "VueJs Version",
    href: "https://adminmart.com/product/modernize-vuetify-vue-admin-dashboard/?ref=56#product-demo-section"
  },
  {
    id: 4,
    img: img4,
    title: "NextJs Version",
    href: "https://adminmart.com/product/modernize-next-js-admin-dashboard/?ref=56#product-demo-section"
  },
  {
    id: 5,
    img: img5,
    title: "Bootstrap Version",
    href: "https://adminmart.com/product/modernize-bootstrap-5-admin-template/?ref=56#product-demo-section"
  },
  {
    id: 6,
    img: img6,
    title: "NuxtJs Version",
    href: "https://adminmart.com/product/modernize-nuxt-js-admin-dashboard/?ref=56#product-demo-section"
  },
  {
    id: 7,
    img: img7,
    title: "Tailwind Version",
    href: "https://adminmart.com/product/modernize-tailwind-nextjs-dashboard-template/?ref=56#product-demo-section"
  },

]

export default function LivePreviewDropdown() {
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
      <StyledButton
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined} 
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"  // Outline button
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        startIcon={<IconDeviceLaptop size={18} />}
      >
        Live Preview
      </StyledButton>
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
          MenuItems.map((item, index) => {
            console.log(item, "test");
            return (
              <a target='_black' key={index} href={item.href}>
                <MenuItem sx={{ gap: '12px', borderRadius: '7px', fontSize: '16px', color: '#000c29', padding: '12px 18px', ":hover": { backgroundColor: "#000c290d" } }} onClick={handleClose} disableRipple>
                  <img src={item.img} width={18} alt="logo" />
                  {item.title}
                </MenuItem>
              </a>
            )
          })
        }
      </StyledMenu>
    </div>
  );
}
