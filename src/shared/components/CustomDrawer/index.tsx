import { ICustomDrawerType } from '@/shared/models';
import { Button, Drawer, Tooltip } from 'antd';
import { useState } from 'react';
import styles from './CustomDrawer.module.scss';

const CustomDrawer: React.FC<ICustomDrawerType> = ({ classname, icon, title, actionStatus }) => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => { setOpen(true) };
    const onClose = () => { setOpen(false) };

    return (
        <>
            <Tooltip title={title} placement="top">
                <Button className={styles[classname]} onClick={showDrawer} icon={icon} size="large" />
            </Tooltip>
            <Drawer title={title} onClose={onClose} open={open}>
                {actionStatus}
            </Drawer>
        </>
    )
}

export default CustomDrawer;