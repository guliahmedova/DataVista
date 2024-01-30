import { Button, Drawer, Tooltip } from 'antd';
import { FC, useState } from 'react';
import { CustomDrawerType } from 'src/shared/types/CustomDrawerType';
import styles from './CustomDrawer.module.scss';

const CustomDrawer: FC<CustomDrawerType> = ({ actionKey, classname, icon, title, formFields }) => {
    const [open, setOpen] = useState(false);

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
                {formFields && actionKey ? formFields(actionKey) : ''}
            </Drawer>
        </>
    )
}

export default CustomDrawer;