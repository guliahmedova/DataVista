import type { TableProps } from 'antd';
import { Breadcrumb, Divider, Flex, Table } from "antd";
import Layout from "antd/es/layout/layout";
import { ReportDeleteButton, ReportEditButton } from 'shared/index';
import { ReportType } from '../types/ReportType';

const columns: TableProps<ReportType>['columns'] = [
  {
    title: 'Title',
    dataIndex: 'reportName',
    key: 'reportName',
  },
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

const data: ReportType[] = [
  {
    id: 8295,
    reportName: 'Responsive Design Added',
    projectName: 'Furniro'
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