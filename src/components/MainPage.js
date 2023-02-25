import React from 'react';
// import './index.css';
import { Breadcrumb, Layout, Menu, theme, Avatar, Typography } from 'antd';
import Home from './Home';
import Search from './Search';
import icon from '../images/crypto1.png';
const { Header, Content, Footer } = Layout;
const MainPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { Text } = Typography;
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
        }}
      >

        <Avatar src={icon} size="large" />
        <Text style={{ color: "white" }}>  CryptoSphere </Text>

      </Header>
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
        }}
      >

        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
          }}
        >
          <Home />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Created and Design by <a href='https://itsamanulla.github.io/' target='_blank'>Amanullah Shaikh</a>
      </Footer>
    </Layout>
  );
};
export default MainPage;