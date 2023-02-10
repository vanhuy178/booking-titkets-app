// import { Radio, Space, Tabs } from 'antd';
// import { useState } from 'react';

// export default function HomeMenu() {
//     const [tabPosition, setTabPosition] = useState('left');
//     const changeTabPosition = (e) => {
//         setTabPosition(e.target.value);
//     };
//     return (
//         <>
//             <Space
//                 style={{
//                     marginBottom: 24,
//                 }}
//             >
//                 Tab position:
//                 <Radio.Group value={tabPosition} onChange={changeTabPosition}>
//                     <Radio.Button value="top">top</Radio.Button>
//                     <Radio.Button value="bottom">bottom</Radio.Button>
//                     <Radio.Button value="left">left</Radio.Button>
//                     <Radio.Button value="right">right</Radio.Button>
//                 </Radio.Group>
//             </Space>
//             <Tabs
//                 tabPosition={tabPosition}
//                 items={new Array(3).fill(null).map((_, i) => {
//                     const id = String(i + 1);
//                     return {
//                         label: `Tab ${id}`,
//                         key: id,
//                         children: `Content of Tab ${id}`,
//                     };
//                 })}
//             />
//         </>
//     );
// }


import { Tabs, Select } from 'antd';
import React from 'react';

const { TabPane } = Tabs;
const { Option } = Select;

class HomeMenu extends React.Component {
    state = {
        tabPosition: 'left',
    };

    changeTabPosition = tabPosition => {
        this.setState({ tabPosition });
    };

    render() {
        return (
            <div className='container'>
                <Tabs tabPosition={this.state.tabPosition}>
                    <TabPane tab={<img src="https://picsum.photos/200" alt="" className='rounded-full' width='50' />} key="1">
                        <h1>hello key-1 </h1>
                    </TabPane>
                    <TabPane tab={<img src="https://picsum.photos/200" alt="" className='rounded-full' width='50' />} key="2">

                        <img src="https://picsum.photos/201" alt="" />
                    </TabPane>

                    <TabPane tab={<img src="https://picsum.photos/200" alt="" className='rounded-full' width='50' />} key="3">
                        <img src="https://picsum.photos/202" alt="" />
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default HomeMenu;