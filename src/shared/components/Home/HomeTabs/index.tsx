import { Tabs } from 'antd';
import { RecentReports, RecentTeams, RecentProjects } from 'shared/index';

const HomeTabs = () => {
  return (
    <Tabs
      key='RecentDataTabs'
      defaultActiveKey="1"
      centered
      items={[
        {
          key: 'recentReports',
          label: 'Repots',
          children: <RecentReports />
        },
        {
          key: 'recentTeams',
          label: 'Teams',
          children: <RecentTeams />
        },
        {
          key: 'recentProjects',
          label: 'Projects',
          children: <RecentProjects />
        },
      ]}
    />
  )
}

export default HomeTabs