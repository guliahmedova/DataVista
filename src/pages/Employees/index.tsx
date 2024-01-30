import { DeleteOutlined, EditOutlined, FileAddOutlined, FilterOutlined, FundViewOutlined, LockOutlined } from '@ant-design/icons';
import type { DescriptionsProps, TableProps } from 'antd';
import { Breadcrumb, Descriptions, Divider, Flex, Table, Tag, Typography } from "antd";
import Layout from "antd/es/layout/layout";
import { CustomDrawer, CustomModal, DeleteView, EmployeeFilter, EmployeeForm, ResetPasswordForm } from 'shared/index';
import { UserType } from 'src/pages/types/UserType';

enum ActionKeys {
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
];

const Employees = () => {
  const formFields = (actionKey: string) => {
    switch (actionKey) {
      case ActionKeys.CREATE:
        return (
          <EmployeeForm okText='Create' okBtnColor='#87d068' />
        )
      case ActionKeys.UPDATE:
        return (
          <EmployeeForm okText='Update' okBtnColor='orange' actionKey={ActionKeys.UPDATE} />
        )
      case ActionKeys.DELETE:
        return (
          <DeleteView />
        )
      case ActionKeys.VIEW:
        return (
          <Descriptions title="Project Info" items={items} layout="vertical" bordered={true} column={2} />
        )
      case ActionKeys.FILTER:
        return (
          <EmployeeFilter okText='Filter' okBtnColor='purple' />
        )
      case ActionKeys.RESET_PASSWORD:
        return (
          <ResetPasswordForm />
        )
      default:
        break;
    }
  };

  const columns: TableProps<UserType>['columns'] = [
    {
      title: 'First Name',
      dataIndex: 'firstname',
      key: 'firstname',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastname',
      key: 'lastname',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (text) => <Typography.Text copyable>{text}</Typography.Text>
    },
    {
      title: 'Team',
      dataIndex: 'teamname',
      key: 'teamname',
    },
    {
      title: 'Role',
      dataIndex: 'rolename',
      key: 'rolename',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => {
        let color = text.length > 5 ? 'geekblue' : 'green';
        if (text === 'Active') {
          color = 'green';
        } else if (text === 'DeActive') {
          color = 'red';
        }
        return (
          <Tag color={color} key={text}>
            {text.toUpperCase()}
          </Tag>
        );
      }
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: () => (
        <Flex gap='small' wrap='wrap'>
          <Flex gap='small' wrap='wrap'>
            <CustomModal actionKey={ActionKeys.UPDATE} formFields={formFields} icon={<EditOutlined />} title='Update Employee' classname='update_btn' okText='Update' />
            <CustomModal actionKey={ActionKeys.DELETE} formFields={formFields} icon={<DeleteOutlined />} title='Delete Employee' classname='delete_btn' okText='Delete' />
            <CustomDrawer actionKey={ActionKeys.VIEW} formFields={formFields} icon={<FundViewOutlined />} title='View Employee' classname='view_btn' okText='View' />
            <CustomModal actionKey={ActionKeys.RESET_PASSWORD} formFields={formFields} icon={<LockOutlined />} title='Reset Password' classname='reset_employye_password_btn' okText='Delete' />
          </Flex>
        </Flex>
      )
    },
  ];

  return (
    <Layout>
      <Breadcrumb
        items={[
          {
            title: 'Employees',
          }
        ]}
      />
      <Divider />
      <Flex gap={8} justify="end">
        <CustomModal actionKey={ActionKeys.CREATE} formFields={formFields} icon={<FileAddOutlined />} title='Create' classname='create_btn' okText='Create' />
        <CustomDrawer actionKey={ActionKeys.FILTER} formFields={formFields} icon={<FilterOutlined />} title='Filter' classname='filter_btn' okText='Filter' />
      </Flex>
      <Divider />
      <Table columns={columns} dataSource={data} rowKey='key' bordered size="large" />
    </Layout>
  )
}

export default Employees;