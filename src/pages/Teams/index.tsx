import { ACTION_KEY, ITeamTable } from '@/pages/models/index';
import { CustomDrawer, CustomModal, DeleteView, TeamFilter, TeamForm } from '@/shared/index';
import { DeleteOutlined, EditOutlined, FileAddOutlined, FilterOutlined, FundViewOutlined } from '@ant-design/icons';
import { Descriptions, DescriptionsProps, Divider, Flex, Layout, Table, TableProps, Typography } from "antd";

const data: ITeamTable[] = [
  {
    id: 1,
    teamName: 'Frontend',
  },
];

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Team Name',
    children: <Typography.Text>Frotend</Typography.Text>,
  },
];

const Teams = () => {
  const actionStatus = {
    CREATE: <TeamForm okText='Create' okBtnColor='#87d068' />,
    UPDATE: <TeamForm okText='Update' okBtnColor='orange' />,
    VIEW: <Descriptions items={items} layout="vertical" bordered={true} column={2} />,
    FILTER: <TeamFilter okText='Filter' okBtnColor='purple' />,
    DELETE: <DeleteView />
  };

  const columns: TableProps['columns'] = [
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
          <CustomModal actionKey={ACTION_KEY.UPDATE} modalID='TeamUpdate' actionStatus={actionStatus[ACTION_KEY.UPDATE]} icon={<EditOutlined />} title='Update Team' classname='update_btn' okText='Update' />
          <CustomModal actionKey={ACTION_KEY.DELETE} modalID='TeamDelete' actionStatus={actionStatus[ACTION_KEY.DELETE]} icon={<DeleteOutlined />} title='Delete Team' classname='delete_btn' okText='Delete' />
          <CustomDrawer actionKey={ACTION_KEY.VIEW} actionStatus={actionStatus[ACTION_KEY.VIEW]} icon={<FundViewOutlined />} title='View Team' classname='view_btn' okText='View' />
        </Flex>
      )
    },
  ];

  return (
    <Layout>
      <Divider />
      <Flex gap={6} justify='end'>
        <CustomModal actionKey={ACTION_KEY.CREATE} modalID='TeamCreate' actionStatus={actionStatus[ACTION_KEY.CREATE]} icon={<FileAddOutlined />} title='Create' classname='create_btn' okText='Create' />
        <CustomDrawer actionKey={ACTION_KEY.FILTER} actionStatus={actionStatus[ACTION_KEY.FILTER]} icon={<FilterOutlined />} title='Filter' classname='filter_btn' okText='Filter' />
      </Flex>
      <Divider />
      <Table columns={columns} dataSource={data} rowKey='id' bordered size="large" scroll={{ y: 300, x: "auto" }}
        pagination={{ pageSize: 20 }} />
    </Layout>
  )
}

export default Teams;