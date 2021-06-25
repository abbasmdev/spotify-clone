import { Avatar, Menu, MenuItem } from "@material-ui/core";
import React from "react";
import styles from "./index.module.css";
function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const userDropDownClickHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setAnchorEl(null);
  };
  const logoutClickHandler = (e) => {
    e.stopPropagation();
    setAnchorEl(null);
  };
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}></div>
      <div className={styles.headerRight}>
        <div
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={userDropDownClickHandler}
          className={styles.userInfoDropDown}
        >
          <Avatar className={styles.avatar} />
          <span>Abbas</span>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem disabled onClick={handleClose}>
              Account
            </MenuItem>
            <MenuItem disabled onClick={handleClose}>
              Profile
            </MenuItem>
            <MenuItem disabled onClick={handleClose}>
              Upgrade to Premium
            </MenuItem>
            <MenuItem onClick={logoutClickHandler}>Log out</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Header;
