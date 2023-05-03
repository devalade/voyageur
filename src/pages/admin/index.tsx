import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, DatePicker, Form, MenuProps } from "antd";
import { Layout, Menu, theme, Modal, Input, Select } from "antd";
import Link from "next/link";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import {api} from '@/utils/api';
import CreateFlightModal from '@/features/flight/flight.form';
import FlightTable from '@/features/flight/flight.table';
import DashboardLayout from '@/components/dashboard-layout';

const { Column, ColumnGroup } = Table;
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
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const allFlight = api.flight.getAll.useQuery();

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <DashboardLayout>
        <CreateFlightModal open={open} onClose={onClose} />
        <FlightTable data={allFlight.data ?? []} />
    </DashboardLayout>
  );
};

export default App;
