import { Content } from 'antd/es/layout/layout';
import { FC } from 'react';
import { LayoutType } from 'src/shared/types/LayoutType';
import styles from "./Cover.module.scss";

const Cover: FC<LayoutType> = ({ children }) => {
    return (
        <Content className={styles.Cover}>{children}</Content>
    )
};

export default Cover;