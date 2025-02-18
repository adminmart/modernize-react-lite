import React from 'react';
import Menuitems from './MenuItems';
import { useLocation } from 'react-router';
import { Box, List, } from '@mui/material';
import NavGroup from './NavGroup/NavGroup';
import NavItem from './NavItem';
import NavCollapse from './NavCollapse';

const SidebarItems = () => {
  const { pathname } = useLocation();
  const pathDirect = pathname;
  const pathWithoutLastPart = pathname.slice(0, pathname.lastIndexOf('/'));


  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className="sidebarNav">
        {Menuitems.map((item, index) => {
          // {/********SubHeader**********/}
          if (item.subheader) {
            return <NavGroup item={item}  key={item.subheader} />;

            // {/********If Sub Menu**********/}
            /* eslint no-else-return: "off" */
          } else if (item.children) {
            return (
              <NavCollapse
                menu={item}
                pathDirect={pathDirect}
                pathWithoutLastPart={pathWithoutLastPart}
                level={1}
                key={item.id}
                chip={item.chip}
              />
            );

            // {/********If Sub No Menu**********/}
          } else {
            return (
              <NavItem
                item={item}
                key={item.id}
                pathDirect={pathDirect}
              />
            );
          }
        })}
      </List>
    </Box>
  );
};
export default SidebarItems;
