import React from 'react';
import { Footer } from 'antd/es/layout/layout';
import {
GithubOutlined,
InstagramOutlined,
LinkedinOutlined
} from '@ant-design/icons';


const Footers = () => {
    return (
        <Footer>
           <Row>
      <Col span={12} className="creator"> 
      <b>Build proudly by Fauz Aqiilah | @2023</b>
      </Col>


      <Col span={12}>
      <div className='sosmed'>
        <span>
        {<a href="https://www.instagram.com/fauzaqilah/" className='ig' target="_blank"><InstagramOutlined /> </a>}
        </span>
        <span >
        {<a href="https://www.linkedin.com/in/fauzaqiilah/" className='twt' target="_blank"><LinkedinOutlined /></a>}
          </span>
        <span>
        {<a href="https://github.com/fauzaqiilah/react_fauz-aqiilah" className='ig' target="_blank"><GithubOutlined /></a>}
          </span>
      </div>
      </Col>
    </Row>

        </Footer>
    );
}

export default Footers;
 