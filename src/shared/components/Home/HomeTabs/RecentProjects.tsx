import { List } from 'antd';
import VirtualList from 'rc-virtual-list';

const datas = [
    {
        id: 98,
        name: 'Plast'
    },
    {
        id: 97,
        name: 'Furniro'
    },
    {
        id: 96,
        name: 'Dist'
    },
    {
        id: 91,
        name: 'DataVista'
    },
    {
        id: 94,
        name: 'WeatherForecast'
    },
    {
        id: 39,
        name: 'Todo-List'
    }
];

interface RecentData {
    id: number,
    name: string
};

const ContainerHeight = 110;

const RecentProjects = () => {
    return (
        <List key='Projects_List'>
            <VirtualList
                data={datas}
                height={ContainerHeight}
                itemHeight={47}
                itemKey="projects"
                key='VirtualListProjects'
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

export default RecentProjects