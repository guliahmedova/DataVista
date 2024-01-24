import type { TableProps } from 'antd';
import { Breadcrumb, Divider, Flex, Table } from "antd";
import Layout from "antd/es/layout/layout";
import { ProjectDeleteButton, ProjectEditButton } from 'src/shared/components/index';
import { ProjectType } from 'src/shared/types/ProjectType';

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
        <ProjectDeleteButton />
        <ProjectEditButton />
      </Flex>
    )
  },
];

const data: ProjectType[] = [
  {
    id: 8295,
    projectName: 'Furniro',
  },
];

const Projects = () => {
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
      <Table columns={columns} dataSource={data} />;
    </Layout>
  )
};

export default Projects;