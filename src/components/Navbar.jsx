import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { logout } = useLogout();

  return (
    <Menu>
      <MenuButton
      role='button'
        as={IconButton}
        p={2}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/create">Create</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/login">Login</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/signup">Signup</Link>
        </MenuItem>
        <MenuItem>
          <span onClick={logout}>Logout</span>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
