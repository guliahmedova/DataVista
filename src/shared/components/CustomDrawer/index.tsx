import { Button, Drawer, Tooltip } from 'antd';
import { useState } from 'react';
import { CustomDrawerType } from 'types/CustomDrawerType';
import styles from './CustomDrawer.module.scss';

const CustomDrawer: React.FC<CustomDrawerType> = ({ actionKey, classname, icon, title, actionStatus }) => {
    const [open, setOpen] = useState(false);
    console.log(actionKey);
    

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

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