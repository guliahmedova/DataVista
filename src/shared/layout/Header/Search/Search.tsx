import { SearchOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

const Search = () => {
    return (
        <Form className='search-form'>
            <Form.Item name='search' style={{
                margin: '0',
            }} className='search-item'>
                <Input type='search' size='large' className='search-input' placeholder='Search Property, Customer etc' />
            </Form.Item>
            <Button className='search-btn' size='large'>
                <SearchOutlined className='search-icon' />
            </Button>
        </Form>
    )
}

export default Search