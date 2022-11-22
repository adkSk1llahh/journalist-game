import React, {useState} from 'react';
import MyLayout from "../../layout";
import cn from 'classnames'
import {Row, Col, Card, Image} from "antd";
import {catalogData} from '../../static/data'
import {Link} from "react-router-dom";

const CatalogPage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <MyLayout>
      <Row>
        {catalogData.map(item => (
          <Col key={item.key}>
            <Link to={`/catalog/${item.key}`}>
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={<Image alt={item.key} src={item.img} height={150} preview={false} onLoad={() => setImageLoaded(true)} className={cn('smooth-image', {
                  'image-visible': imageLoaded,
                  'image-hidden': !imageLoaded,
                })}/>}
              >
                <Card.Meta title={item.title} description={item.description} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </MyLayout>
  );
};

export default CatalogPage;
