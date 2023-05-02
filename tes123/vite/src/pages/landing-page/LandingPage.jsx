import React from "react";
import { Layout, Menu, theme, Button } from "antd";
import { Col, Row } from "antd";
import logo from "../../assets/logo-bem.jpeg";
import "../landingpage/landingPage.css";
import {
  LinkedinOutlined,
  GithubOutlined,
  InstagramOutlined
} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const LandingPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu className="navbar"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={new Array(0).fill(null).map((_, index) => {
              const key = index + 1;
              return {
                key,
                label: `nav ${key}`,
              };
            })}
          />
        </Header>

        <Content>
          <div
            className="site-layout-content"
            style={{
              background: colorBgContainer,
            }}
          >
            <Row>
              <Col span={12}>
                <br />
                <div
                  className="teks1"
                  style={{
                    padding: "100px 0px 0px 100px",
                  }}
                >
                  <h2>SELAMAT DATANG DI RUANG SUARA</h2>
                </div>

                <div
                  className="teks2"
                  style={{
                    padding: "40px 0px 0px 100px",
                  }}
                >
                  <h1>FIBER OPTIK!</h1>
                </div>

                <div
                  className="teks3"
                  style={{
                    padding: "40px 0px 20px 100px",
                  }}
                >
                  <p>
                    Sobat FIKTI mempunyai keluhan / keresahan terkait fakultas
                    FIKTI
                    <br />
                    ataupun kampus? No more worry! Karena sekarang ada ruang
                    suara
                    <br />
                    FIBER OPTIK lho!
                  </p>
                </div>
              </Col>

              <Col className="kolomlogo">
                <img className="logobem" src={logo} alt="logo-bem"></img>
              </Col>
            </Row>
            <div className="section-2">
              <p>
                Mari suarakan aspirasi, kritik, pendapat serta keresahanmu,
                untuk
                <br />
                mendukung kemajuan FIKTI UG yang lebih baik lagi.
              </p>
              <Button 
              type="primary" 
              htmlType="submit"
              className="button1"
              >
                Klik disini
              </Button>
            </div>
          </div>
        </Content>

        <Footer className="footer">
        <Row>
      <Col span={12} className="creator">
        <b>Build proudly by Fauz Aqiilah | @2023</b>
      </Col>

      <Col span={12}>
      <div id='sosmed'>
        <span>
        {<a href="https://github.com/fauzaqiilah/react_fauz-aqiilah" className='github' target="_blank"><GithubOutlined /></a>}
        </span>
        <span>
        {<a href="https://www.linkedin.com/in/fauzaqiilah/" className='ld' target="_blank"><LinkedinOutlined /> </a>}
        </span>
        <span>
        {<a href="https://www.instagram.com/fauzaqilah/" className='ig' target="_blank"><InstagramOutlined /> </a>}
        </span>
      </div>
      </Col>
    </Row>
        </Footer>
      </Layout>
    </>
  );
};

export default LandingPage;
