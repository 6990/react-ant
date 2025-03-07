import React, { useState } from 'react';
import { Button, Layout, Menu, theme } from 'antd';
import Aside from '../components/aside';
import CommonHeader from '../components/commonHeader';
import { useSelector } from "react-redux";
import { Outlet } from 'react-router-dom';
import AlertDemo from './alert';

const { Content } = Layout;
const Main = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const collapsed = useSelector(state => state.tab.isCollapse)
    return (
        <Layout className="main-container" >
            <Aside collapsed={collapsed} style={{minHeight: '5vh'}}/>
            <Layout style={{minHeight: '95vh'}}>
                <CommonHeader collapsed={collapsed} />
                <Content style={{ margin: '24px 16px',background: colorBgContainer,borderRadius: borderRadiusLG,}}>                   
                    <AlertDemo/>
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
}

export default Main