import { Fragment, useState } from "react";
import { Redirect, Route } from "react-router";

import { Layout, Menu, Breadcrumb } from 'antd';
import {
    FileOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { NavLink } from "react-router-dom";
import _ from "lodash";
import HeaderAmin from "../../components/HeaderAmin";
import { useEffect } from "react";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const AdminTemplate = (props) => { //path, exact, Component
    const { Component, ...restProps } = props;
    let userInfo = '';
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        document.title = 'Admin - Cenima App';
    })
    if (localStorage.getItem('USER_LOGIN')) {
        userInfo = JSON.parse(localStorage.getItem('USER_LOGIN'))
    }

    const onCollapse = collapsed => {
        // console.log(collapsed);
        setCollapsed(collapsed);
    };

    if (userInfo.maLoaiNguoiDung !== 'QuanTri') {
        alert('Bạn không có quyền truy cập vào trang này !')
        return <Redirect to='/home' />

    }

    const operations = <Fragment>
        {userInfo === "" || userInfo.taiKhoan === "" ?
            <div>
                <NavLink to='/register' className={`main-text-color px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900`}>Đăng ký</NavLink>
                <NavLink to='/login' className={`main-text-color px-8 py-3 rounded`}>Đăng nhập</NavLink>
            </div>
            :
            <div>
                {HeaderAmin(userInfo)}
            </div>

        }
    </Fragment>


    return <Route {...restProps} render={(propRoute) => { //props.location,props.history,props.match

        return <Fragment>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo p-5">
                        <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="..." />
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        {/* User */}
                        <SubMenu key='sub1' icon={<UserOutlined />} title='Users'>
                            <Menu.Item key="1" >
                                <NavLink to="/admin/users">Users</NavLink>
                            </Menu.Item>
                            <Menu.Item key="2" >
                                <NavLink to="/admin/users/adduser">Add users</NavLink>
                            </Menu.Item>
                        </SubMenu>
                        {/* Movies */}
                        <SubMenu key="sub2" icon={<FileOutlined />} title="Movies">
                            <Menu.Item key="3" icon={<FileOutlined />}>
                                <NavLink to="/admin/movies">Movies</NavLink>
                            </Menu.Item>
                            <Menu.Item key="4" icon={<FileOutlined />}>
                                <NavLink to="/admin/movies/addnew">Add new</NavLink>
                            </Menu.Item>
                        </SubMenu>

                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} >
                        <div className="text-right">{operations}</div>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: '85vh' }}>
                            <Component {...propRoute} />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Hello from Nguyen Van Huy</Footer>
                </Layout>
            </Layout>
        </Fragment>
    }} />

}
