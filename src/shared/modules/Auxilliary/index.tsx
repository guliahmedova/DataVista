import { ILayoutType } from '@/shared/models';
import { Layout } from 'antd';
import styles from "./Auxilliary.module.scss";

const Auxilliary: React.FC<ILayoutType> = ({ children }) => {
    return <Layout className={styles.auxilliary}>{children}</Layout>
};

export default Auxilliary;