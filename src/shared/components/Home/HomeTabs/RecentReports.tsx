import { List } from 'antd';
import VirtualList from 'rc-virtual-list';

const datas = [
    {
        id: 2991,
        name: 'Responsive Web Desing'
    },
    {
        id: 2882,
        name: 'Scroll Feature Added'
    },
    {
        id: 282823,
        name: 'Send Email Feature Added'
    },
    {
        id: 294,
        name: 'Navbar Problem Solved'
    },
    {
        id: 275,
        name: 'Footer Added'
    },
    {
        id: 286,
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
                itemKey="reports"
            >
                {(item: RecentData) => (
                    <List.Item key={item.id}>
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