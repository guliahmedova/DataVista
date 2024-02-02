import { Spin } from "antd";
import { Content } from "antd/es/layout/layout";

const Spinner = () => {
    return (
        <Content style={{
            height: '100%', backgroundColor: 'whitesmoke',
            width: '100%', display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center'
        }}>
            <Spin tip="Loading" size="large">
                <div className="content" />
            </Spin>
        </Content>
    )
}

export default Spinner