import { Layout } from 'antd';
import { FC } from 'react';
import { LayoutType } from 'src/shared/types/LayoutType';
import styles from "./Auxilliary.module.scss";

const Auxilliary: FC<LayoutType> = ({ children }) => {
    return (
        <Layout className={styles.auxilliary}>{children}</Layout>
    )
};

export default Auxilliary;