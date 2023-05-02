import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, DatePicker, Form, MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Modal, Input,Select } from 'antd';
import Link from 'next/link';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const { Column, ColumnGroup } = Table;

interface DataType {
  vol: React.Key;
  heurDep: string;
  heurArr: string;
  dateDep: number;
  dateArr: string;
  typeVols: string[];
}

const data: any[] = [
  {
    vol: '1',
    heurDep: 'Carounme',
    heurArr: 'Brown',
    dateDep: 32,
    dateArr: 'New York No. 1 Lake Park',
    typeVols: [''],
  },
  {
    vol: '2',
    heurDep: 'Jim',
    heurArr: 'Green',
    dateDep: 42,
    dateArr: 'London No. 1 Lake Park',
    typeVols: [''],
  },
  {
    key: '3',
    heurDep: 'Joe',
    heurArr: 'Black',
    dateDep: 32,
    dateArr: 'Sydney No. 1 Lake Park',
    typeVols: [''],
  },
];

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('User', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const onSelect = (e)  => {

  }
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

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
            <Link href="/admin/user" >
                <Menu.Item icon={<UserOutlined />} >User</Menu.Item>    
            </Link>
            <Link href="/admin/time" >
                <Menu.Item icon={<DesktopOutlined />}>Passage</Menu.Item>    
            </Link>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <div className=''>
            <Button type="primary" ghost onClick={showModal}>Ajouter</Button>
            {/* Notre fenetre modal */}
            <Modal
              open={open}
              title="Créer un vol"
              onOk={handleOk}
              onCancel={handleCancel}
              footer={[
                <Button key="back" onClick={handleCancel}>
                  Annuler
                </Button>,
                <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                  Créer
                </Button>,
              ]}
            >
              <div className='space-y-4'>
              <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    // onFinish={onFinish}
    // onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    {/* Insérer les informations ayant rapport a l'ajout */}
    <Form.Item
      label="NomVol"
      name="vol"
      rules={[{ required: true, message: 'Please enter the name of the flight!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Date de Départ"
      name="startTime"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <DatePicker />
    </Form.Item>
    <Form.Item
      label="Date D'arrivée"
      name="startTime"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <DatePicker />
    </Form.Item>
    <Form.Item
      label="Heure de Départ"
      name="startTime"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <DatePicker picker='time' />
    </Form.Item>
    <Form.Item
      label="Heure D'arrivée"
      name="startTime"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <DatePicker picker='time' />
    </Form.Item>
    <Form.Item
      label="TypeVol"
      name="typeVol"
      rules={[{ required: true, message: 'Please enter the name of the flight!' }]}
    >
       <Select
      defaultValue="vol direct"
      style={{ width: 120 }}
      onChange={onSelect}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
    </Form.Item>
    {/* Informations ayant rapport au select de Type Vol */}
   



    


    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>

              </div>
            </Modal>
          <Table dataSource={data}>
            <Column title="Nom Vol" dataIndex="vol" key="vol" />
            <Column title="Heure de Depart" dataIndex="heurDep" key="heurDep" />
            <Column title="Heure d'Arrivee" dataIndex="heurArr" key="heurArr" />
            <Column title="Date de Depart " dataIndex="dateDep" key="dateDep" />
            <Column title="Date d'Arrivee " dataIndex="dateArr" key="dateArr" />
            <Column title="Type de Vol " dataIndex="typeVol" key="typeVol" />
            <Column
              title="Action"
              key="action"
              render={(_: any, record: DataType) => (
                <Space size="middle">
                  <a>Delete</a>
                </Space>
              )}
            />
          </Table>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>TECHIMA ©2023 Created by AWESOME PEOPLE</Footer>
      </Layout>
    </Layout>
  );
};

export default App;