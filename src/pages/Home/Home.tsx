import { FundProjectionScreenOutlined, SnippetsOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Col, Divider, Layout, Row, Statistic, Typography } from "antd";
import CountUp from 'react-countup';
import HomeTabs from "./HomeTabs/HomeTabs";
import WeatherForecast from "./WeatherForecast/WeatherForecast";

const formatter = (value: number | string) => <CountUp end={typeof value === 'number' ? value : parseFloat(value)} separator="," />;

const Home = () => {

  return (
    <Layout>
      <Typography.Title level={3}>
        Home
      </Typography.Title>
      <Divider />
      <Row gutter={16}>
        <Col span={6}>
          <Card bordered={false}>
            <UserOutlined style={{ fontSize: '2rem' }} />
            <Statistic title="Active Users" value={112893} valueStyle={{ color: '#FF6633', fontWeight: '600' }} formatter={formatter} />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <FundProjectionScreenOutlined style={{ fontSize: '2rem' }} />
            <Statistic title="Projects" value={11893} valueStyle={{ color: '#3361FF', fontWeight: '600' }} formatter={formatter} />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <SnippetsOutlined style={{ fontSize: '2rem' }} />
            <Statistic title="Reports" value={887} valueStyle={{ color: '#29CC39', fontWeight: '600' }} formatter={formatter} />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <TeamOutlined style={{ fontSize: '2rem' }} />
            <Statistic title="Teams" value={9583} valueStyle={{ color: '#8833FF', fontWeight: '600' }} formatter={formatter} />
          </Card>
        </Col>
      </Row>
      <Divider />

      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Typography.Title level={5}> Recent</Typography.Title>
            <HomeTabs />
          </Card>
        </Col>
        <Col span={12}>
            <WeatherForecast />
        </Col>
      </Row>

    </Layout>
  )
}

export default Home   