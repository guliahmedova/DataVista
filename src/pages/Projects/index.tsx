import { ACTION_KEY, ProjectType } from '@/pages/models/index';
import { CustomDrawer, CustomModal, ProjectFilter, ProjectForm } from '@/shared/index';
import { EditOutlined, FileAddOutlined, FilterOutlined, FundViewOutlined } from '@ant-design/icons';
import { Descriptions, DescriptionsProps, Divider, Flex, Layout, Table, TableProps } from "antd";

const data: ProjectType[] = [
  {
    id: 8295,
    projectName: 'Furniro',
  },
];

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Project Name',
    children: 'Furniro',
  },
  {
    key: '2',
    label: 'Employees',
    children: 'Joe, Tris',
  },
];

const Projects = () => {
  const actionStatus = {
    CREATE: <ProjectForm okText='Create' okBtnColor='#87d068' />,
    UPDATE: <ProjectForm okText='Update' okBtnColor='orange' />,
    VIEW: <Descriptions bordered={true} column={2} items={items} layout="vertical" />,
    FILTER: <ProjectFilter okText='Filter' okBtnColor='purple' />,
  };

  const columns: TableProps<ProjectType>['columns'] = [
    {
      title: 'Project Name',
      dataIndex: 'projectName',
      key: 'projectName',
      ellipsis: true
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      ellipsis: true,
      render: () => (
        <Flex gap='small' wrap='wrap'>
          <CustomModal modalID='ProjectUpdate' actionKey={ACTION_KEY.UPDATE} actionStatus={actionStatus[ACTION_KEY.UPDATE]} icon={<EditOutlined />} title='Update Project' classname='update_btn' okText='Update' />
          <CustomDrawer actionKey={ACTION_KEY.VIEW} actionStatus={actionStatus[ACTION_KEY.VIEW]} icon={<FundViewOutlined />} title='View Team' classname='view_btn' okText='View' />
        </Flex>
      ),
    },
  ];

  return (
    <Layout>
      <Divider />
      <Flex gap={6} justify='end'>
        <CustomModal modalID='ProjectCreate' actionKey={ACTION_KEY.CREATE} actionStatus={actionStatus[ACTION_KEY.CREATE]} icon={<FileAddOutlined />} title='Create' classname='create_btn' okText='Create' />
        <CustomDrawer actionKey={ACTION_KEY.FILTER} actionStatus={actionStatus[ACTION_KEY.FILTER]} icon={<FilterOutlined />} title='Filter' classname='filter_btn' okText='Filter' />
      </Flex>
      <Divider />
      <Table columns={columns} dataSource={data} rowKey='id' bordered size="large" scroll={{ y: 300, x: "auto" }}
        pagination={{ pageSize: 20 }} />
    </Layout>
  )
};

export default Projects;