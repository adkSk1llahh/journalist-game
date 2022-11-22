import React, {useEffect, useState} from 'react';
import {Menu, Row, Col, Image, Typography} from "antd";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const MyMenu = () => {
  const location = useLocation();
  const [current, setCurrent] = useState('main');

  useEffect(() => {
    setCurrent(location.pathname)
  }, [location])

  const items = [
    {label: <Link to='/'>Главная</Link>, key: '/'},
    {label: <Link to='/catalog'>Кейсы</Link>, key: '/catalog'},
  ];

  return (
    <Row>
      <Col>
        <Menu theme="light" selectedKeys={[current]} mode="horizontal" defaultSelectedKeys={['2']} items={items}/>
      </Col>
    </Row>
  );
};

export default MyMenu;
