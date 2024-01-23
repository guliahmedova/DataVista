import type { TableProps } from 'antd';
import { Avatar, Breadcrumb, Divider, Table, Tooltip } from "antd";
import Layout from "antd/es/layout/layout";
import { TeamType } from '../../shared/types/TeamType';

const columns: TableProps<TeamType>['columns'] = [
  {
    title: 'Team Name',
    dataIndex: 'teamName',
    key: 'teamName',
  }, {
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
  }
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
            title: 'Users',
          }
        ]}
      />
      <Divider />
      <Table columns={columns} dataSource={data} />;
    </Layout>
  )
}

export default Teams;