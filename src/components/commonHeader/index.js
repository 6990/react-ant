import React from "react";
import { Button, Layout, Avatar, Dropdown, Alert} from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined
} from '@ant-design/icons';
import './index.css'
import { useDispatch, useSelector } from "react-redux";
import { collapseMenu } from '../../store/reducers/tab'


const CommonHeader = ({ collapsed }) => {
    const {show, message, description, type} = useSelector(state => state.notifacation).notifacation
    console.log(message, description, type)
    const { Header } = Layout;
    const items = [
        {
            key: '1',
            label: (<a onClick={() => alert('Exit')} target="_blank">Exit</a>)
        },
        {
            key: '2',
            label: (<a onClick={() => alert('Exit222')} target="_blank">Exit Exit</a>)
        }
    ]

    const dispatch = useDispatch()
    const setCollapsed = () => {
        dispatch(collapseMenu())
    }
    return (
        <Header className="header-container">
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={setCollapsed}
                style={{
                    fontSize: '16px',
                    backgroundColor: '#fff'
                }}
            />
            {show && <Alert className="header-notifacation"
                message = {message}
                description = {description}
                type = {type}
                showIcon
                closable
            />} 
            <Dropdown menu={{ items }} placement="bottomRight">
                {/* <Avatar icon=<UserOutlined />src={<img src={require('../../assets/images/user.png')} />} /> */}
                <Avatar icon={<UserOutlined />} size={"large"}/>
            </Dropdown>
        </Header>
    )
}

export default CommonHeader