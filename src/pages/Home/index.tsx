import { FundProjectionScreenOutlined, SnippetsOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Col, Divider, Layout, Row, Statistic, Typography } from "antd";
import CountUp from 'react-countup';
import { HomeTabs, WeatherForecast, Welcome } from "shared/index";
import styles from './Home.module.scss';

const formatter = (value: number | string) => <CountUp end={typeof value === 'number' ? value : parseFloat(value)} separator="," />;

const Home = () => {
  return (
    <Layout className={styles.home_layout}>
      <Row gutter={16}>
        <Col span={6}>
          <Card bordered={false}>
            <UserOutlined className={styles.icon_size} />
            <Statistic title="Active Users" value={112893} className={`${styles.statistic_text} ${styles.statistic_purple}`} formatter={formatter} />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <FundProjectionScreenOutlined className={styles.icon_size} />
            <Statistic title="Projects" value={11893} className={`${styles.statistic_text} ${styles.statistic_green}`} formatter={formatter} />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <SnippetsOutlined className={styles.icon_size} />
            <Statistic title="Reports" value={887} className={`${styles.statistic_text} ${styles.statistic_blue}`} formatter={formatter} />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <TeamOutlined className={styles.icon_size} />
            <Statistic title="Teams" value={9583} className={`${styles.statistic_text} ${styles.statistic_orange}`} formatter={formatter} />
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
        <Col span={6}>
          <WeatherForecast />
        </Col>
        <Col span={6}>
          <Welcome />
        </Col>
      </Row>

    </Layout>
  )
}

export default Home   