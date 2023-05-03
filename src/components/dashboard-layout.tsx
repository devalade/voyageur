import React, { PropsWithChildren, useState } from "react";
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {  MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import Link from "next/link";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("User", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />)
];

function DashboardLayout ({ children }: PropsWithChildren) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Link href="/admin">
            <Menu.Item icon={<UserOutlined />}>Vol</Menu.Item>
          </Link>
          <Link href="/admin/time">
            <Menu.Item icon={<DesktopOutlined />}>Passage</Menu.Item>
          </Link>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <div className="">
           {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          MIKA ©2023 Created by AWESOME PEOPLE
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;