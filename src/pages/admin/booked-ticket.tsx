import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {Button, MenuProps} from "antd";
import { theme } from "antd";
import { api } from '@/utils/api';
import CreateFlightModal from '@/features/flight/create-flight.modal';
import FlightTable from '@/features/flight/flight.table';
import DashboardLayout from '@/components/dashboard-layout';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const allFlight = api.flight.getAll.useQuery();

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
