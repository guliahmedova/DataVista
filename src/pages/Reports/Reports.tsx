import type { TableProps } from 'antd';
import { Breadcrumb, Divider, Flex, Table } from "antd";
import Layout from "antd/es/layout/layout";
import { ReportDeleteButton, ReportEditButton } from 'src/shared/components/index';
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
        <ReportDeleteButton />
        <ReportEditButton />
      </Flex>
    )
  },
];

const data: ProjectType[] = [
  {
    id: 8295,
    projectName: 'Responsive Design Added',
  },
];

const Reports = () => {
  return (
    <Layout>
      <Breadcrumb
        items={[
          {
            title: 'Reports',
          }
        ]}
      />
      <Divider />
      <Table columns={columns} dataSource={data} />;
    </Layout>
  )
};

export default Reports;