import { Content } from 'antd/es/layout/layout';
import { LayoutType } from 'types/LayoutType';
import styles from "./Cover.module.scss";

const Cover: React.FC<LayoutType> = ({ children }) => {
    return (
        <Content className={styles.Cover}>{children}</Content>
    )
};

export default Cover;