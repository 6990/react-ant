import React from 'react';
import { Tabs } from 'antd';
import TableDemo from '../tableDemo';
import ChartDemo from '../charts';
import AlertDemo from '../alert';
import Monitor from '../monitor';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'TableDemo',
    children: <TableDemo/>,
  },
  {
    key: '2',
    label: 'ChartDemo',
    children: <ChartDemo/>,
  },
  {
    key: '3',
    label: 'Monitor',
    children: <Monitor/>,
  },
];
const Home = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default Home;