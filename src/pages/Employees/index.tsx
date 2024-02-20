import { ACTION_KEY, UserType } from '@/pages/models';
import { useGetAllEmployeesQuery } from '@/redux/api/employees';
import { CustomDrawer, CustomModal, DeleteView, EmployeeFilter, EmployeeForm, ResetPasswordForm } from '@/shared';
import utils from '@/styles/utils.module.scss';
import { DeleteOutlined, EditOutlined, FileAddOutlined, FilterOutlined, FundViewOutlined, LockOutlined } from '@ant-design/icons';
import { Descriptions, DescriptionsProps, Divider, Flex, Layout, Table, TableProps, Tag, Typography } from "antd";
import { useState } from 'react';

interface ColorCondition {
  Active: string,
  DeActive: string
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

const datas: UserType[] = [
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
    CREATE: <EmployeeForm actionKey={ACTION_KEY.CREATE} okText='Create' okBtnColor='#87d068' />,
    UPDATE: <EmployeeForm actionKey={ACTION_KEY.UPDATE} okText='Update' okBtnColor='orange' />,
    VIEW: <Descriptions title="Project Info" items={items} layout="vertical" bordered={true} column={2} />,
    FILTER: <EmployeeFilter okText='Filter' okBtnColor='purple' />,
    DELETE: <DeleteView />,
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
          <CustomModal actionKey={ACTION_KEY.UPDATE} actionStatus={actionStatus[ACTION_KEY.UPDATE]} icon={<EditOutlined />} title='Update Employee' classname='update_btn' okText='Update' />
          <CustomModal actionKey={ACTION_KEY.DELETE} actionStatus={actionStatus[ACTION_KEY.DELETE]} icon={<DeleteOutlined />} title='Delete Employee' classname='delete_btn' okText='Delete' />
          <CustomDrawer actionKey={ACTION_KEY.VIEW} icon={<FundViewOutlined />} actionStatus={actionStatus[ACTION_KEY.VIEW]} title='View Employee' classname='view_btn' okText='View' />
          <CustomModal actionKey={ACTION_KEY.RESET_PASSWORD} actionStatus={actionStatus[ACTION_KEY.RESET_PASSWORD]} icon={<LockOutlined />} title='Reset Password' classname='reset_employye_password_btn' okText='Delete' />
        </Flex>
      )
    },
  ];

  const { data } = useGetAllEmployeesQuery("");
  console.log(data);

  return (
    <Layout>
      <Divider />
      <Flex gap={6} justify="end">
        <CustomModal actionKey={ACTION_KEY.CREATE} actionStatus={actionStatus[ACTION_KEY.CREATE]} icon={<FileAddOutlined />}
          title='Create' classname='create_btn' okText='Create' />
        <CustomDrawer actionKey={ACTION_KEY.FILTER} icon={<FilterOutlined />} actionStatus={actionStatus[ACTION_KEY.FILTER]}
          title='Filter' classname='filter_btn' okText='Filter' />
      </Flex>
      <Divider />
      <Table
        columns={columns}
        dataSource={datas}
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