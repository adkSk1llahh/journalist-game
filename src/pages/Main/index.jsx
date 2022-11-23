import React from 'react';
import MyLayout from "../../layout";
import {Button, Row, Col, Typography} from "antd";

const MainPage = () => {
  let style = {
    background: 'linear-gradient(90deg, rgb(0 9 255 / 76%) 0%, rgb(137 0 255) 100%)',
    padding: 24,
    borderRadius: 24
  }
  return (
    <MyLayout>
      <Row align='middle' justify='center' style={{height: '100%'}}>
        <Col span={18} style={style}>
          <Typography.Text style={{fontSize: 20, color: '#fff'}}>
            Казахстанские журналисты очень часто сталкиваются с ситуациями, выход из которых необходимо искать в
            правовом поле. Цель тренажера – оказать содействие и пресс-секретарям, и журналистам и тем кто, считает себя
            активным игроком медиапрострнаства. Это платформа называется «Коммуникативный онлайн-тренажер «4J». Мы очень
            надеемся, что за считанные минуты мы сможем вместе повысить правовую медиаосведомленность. Коммуникативный
            тренажер «предназначен для повышения правовой грамотности. Он будет полезен и студентам, и практикующим
            журналистам, и опытным пресс-секретарям. Пройти задания можно и в телеграмм-боте
          </Typography.Text>
        </Col>
      </Row>
    </MyLayout>
  );
};

export default MainPage;
