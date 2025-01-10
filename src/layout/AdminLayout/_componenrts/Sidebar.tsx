import React from 'react'
import EventIcon from '@mui/icons-material/Event';
import WorkIcon from '@mui/icons-material/Work';
import { PATH } from '../../../routes/path';
import { useNavigate } from 'react-router-dom';
import { Drawer, List, Toolbar } from '@mui/material';
import MenuItem from './MenuItem';

const Sidebar:React.FC = () => {
    const navigate = useNavigate();

    const menu = [
      {
        href: PATH.ADMIN.USER_MANAGERMENT,
        icon: <EventIcon />,
        title: 'Users management',
      },
      {
        href: PATH.ADMIN.WORK_MANAGERMENT,
        icon: <WorkIcon />,
        title: 'Work management',
      },
      {
        href: PATH.ADMIN.TYPE_WORK_MANAGERMENT,
        icon: <WorkIcon />,
        title: 'Type Work management',
      },
      {
        href: PATH.ADMIN.SERVICE_MANAGERMENT,
        icon: <WorkIcon />,
        title: 'Service management',
      },
    ];
  
    const handleNavigate = (path: string) => {
      navigate(path);
    };
  
    return (
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 270, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <List >
          {menu.map((item) => (
            <MenuItem key={item.href} href={item.href} icon={item.icon} title={item.title} />
          ))}
        </List>
      </Drawer>
    );
  };

export default Sidebar