import { EditOutlined, FileAddOutlined, FilterOutlined, FundViewOutlined } from '@ant-design/icons';
import { Descriptions, DescriptionsProps, Divider, Flex, Layout, Table, TableProps } from "antd";
import { CustomDrawer, CustomModal, ProjectFilter, ProjectForm } from 'shared/index';
import { ProjectType } from 'src/pages/types/ProjectType';

const enum ActionKeys {
  CREATE = 'PROJECTS_CREATE',
  UPDATE = 'PROJECTS_UPDATE',
  VIEW = "PROJECTS_VIEW",
  FILTER = "PROJECTS_FILTER",
  DELETE = "PROJECTS_DELETE",
};

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
    PROJECTS_CREATE: <ProjectForm okText='Create' okBtnColor='#87d068' />,
    PROJECTS_UPDATE: <ProjectForm okText='Update' okBtnColor='orange' />,
    PROJECTS_VIEW: <Descriptions bordered={true} column={2} items={items} layout="vertical" />,
    PROJECTS_FILTER: <ProjectFilter okText='Filter' okBtnColor='purple' />,
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
          <CustomModal actionKey={ActionKeys.CREATE} actionStatus={actionStatus[ActionKeys.CREATE]} icon={<EditOutlined />} title='Update Project' classname='update_btn' okText='Update' />
          <CustomDrawer actionKey={ActionKeys.VIEW} actionStatus={actionStatus[ActionKeys.VIEW]} icon={<FundViewOutlined />} title='View Team' classname='view_btn' okText='View' />
        </Flex>
      ),
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
};

export default Projects;