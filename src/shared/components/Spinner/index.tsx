import { Spin } from "antd";
import { Content } from "antd/es/layout/layout";
import styles from "./Spinner.module.scss";

const Spinner = () => {
    return (
        <Content className={styles.spinner_container}>
            <Spin size="large" fullscreen={true}>
                <div className="content" />
            </Spin>
        </Content>
    )
}

export default Spinner