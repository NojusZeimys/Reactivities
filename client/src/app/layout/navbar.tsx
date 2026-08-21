import { Group } from "@mui/icons-material";
import { AppBar, Box, Container, MenuItem, MenuList, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundImage: "linear-gradient(135deg,#182a73 0%, #218aae 69%, #20a7ac 89%)" }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <MenuList>
              <MenuItem component={NavLink} to="/" sx={{ display: "flex", gap: 2 }}>
                <Group fontSize="large" />
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  Reactivities
                </Typography>
              </MenuItem>
            </MenuList>
            <MenuList sx={{ display: "flex" }}>
              <MenuItemLink to="/activities">activities</MenuItemLink>
              <MenuItemLink to="/createActivity">Create Activity</MenuItemLink>
            </MenuList>
            <MenuList>
              <MenuItem>USER MENU</MenuItem>
            </MenuList>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
