import type { TableProps } from 'antd';
import { Breadcrumb, Divider, Flex, Table, Tag, Typography } from "antd";
import Layout from "antd/es/layout/layout";
import { UserDeleteButton, UserEditButton } from 'shared/index';
import { UserType } from 'src/pages/types/UserType';

const columns: TableProps<UserType>['columns'] = [
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
    render: (text) => <Typography.Text copyable>{text}</Typography.Text>
  },
  {
    title: 'Firstname',
    dataIndex: 'firstname',
    key: 'firstname',
  },
  {
    title: 'Lastname',
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
    title: 'Teamn',
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
        <UserDeleteButton/>
        <UserEditButton/>
      </Flex>
    )
  },
];

const data: UserType[] = [
  {
    key: '1',
    username: 'jonh123',
    firstname: 'John',
    lastname: 'Jake',
    email: 'jonh@gmail.com',
    teamname: 'Frontend',
    rolename: 'User',
    status: 'Active'
  },
  {
    key: '2',
    username: 'jonh123',
    firstname: 'John',
    lastname: 'Jake',
    email: 'jonh@gmail.com',
    teamname: 'Frontend',
    rolename: 'User',
    status: 'DeActive'
  },
];

const Employees = () => {
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
      <Table columns={columns} dataSource={data} />;
    </Layout>
  )
}

export default Employees;