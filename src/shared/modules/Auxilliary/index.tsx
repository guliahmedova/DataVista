import { Layout } from 'antd';
import { LayoutType } from 'types/LayoutType';
import styles from "./Auxilliary.module.scss";

const Auxilliary: React.FC<LayoutType> = ({ children }) => {
    return (
        <Layout className={styles.auxilliary}>{children}</Layout>
    )
};

export default Auxilliary;