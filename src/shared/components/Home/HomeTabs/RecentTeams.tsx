import { List } from 'antd';
import VirtualList from 'rc-virtual-list';

const datas = [
    {
        id: 19,
        name: 'Frotend'
    },
    {
        id: 62,
        name: 'Backend'
    },
    {
        id: 93,
        name: 'Mobile/Android'
    },
    {
        id: 74,
        name: 'Mobile/IOS'
    },
    {
        id: 5995,
        name: 'Design'
    },
    {
        id: 836,
        name: 'Full-stack'
    }
];


interface RecentData {
    id: number,
    name: string
};

const ContainerHeight = 110;

const RecentTeams = () => {

    return (
        <List key='Teams_List'>
            <VirtualList
                data={datas}
                height={ContainerHeight}
                itemHeight={47}
                itemKey="teams"
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

export default RecentTeams