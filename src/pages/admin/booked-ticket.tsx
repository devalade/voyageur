import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {Button, MenuProps, Typography} from "antd";
import { theme } from "antd";
import { api } from '@/utils/api';
import CreateFlightModal from '@/features/flight/create-flight.modal';
import FlightTable from '@/features/flight/flight.table';
import DashboardLayout from '@/components/dashboard-layout';
import BookedFlightTable from "@/features/booked-flight";

const App: React.FC = () => {
  const allBookedFlight = api.bookedFlight.getAll.useQuery();

  console.log({ allBookedFlight });

  return (
    <DashboardLayout>
      <Typography.Title level={4} style={{ marginBlock: 24 }}>Réservation de vol</Typography.Title>
        <BookedFlightTable data={allBookedFlight.data ?? []} />
    </DashboardLayout>
  );
};

export default App;
