import { DeleteOutlined, EditOutlined, FileAddOutlined, FilterOutlined, FundViewOutlined } from '@ant-design/icons';
import type { DescriptionsProps, TableProps } from 'antd';
import { Breadcrumb, Descriptions, Divider, Flex, Table } from "antd";
import Layout from "antd/es/layout/layout";
import { CustomModal, DeleteView, TeamForm } from 'shared/index';
import { TeamType } from 'src/pages/types/TeamType';

const data: TeamType[] = [
  {
    id: 123456,
    teamName: 'Frontend',
  },
];

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Team Name',
    children: 'Frotend',
  },
  {
    key: '2',
    label: 'Employees',
    children: 'Joe, Tris'
  },
];


const Teams = () => {

  const formFields = (actionKey: string) => {
    switch (actionKey) {
      case 'TEAM_CREATE':
        return (
          <TeamForm />
        )
      case 'TEAM_UPDATE':
        return (
          <TeamForm />
        )
      case 'TEAM_DELETE':
        return (
          <DeleteView />
        )
      case 'TEAM_VIEW':
        return (
          <Descriptions title="Team Info" items={items} layout="vertical" />
        )
      default:
        break;
    }
  };

  const columns: TableProps<TeamType>['columns'] = [
    {
      title: 'Team Name',
      dataIndex: 'teamName',
      key: 'teamName',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: () => (
        <Flex gap='small' wrap='wrap'>
          <CustomModal actionKey='TEAM_UPDATE' formFields={formFields} icon={<EditOutlined />} title='Update Team' classname='update_btn' okText='Update' />
          <CustomModal actionKey='TEAM_DELETE' formFields={formFields} icon={<DeleteOutlined />} title='' classname='delete_btn' okText='Delete' />
          <CustomModal actionKey='TEAM_VIEW' formFields={formFields} icon={<FundViewOutlined />} title='' classname='view_btn' okText='VIew' />
        </Flex>
      )
    },
  ];

  return (
    <Layout>
      <Breadcrumb
        items={[
          {
            title: 'Teams',
          }
        ]}
      />
      <Divider />
      <Flex gap={8} justify="end">
        <CustomModal actionKey='TEAM_CREATE' formFields={formFields} icon={<FileAddOutlined />} title='Create' classname='create_btn' okText='Create' />
        <CustomModal actionKey='TEAM_FILTER' formFields={formFields} icon={<FilterOutlined />} title='Filter' classname='filter_btn' okText='Filter' />
      </Flex>
      <Divider />
      <Table columns={columns} dataSource={data} rowKey='id' />
    </Layout>
  )
}

export default Teams;