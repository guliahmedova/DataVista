import { ILayoutType } from '@/shared/models';
import { Content } from 'antd/es/layout/layout';
import styles from "./Cover.module.scss";

const Cover: React.FC<ILayoutType> = ({ children }) => {
    return <Content className={styles.Cover}>{children}</Content>
};

export default Cover;