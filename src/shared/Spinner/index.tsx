import { Layout, Spin } from "antd"

const Spinner = () => {
    return (
        <Layout>
            <Spin tip="Loading" size="large">
                <div className="content" />
            </Spin>
        </Layout>
    )
}

export default Spinner