import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface MenuItemProps {
  href: string;
  icon: React.ReactNode;
  title: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, icon, title }) => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => () => {
    return navigate(path);
  };

  return (
    <ListItem sx={{ cursor: "pointer"}} component="button" onClick={handleNavigate(href)}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
};

export default MenuItem;
