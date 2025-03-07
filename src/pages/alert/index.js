import React from 'react';
import { Alert } from 'antd';
import Marquee from 'react-fast-marquee';
const AlertDemo = () => (
  <Alert
    banner
    message={
      <Marquee pauseOnHover gradient={false}>
        <a href='https://ant.design/components/table-cn#table-demo-ajax'>React - Ant Design Demo -----------  Created by Skyler Li - 2025/12</a>     
      </Marquee>
    }
  />
);
export default AlertDemo;