import { List } from 'antd';
import VirtualList from 'rc-virtual-list';

const datas = [
    {
        id: 123,
        name: 'Responsive Web Desing'
    },
    {
        id: 1234,
        name: 'Scroll Feature Added'
    },
    {
        id: 12345,
        name: 'Send Email Feature Added'
    },
    {
        id: 123456,
        name: 'Navbar Problem Solved'
    },
    {
        id: 1234567,
        name: 'Footer Added'
    },
    {
        id: 12345678,
        name: 'Languages Feature Added'
    }
];

interface RecentData {
    id: number,
    name: string
};

const ContainerHeight = 110;

const RecentReports = () => {

    return (
        <List key='Reports_List'>
            <VirtualList
                data={datas}
                height={ContainerHeight}
                itemHeight={47}
                itemKey={(item: RecentData) => String(item.id)}
            >
                {(item: RecentData, index) => (
                    <List.Item key={index}>
                        <List.Item.Meta
                            title={item.name}
                        />
                    </List.Item>
                )}
            </VirtualList>
        </List>
    )
}

export default RecentReports