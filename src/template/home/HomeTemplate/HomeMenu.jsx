


import { Tabs, Select } from 'antd';
import React from 'react';
import { fetchMovies } from '../../../redux/actions/ManagingMovies';

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