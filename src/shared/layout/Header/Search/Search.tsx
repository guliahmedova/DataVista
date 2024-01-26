import { SearchOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import styles from './search.module.scss';

const Search = () => {
    return (
        <Form className={styles.search_form}>
            <Form.Item name='search' className={styles.search_item}>
                <Input type='search' size='large' className={styles.search_input} placeholder='Search Property, Customer etc' />
            </Form.Item>
            <Button className={styles.search_btn} size='large'>
                <SearchOutlined className={styles.search_icon} />
            </Button>
        </Form>
    )
}

export default Search;