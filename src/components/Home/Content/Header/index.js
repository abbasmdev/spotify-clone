import { Avatar, IconButton, Menu, MenuItem } from "@material-ui/core";
import {
  ArrowBackIosOutlined as ArrowBackIosOutlinedIcon,
  ArrowForwardIosOutlined as ArrowForwardIosOutlinedIcon,
} from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAuthLoginDataFormStorage,
  selectAuthUserInfo,
} from "../../../../store/auth/authSlice";
import styles from "./index.module.css";
function Header({ children, pxFromTop }) {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectAuthUserInfo);
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
    dispatch(clearAuthLoginDataFormStorage());
  };
  return (
    <div
      className={styles.header}
      style={{
        backgroundColor: `rgb(53, 53, 53, ${
          pxFromTop > 60 ? 1 : pxFromTop / 60
        })`,
      }}
    >
      <div className={styles.headerLeft}>
        <div className={styles.navActions}>
          <IconButton size="small" disabled>
            <ArrowBackIosOutlinedIcon />
          </IconButton>
          <IconButton size="small" disabled>
            <ArrowForwardIosOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div className={styles.headerCenter}>{children}</div>
      <div className={styles.headerRight}>
        <div
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={userDropDownClickHandler}
          className={styles.userInfoDropDown}
        >
          <Avatar className={styles.avatar} src={userInfo?.images?.[0]?.url}>
            {!userInfo?.images?.[0]?.url && userInfo?.display_name?.[0]}
          </Avatar>
          <span>{userInfo?.display_name}</span>

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
