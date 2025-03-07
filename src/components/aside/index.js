import React from "react";
import * as Icon from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import MenuConfig from '../../config'
import './index.css'
import { useNavigate } from "react-router-dom";


const { Sider } = Layout;
const iconToElement = (name) => React.createElement(Icon[name])
const items = MenuConfig.map((icon) => {
    const child = {
        key: icon.path,
        icon: iconToElement(icon.icon),
        label: icon.label
    }
    if (icon.children) {
        child.children = icon.children.map((item) => {
            return {
                key: item.path,
                icon: iconToElement(item.icon),
                label: item.label
            }
        })
    }
    return child
})
const Aside = ({ collapsed }) => {
    const navigate = useNavigate();
    const selectMenu = (e) => {
        navigate(e.key)
    }
    return (
        <Sider className="layout-sider" trigger={null} collapsible collapsed = {collapsed} >
            {collapsed ? <h3>Demo</h3> : <h3>React Ant Demo</h3>} 
            <Menu 
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={items}
                onClick={selectMenu}
                style={{
                    minHeight: '95vh'
                }}
            />
        </Sider>
    )
}

export default Aside