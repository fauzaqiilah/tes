import { Menu, Layout, Row } from "antd";
import React, { useState } from "react";
import { MENU_ITEM } from "../Constant";
import { Link } from "react-router-dom";


const Header = () => {
  const { Header } = Layout;
  const path = window.location.pathname
  const [current, setCurrent] = useState(path);
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
      }}
    >
      <Row justify="space-between">
        <Link href="/home">
          <div
            style={{
              float: "left",
              width: 120,
              height: 31,
              margin: "16px 24px 16px 0",
              background: "rgba(255, 255, 255, 0.2)",
            }}
            onClick={() => setCurrent("")}
          />
        </Link>
        <Menu
          theme="dark"
          mode="horizontal"
          items={MENU_ITEM}
          disabledOverflow
          onClick={onClick}
          selectedKeys={[current]}
        />
      </Row>
    </Header>
  );
};

export default Header;
