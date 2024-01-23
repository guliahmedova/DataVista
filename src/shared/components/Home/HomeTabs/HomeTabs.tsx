import { Tabs } from 'antd';
import { RecentReports, RecentTeams, RecentProjects } from 'pages/index';

const HomeTabs = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      centered
      items={[
        {
          key: '195848',
          label: 'Repots',
          children: <RecentReports />
        },
        {
          key: '20183',
          label: 'Teams',
          children: <RecentTeams />
        },
        {
          key: '93938483',
          label: 'Projects',
          children: <RecentProjects />
        },
      ]}
    />
  )
}

export default HomeTabs