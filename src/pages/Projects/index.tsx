import { EditOutlined, FileAddOutlined, FilterOutlined, FundViewOutlined } from '@ant-design/icons';
import type { DescriptionsProps, TableProps } from 'antd';
import { Breadcrumb, Descriptions, Divider, Flex, Table } from "antd";
import Layout from "antd/es/layout/layout";
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
  const formFields = (actionKey: string) => {
    switch (actionKey) {
      case ActionKeys.CREATE:
        return (
          <ProjectForm okText='Create' okBtnColor='#87d068' />
        )
      case ActionKeys.UPDATE:
        return (
          <ProjectForm okText='Update' okBtnColor='orange' />
        )
      case ActionKeys.VIEW:
        return (
          <Descriptions bordered={true} column={2} items={items} layout="vertical" />
        )
      case ActionKeys.FILTER:
        return (
          <ProjectFilter okText='Filter' okBtnColor='purple' />
        )
      default:
        break;
    }
  };

  const columns: TableProps<ProjectType>['columns'] = [
    {
      title: 'Project Name',
      dataIndex: 'projectName',
      key: 'projectName',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: () => (
        <Flex gap='small' wrap='wrap'>
          <CustomModal actionKey={ActionKeys.CREATE} formFields={formFields} icon={<EditOutlined />} title='Update Project' classname='update_btn' okText='Update' />
          <CustomDrawer actionKey={ActionKeys.VIEW} formFields={formFields} icon={<FundViewOutlined />} title='View Team' classname='view_btn' okText='View' />
        </Flex>
      ),
      responsive: ['lg']
    },
  ];

  return (
    <Layout>
      <Breadcrumb
        items={[
          {
            title: 'Projects',
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
};

export default Projects;