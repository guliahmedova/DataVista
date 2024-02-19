import { DeleteOutlined, EditOutlined, FileAddOutlined, FilterOutlined, FundViewOutlined } from '@ant-design/icons';
import { Descriptions, DescriptionsProps, Divider, Flex, Layout, Table, TableProps, Typography } from "antd";
import { CustomDrawer, CustomModal, DeleteView, TeamFilter, TeamForm } from 'shared/index';
import { TeamType } from 'src/pages/types/TeamType';

const enum ActionKeys {
  CREATE = 'TEAM_CREATE',
  UPDATE = 'TEAM_UPDATE',
  VIEW = "TEAM_VIEW",
  FILTER = "TEAM_FILTER",
  DELETE = "TEAM_DELETE",
};

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
    children: <Typography.Text>Frotend</Typography.Text>,
  },
  {
    key: '2',
    label: 'Employees',
    children: (
      <Typography.Text>Joe, Sarah</Typography.Text>
    )
  },
];

const Teams = () => {
  const actionStatus = {
    TEAM_CREATE: <TeamForm okText='Create' okBtnColor='#87d068' />,
    TEAM_UPDATE: <TeamForm okText='Update' okBtnColor='orange' />,
    TEAM_VIEW: <Descriptions items={items} layout="vertical" bordered={true} column={2} />,
    TEAM_FILTER: <TeamFilter okText='Filter' okBtnColor='purple' />,
    TEAM_DELETE: <DeleteView />
  };

  const columns: TableProps<TeamType>['columns'] = [
    {
      title: 'Team Name',
      dataIndex: 'teamName',
      key: 'teamName',
      ellipsis: true
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      ellipsis: true,
      render: () => (
        <Flex gap='small' wrap='wrap'>
          <CustomModal actionKey={ActionKeys.UPDATE} actionStatus={actionStatus[ActionKeys.UPDATE]} icon={<EditOutlined />} title='Update Team' classname='update_btn' okText='Update' />
          <CustomModal actionKey={ActionKeys.DELETE} actionStatus={actionStatus[ActionKeys.DELETE]} icon={<DeleteOutlined />} title='Delete Team' classname='delete_btn' okText='Delete' />
          <CustomDrawer actionKey={ActionKeys.VIEW} actionStatus={actionStatus[ActionKeys.VIEW]} icon={<FundViewOutlined />} title='View Team' classname='view_btn' okText='View' />
        </Flex>
      )
    },
  ];

  return (
    <Layout>
      <Divider />
      <Flex gap={6} justify='end'>
        <CustomModal actionKey={ActionKeys.CREATE} actionStatus={actionStatus[ActionKeys.CREATE]} icon={<FileAddOutlined />} title='Create' classname='create_btn' okText='Create' />
        <CustomDrawer actionKey={ActionKeys.FILTER} actionStatus={actionStatus[ActionKeys.FILTER]} icon={<FilterOutlined />} title='Filter' classname='filter_btn' okText='Filter' />
      </Flex>
      <Divider />
      <Table columns={columns} dataSource={data} rowKey='id' bordered size="large" scroll={{ y: 300, x: "auto" }}
        pagination={{ pageSize: 20 }} />
    </Layout>
  )
}

export default Teams;