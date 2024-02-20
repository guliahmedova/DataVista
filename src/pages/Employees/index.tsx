import { UserType } from '@/pages/types/UserType';
import { CustomDrawer, CustomModal, DeleteView, EmployeeFilter, EmployeeForm, ResetPasswordForm } from '@/shared';
import utils from '@/styles/utils.module.scss';
import { DeleteOutlined, EditOutlined, FileAddOutlined, FilterOutlined, FundViewOutlined, LockOutlined } from '@ant-design/icons';
import { Descriptions, DescriptionsProps, Divider, Flex, Layout, Table, TableProps, Tag, Typography } from "antd";
import { useState } from 'react';

interface ColorCondition {
  Active: string,
  DeActive: string
};

const enum ActionKeys {
  CREATE = 'EMPLOYEE_CREATE',
  UPDATE = 'EMPLOYEE_UPDATE',
  VIEW = "EMPLOYEE_VIEW",
  FILTER = "EMPLOYEE_FILTER",
  DELETE = "EMPLOYEE_DELETE",
  RESET_PASSWORD = "RESET_PASSWORD"
};

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'First Name',
    children: 'Joe',
  },
  {
    key: '2',
    label: 'Last Name',
    children: 'Smith'
  },
  {
    key: '3',
    label: 'Email',
    children: 'joe@gmail.com'
  },
  {
    key: '4',
    label: 'Team',
    children: 'Frontend'
  },
  {
    key: '5',
    label: 'Role',
    children: 'User'
  },
  {
    key: '6',
    label: 'Status',
    children: 'Active'
  },
];

const data: UserType[] = [
  {
    key: '1',
    firstname: 'John',
    lastname: 'Jake',
    email: 'jonh@gmail.com',
    teamname: 'Frontend',
    rolename: 'User',
    status: 'Active'
  },
  {
    key: '2',
    firstname: 'John',
    lastname: 'Jake',
    email: 'jonh@gmail.com',
    teamname: 'Frontend',
    rolename: 'User',
    status: 'DeActive'
  },
  {
    key: '3',
    firstname: 'John',
    lastname: 'Jake',
    email: 'jonh@gmail.com',
    teamname: 'Frontend',
    rolename: 'User',
    status: 'Active'
  },
  {
    key: '4',
    firstname: 'John',
    lastname: 'Jake',
    email: 'jonh@gmail.com',
    teamname: 'Frontend',
    rolename: 'User',
    status: 'DeActive'
  },
  {
    key: '5',
    firstname: 'John',
    lastname: 'Jake',
    email: 'jonh@gmail.com',
    teamname: 'Frontend',
    rolename: 'User',
    status: 'Active'
  },
  {
    key: '6',
    firstname: 'John',
    lastname: 'Jake',
    email: 'jonh@gmail.com',
    teamname: 'Frontend',
    rolename: 'User',
    status: 'DeActive'
  },
  {
    key: '7',
    firstname: 'John',
    lastname: 'Jake',
    email: 'jonh@gmail.com',
    teamname: 'Frontend',
    rolename: 'User',
    status: 'Active'
  },
  {
    key: '8',
    firstname: 'John',
    lastname: 'Jake',
    email: 'jonh@gmail.com',
    teamname: 'Frontend',
    rolename: 'User',
    status: 'DeActive'
  },
  {
    key: '9',
    firstname: 'John',
    lastname: 'Jake',
    email: 'jonh@gmail.com',
    teamname: 'Frontend',
    rolename: 'User',
    status: 'Active'
  },
  {
    key: '10',
    firstname: 'John',
    lastname: 'Jake',
    email: 'jonh@gmail.com',
    teamname: 'Frontend',
    rolename: 'User',
    status: 'DeActive'
  },
];

const Employees = () => {
  const [isActive, setIsActive] = useState(false);

  const actionStatus = {
    EMPLOYEE_CREATE: <EmployeeForm okText='Create' okBtnColor='#87d068' />,
    EMPLOYEE_UPDATE: <EmployeeForm okText='Update' okBtnColor='orange' actionKey={ActionKeys.UPDATE} />,
    EMPLOYEE_VIEW: <Descriptions title="Project Info" items={items} layout="vertical" bordered={true} column={2} />,
    EMPLOYEE_FILTER: <EmployeeFilter okText='Filter' okBtnColor='purple' />,
    EMPLOYEE_DELETE: <DeleteView />,
    RESET_PASSWORD: <ResetPasswordForm />
  };

  const columns: TableProps<UserType>['columns'] = [
    {
      title: 'First Name',
      dataIndex: 'firstname',
      key: 'firstname',
      ellipsis: true
    },
    {
      title: 'Last Name',
      dataIndex: 'lastname',
      key: 'lastname',
      ellipsis: true
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
      ellipsis: true
    },
    {
      title: 'Team',
      dataIndex: 'teamname',
      key: 'teamname',
      ellipsis: true
    },
    {
      title: 'Role',
      dataIndex: 'rolename',
      key: 'rolename',
      ellipsis: true
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      ellipsis: true,
      render: (text: string) => {
        const colorCondition: ColorCondition = {
          Active: 'green',
          DeActive: 'red'
        }
        return (
          <Tag color={isActive ? colorCondition.Active : colorCondition.DeActive} key={text} onClick={() => setIsActive(!isActive)}>
            {isActive ? "Activate" : "Deactivate"}
          </Tag>
        );
      }
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      ellipsis: true,
      render: () => (
        <Flex gap={6} wrap="nowrap">
          <CustomModal actionKey={ActionKeys.UPDATE} actionStatus={actionStatus[ActionKeys.UPDATE]} icon={<EditOutlined />} title='Update Employee' classname='update_btn' okText='Update' />
          <CustomModal actionKey={ActionKeys.DELETE} actionStatus={actionStatus[ActionKeys.DELETE]} icon={<DeleteOutlined />} title='Delete Employee' classname='delete_btn' okText='Delete' />
          <CustomDrawer actionKey={ActionKeys.VIEW} icon={<FundViewOutlined />} actionStatus={actionStatus[ActionKeys.VIEW]} title='View Employee' classname='view_btn' okText='View' />
          <CustomModal actionKey={ActionKeys.RESET_PASSWORD} actionStatus={actionStatus[ActionKeys.RESET_PASSWORD]} icon={<LockOutlined />} title='Reset Password' classname='reset_employye_password_btn' okText='Delete' />
        </Flex>
      )
    },
  ];

  return (
    <Layout>
      <Divider />
      <Flex gap={6} justify="end">
        <CustomModal actionKey={ActionKeys.CREATE} actionStatus={actionStatus[ActionKeys.CREATE]} icon={<FileAddOutlined />}
          title='Create' classname='create_btn' okText='Create' />
        <CustomDrawer actionKey={ActionKeys.FILTER} icon={<FilterOutlined />} actionStatus={actionStatus[ActionKeys.FILTER]}
          title='Filter' classname='filter_btn' okText='Filter' />
      </Flex>
      <Divider />
      <Table
        columns={columns}
        dataSource={data}
        rowKey='key'
        bordered
        size="large"
        loading={false}
        scroll={{ y: 300, x: "auto" }}
        pagination={{ pageSize: 10 }}
        className={utils.table} />
    </Layout>
  )
};

export default Employees;