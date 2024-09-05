import { ACTION_KEY } from '@/pages/models';
import { useGetAllEmployeesQuery, useUpdateEmployeeStatusMutation } from '@/redux/api/employees';
import { IEmployeeResponse } from '@/redux/models';
import { CustomDrawer, CustomModal, EmployeeFilter, EmployeeForm, ResetPasswordForm } from '@/shared';
import utils from '@/styles/utils.module.scss';
import { DeleteOutlined, EditOutlined, FileAddOutlined, FilterOutlined, FundViewOutlined, LockOutlined } from '@ant-design/icons';
import { Descriptions, DescriptionsProps, Divider, Flex, Layout, Space, Table, TableProps, Tag, Typography } from "antd";
import { useMemo, useState } from 'react';
import EmployeeDelete from './components/Delete';

interface ColorCondition {
  ACTIVE: string,
  INACTIVE: string
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

const Employees = () => {
  const [_, setRowStatus] = useState<{ [key: number]: string }>({});
  const { data: employees } = useGetAllEmployeesQuery();
  const [selectRowId, setSelectRowId] = useState<null | number>(null);
  const [updateEmployeeStatus] = useUpdateEmployeeStatusMutation();

  const actionStatus = {
    CREATE: <EmployeeForm actionKey={ACTION_KEY.CREATE} okText='Create' okBtnColor='#87d068' />,
    UPDATE: <EmployeeForm selectRowId={selectRowId} actionKey={ACTION_KEY.UPDATE} okText='Update' okBtnColor='orange' />,
    VIEW: <Descriptions title="Project Info" items={items} layout="vertical" bordered={true} column={2} />,
    FILTER: <EmployeeFilter okText='Filter' okBtnColor='purple' />,
    DELETE: <EmployeeDelete id={selectRowId} />,
    RESET_PASSWORD: <ResetPasswordForm />
  };

  const handleRowSelect = (rowId: number) => {
    setSelectRowId(rowId);
  };

  const handleStatusUpdate = (userID: number, status: string) => {
    const newStatus = status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
    setRowStatus(prevStatus => ({
      ...prevStatus,
      [userID]: newStatus
    }));
    updateEmployeeStatus({
      id: userID,
      status: newStatus
    });
  };

  const columns: TableProps['columns'] = [
    {
      title: 'Full Name',
      dataIndex: 'fullname',
      key: 'fullname',
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
      title: 'Team Name',
      dataIndex: 'teamName',
      key: 'teamName',
      ellipsis: true
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text: string, record) => {
        const colorCondition: ColorCondition = {
          ACTIVE: 'green',
          INACTIVE: 'red'
        }
        return (
          <Tag
            color={text === 'ACTIVE' ? colorCondition.ACTIVE : colorCondition.INACTIVE}
            key={text}
            onClick={() => handleStatusUpdate(record.key, text)}>
            {text}
          </Tag>
        );
      },
      ellipsis: true
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      ellipsis: true
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      ellipsis: true,
      render: (_, record) => (
        <Space>
          <CustomModal
            modalID={`EmployyesUpdate_${record.key}`}
            actionKey={ACTION_KEY.UPDATE}
            actionStatus={actionStatus[ACTION_KEY.UPDATE]}
            icon={<EditOutlined />}
            title='Update Employee'
            classname='update_btn'
            okText='Update' />

          <CustomModal
            modalID={`EmployyesDelete_${record.key}`}
            actionKey={ACTION_KEY.DELETE}
            actionStatus={actionStatus[ACTION_KEY.DELETE]}
            icon={<DeleteOutlined />}
            title='Delete Employee'
            classname='delete_btn'
            okText='Delete' />

          <CustomDrawer
            actionKey={ACTION_KEY.VIEW}
            actionStatus={actionStatus[ACTION_KEY.VIEW]}
            icon={<FundViewOutlined />}
            title='View Employee'
            classname='view_btn'
            okText='View' />

          <CustomModal
            modalID={`EmployeeResetPassword_${record.key}`}
            actionKey={ACTION_KEY.RESET_PASSWORD}
            actionStatus={actionStatus[ACTION_KEY.RESET_PASSWORD]}
            icon={<LockOutlined />}
            title='Reset Password'
            classname='reset_employye_password_btn'
            okText='Delete' />
        </Space>
      )
    }
  ];

  const employeesDatas = useMemo(() => {
    return employees?.map((item: IEmployeeResponse) => ({
      fullname: item.fullname,
      email: item.email,
      teamName: item.teamName,
      status: item.status,
      role: item.role,
      key: item.user_id
    }));
  }, [employees]);

  return (
    <Layout>
      <Divider />
      <Flex gap={6} justify="end">
        <CustomModal
          modalID='EmployyesCreate'
          actionKey={ACTION_KEY.CREATE}
          actionStatus={actionStatus[ACTION_KEY.CREATE]}
          icon={<FileAddOutlined />}
          title='Create'
          classname='create_btn'
          okText='Create' />
        <CustomDrawer
          actionKey={ACTION_KEY.FILTER}
          icon={<FilterOutlined />}
          actionStatus={actionStatus[ACTION_KEY.FILTER]}
          title='Filter'
          classname='filter_btn'
          okText='Filter' />
      </Flex>
      <Divider />
      <Table
        columns={columns}
        dataSource={employeesDatas}
        rowKey='key'
        bordered
        size="large"
        loading={false}
        scroll={{ y: 300, x: "auto" }}
        pagination={{ pageSize: 10 }}
        className={utils.table}
        onRow={(record) => ({
          onClick: () => handleRowSelect(record.key)
        })}
      />
    </Layout>
  )
};

export default Employees;