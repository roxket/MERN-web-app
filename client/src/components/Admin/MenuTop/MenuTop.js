import React from "react";
import { Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

import RoxketLogo from "../../../assets/img/jpg/roxket_logo.jpg";

import "./MenuTop.scss";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          className="menu-top__left-logo"
          src={RoxketLogo}
          alt="Roxket Lab"
        />
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {React.createElement(
            menuCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined
          )}
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link">
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  );
}
