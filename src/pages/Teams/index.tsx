import { DeleteOutlined, EditOutlined, FileAddOutlined, FundViewOutlined } from '@ant-design/icons';
import type { TableProps } from 'antd';
import { Avatar, Breadcrumb, Col, Divider, Flex, Row, Table, Tooltip } from "antd";
import Layout from "antd/es/layout/layout";
import { ActionButton, TeamFilter } from 'shared/index';
import { TeamType } from 'src/pages/types/TeamType';

const columns: TableProps<TeamType>['columns'] = [
  {
    title: 'Team Name',
    dataIndex: 'teamName',
    key: 'teamName',
  },
  {
    title: 'Team Members',
    dataIndex: 'users',
    key: 'usersColKey',
    render: (users) => (
      <Avatar.Group maxCount={3} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
        {users.map((user: any, index: number) => (
          <Tooltip title={user} placement="top" key={index}>
            <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
          </Tooltip>
        ))}
      </Avatar.Group>
    )
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: () => (
      <Flex gap='small' wrap='wrap'>
        <ActionButton actionKey='Update' icon={<EditOutlined />} title='Update' classname='update_btn' />
        <ActionButton actionKey='Delete' icon={<DeleteOutlined />} title='Delete' classname='delete_btn' />
        <ActionButton actionKey='View' icon={<FundViewOutlined />} title='View' classname='view_btn' />
      </Flex>
    )
  },
];

const data: TeamType[] = [
  {
    id: 123456,
    teamName: 'Frontend',
    users: ['Guli', 'Nezrin', 'Xanim', 'Seshla']
  },
];

const Teams = () => {
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
      <Row>
        <Col span={4}>
          <TeamFilter />
        </Col>
      </Row>
      <ActionButton actionKey='Create' icon={<FileAddOutlined />} title='Create' classname='create_btn' />
      <Divider />
      <Table columns={columns} dataSource={data} />
    </Layout>
  )
}

export default Teams;