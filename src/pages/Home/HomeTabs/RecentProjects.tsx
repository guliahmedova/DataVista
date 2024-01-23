import { List } from 'antd';
import VirtualList from 'rc-virtual-list';

const datas = [
    {
        id: 11,
        name: 'Plast'
    },
    {
        id: 219,
        name: 'Furniro'
    },
    {
        id: 31,
        name: 'Dist'
    },
    {
        id: 41,
        name: 'DataVista'
    },
    {
        id: 51,
        name: 'WeatherForecast'
    },
    {
        id: 61,
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

export default RecentProjects