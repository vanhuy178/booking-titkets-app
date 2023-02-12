import { Tabs } from 'antd';

export default function TabsComponent() {

    return (
        <>

            <Tabs
                tabPosition={'left'}
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                        label: `Tab ${id}`,
                        key: id,
                        children: `Content of Tab ${id}`,
                    };
                })}
            />
        </>
    );
}
