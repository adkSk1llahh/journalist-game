import React, {useEffect, useState} from 'react';
import MyLayout from "../../layout";
import {catalogData} from '../../static/data'
import {senderData} from '../../static/data'
import {useParams} from "react-router";
import {Spin, Row, Col, Typography, Image, Card, Alert} from 'antd'
import cn from "classnames";

const ItemPage = () => {
  const params = useParams()

  const [currentItem, setCurrentItem] = useState()
  const [imageLoaded, setImageLoaded] = useState(false);

  const [role, setRole] = useState()
  const [data, setData] = useState([])

  useEffect(() => {
    if (params.id) {
      let data = catalogData.find(item => item.key === params.id)
      setCurrentItem(data)
    }
  }, [params.id])

  const handleRole = (item) => {
    setRole(item)
    setData(item.children)
  }


  console.log('role', role)

  return (
    <MyLayout>
      {
        currentItem &&
        <Row gutter={24} style={{height: '100%'}}>
          <Col span={12}>
            <Row>
              <Col span={24}>
                <Typography.Title level={2}>Название кейса: {currentItem.title}</Typography.Title>
              </Col>

              <Col span={24}>
                <Image src={currentItem.img} preview={false}/>
              </Col>

              <Col span={24}>
                <Typography.Text> Описание: {currentItem.description}</Typography.Text>
              </Col>
            </Row>
          </Col>

          <Col span={12}>
            <Row>
              <Col span={24}>
                {!role &&
                <Typography.Title level={3}>Выберите роль</Typography.Title>
                }
              </Col>

              {
                !role ?
                  <Col span={24}>
                    <Row gutter={12}>
                      {currentItem.role.map(item => (
                        <Col key={item.id}>
                          <Card
                            onClick={() => handleRole(item)}
                            hoverable
                            style={{
                              width: 240,
                            }}
                            cover={<Image alt={item.key} src={item.img} height={150} preview={false}
                                          onLoad={() => setImageLoaded(true)} className={cn('smooth-image', {
                              'image-visible': imageLoaded,
                              'image-hidden': !imageLoaded,
                            })}/>}
                          >
                            <Card.Meta title={item.title} description={item.description}/>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                  :
                  <Col span={24}>
                    <Row>
                      {data.map(item => (
                        <Col span={24} key={item.id} style={{marginBottom: 12}}>
                          <Alert message={item.text} type="success" />
                        </Col>
                      ))}
                    </Row>
                  </Col>
              }


            </Row>
          </Col>
        </Row>
      }
    </MyLayout>
  );
};

export default ItemPage;
