import React from 'react';
import { Layout } from 'antd';
import MyMenu from "../components/MyMenu";
const { Header, Footer, Content } = Layout;

const MyLayout = ({children}) => {
  return (
    <Layout style={{height: '100vh'}} theme='light'>
      <Header style={{background: '#fff', borderBottom:' 1px solid rgba(5, 5, 5, 0.06)', boxShadow: '0px 3px 10px 0px rgba(34, 60, 80, 0.2)'}}>
        <MyMenu />
      </Header>
      <Content style={{overflowY: 'scroll'}}>
        <div style={{padding: 24, width: '100%', height: '100%'}}>
          {children}
        </div>
      </Content>
    </Layout>
  );
};

export default MyLayout;
