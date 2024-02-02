import { DeleteOutlined, EditOutlined, FileAddOutlined, FilterOutlined, FundViewOutlined } from '@ant-design/icons';
import { Breadcrumb, Descriptions, DescriptionsProps, Divider, Flex, Layout, Table, TableProps, Typography } from "antd";
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
  const formFields = (actionKey: string) => {
    switch (actionKey) {
      case ActionKeys.CREATE:
        return (
          <TeamForm okText='Create' okBtnColor='#87d068' />
        )
      case ActionKeys.UPDATE:
        return (
          <TeamForm okText='Update' okBtnColor='orange' />
        )
      case ActionKeys.DELETE:
        return (
          <DeleteView />
        )
      case ActionKeys.VIEW:
        return (
          <Descriptions items={items} layout="vertical" bordered={true} column={2} />
        )
      case ActionKeys.FILTER:
        return (
          <TeamFilter okText='Filter' okBtnColor='purple' />
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
          <CustomModal actionKey={ActionKeys.UPDATE} formFields={formFields} icon={<EditOutlined />} title='Update Team' classname='update_btn' okText='Update' />
          <CustomModal actionKey={ActionKeys.DELETE} formFields={formFields} icon={<DeleteOutlined />} title='Delete Team' classname='delete_btn' okText='Delete' />
          <CustomDrawer actionKey={ActionKeys.VIEW} formFields={formFields} icon={<FundViewOutlined />} title='View Team' classname='view_btn' okText='View' />
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
        <CustomModal actionKey={ActionKeys.CREATE} formFields={formFields} icon={<FileAddOutlined />} title='Create' classname='create_btn' okText='Create' />
        <CustomDrawer actionKey={ActionKeys.FILTER} formFields={formFields} icon={<FilterOutlined />} title='Filter' classname='filter_btn' okText='Filter' />
      </Flex>
      <Divider />
      <Table columns={columns} dataSource={data} rowKey='id' bordered size="large" />
    </Layout>
  )
}

export default Teams;