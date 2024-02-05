import { EditOutlined, ExportOutlined, FileAddOutlined, FilterOutlined, FundViewOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Descriptions, DescriptionsProps, Divider, Flex, Layout, Table, TableProps, Tooltip } from "antd";
import { ReportType } from "pages/types/ReportType";
import styles from "shared/components/Modal/Modal.module.scss";
import { CustomDrawer, CustomModal, ReportFilter, ReportForm } from 'src/shared';

const enum ActionKeys {
  CREATE = 'REPORT_CREATE',
  UPDATE = 'REPORT_UPDATE',
  VIEW = "REPORT_VIEW",
  FILTER = "REPORT_FILTER",
  EXPORT = "REPORT_EXPORT",
};

const data: ReportType[] = [
  {
    id: 8295,
    reportName: 'Responsive Design Added...',
    projectName: 'Furniro',
    employeeName: 'Sarah',
    reportCreatedAt: '1/29/2024'
  }
];

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Employee Name',
    children: 'Sarah Smith',
  },
  {
    key: '2',
    label: 'Created',
    children: '1/29/2024'
  },
  {
    key: '3',
    label: 'Note',
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
  },
  {
    key: '4',
    label: 'Project Name',
    children: 'Furniro'
  },
];

const Reports = () => {
  const actionStatus = {
    REPORT_CREATE: <ReportForm okText='Create' okBtnColor='#87d068' />,
    REPORT_UPDATE: <ReportForm okText='Update' okBtnColor='orange' />,
    REPORT_VIEW: <Descriptions title="" items={items} layout="vertical" bordered={true} column={1} />,
    REPORT_FILTER: <ReportFilter okText='Filter' okBtnColor='purple' />,
  };

  const columns: TableProps<ReportType>['columns'] = [
    {
      title: 'Employee Name',
      dataIndex: 'employeeName',
      key: 'employeeName',
      ellipsis: true,
    },
    {
      title: 'Created',
      dataIndex: 'reportCreatedAt',
      key: 'reportCreatedAt',
      ellipsis: true,
    },
    {
      title: 'Note',
      dataIndex: 'reportName',
      key: 'reportName',
      ellipsis: true,
    },
    {
      title: 'Project Name',
      dataIndex: 'projectName',
      key: 'projectName',
      ellipsis: true,
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      ellipsis: true,
      render: () => (
        <Flex gap='small' wrap='nowrap'>
          <CustomModal actionKey={ActionKeys.UPDATE} actionStatus={actionStatus[ActionKeys.UPDATE]} icon={<EditOutlined />} title='Update Report' classname='update_btn' okText='Update' />
          <CustomDrawer actionKey={ActionKeys.VIEW} actionStatus={actionStatus[ActionKeys.VIEW]} icon={<FundViewOutlined />} title='View Report' classname='view_btn' okText='View' />
        </Flex>
      )
    },
  ];

  return (
    <Layout>
      <Breadcrumb
        items={[
          {
            title: 'Reports',
          }
        ]}
      />
      <Flex gap={6} justify="end">
        <CustomModal actionKey={ActionKeys.CREATE} actionStatus={actionStatus[ActionKeys.CREATE]} icon={<FileAddOutlined />} title='Create' classname='create_btn' okText='Create' />
        <CustomDrawer actionKey={ActionKeys.FILTER} actionStatus={actionStatus[ActionKeys.FILTER]} icon={<FilterOutlined />} title='Filter' classname='filter_btn' okText='Filter' />
        <Tooltip title='Export' placement="top">
          <Button className={styles.export_btn} icon={<ExportOutlined />} size="large" />
        </Tooltip>
      </Flex>
      <Divider />
      <Table columns={columns} dataSource={data} rowKey='id' bordered size="large" scroll={{ y: 300, x: "auto" }}
        pagination={{ pageSize: 20 }} />
    </Layout>
  )
};

export default Reports;