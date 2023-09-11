import React from 'react';
import { Button } from 'antd';
import { Col, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import { FireOutlined } from '@ant-design/icons'

function First() {


  return (
    <div className="App">
      <div className='layout' style={{ alignItems: "center", justifyContent: "space-between", margin: '50px', marginBottom: '0' }}>

        <a href="/">Go to Previous Page</a>
        <a href="/second">Go to Next Page</a>

      </div>
      <div>
        <Row>
          <Col span={4} className='layout button1'>
            <div className='btn-layout'>
              <Button className='btn1' type="primary"><FireOutlined />button/02<FireOutlined /></Button>
              <Button className='btn2' type="primary"><FireOutlined />button/02<FireOutlined /></Button>
              <Button className='btn3' type="primary"><FireOutlined />button/02<FireOutlined /></Button>
              <Button className='btn4' type="primary"><FireOutlined />button/02<FireOutlined /></Button>
              <Button className='btn5' type="primary"><FireOutlined />button/02<FireOutlined /></Button>
              <Button className='btn6' type="primary"><FireOutlined />button/02<FireOutlined /></Button>
            </div>
          </Col>
          <Col span={2} className='btn-layout icon-button1'>
            <Button className='btn1' type="primary"><PlusOutlined /></Button>
            <Button className='btn2' type="primary"><PlusOutlined /></Button>
            <Button className='btn3' type="primary"><PlusOutlined /></Button>
            <Button className='btn4' type="primary"><PlusOutlined /></Button>
            <Button className='btn5' type="primary"><PlusOutlined /></Button>
            <Button className='btn6' type="primary"><PlusOutlined /></Button>
            <Button className='btn7' type="primary"><PlusOutlined /></Button>
            <Button className='btn8' type="primary"><PlusOutlined /></Button>
            <Button className='btn9' type="primary"><PlusOutlined /></Button>
            <Button className='btn10' type="primary"><PlusOutlined /></Button>
            <Button className='btn11' type="primary"><PlusOutlined /></Button>
          </Col>
          <Col span={4} className='layout button2'>
            <div className='btn-layout'>
              <Button className='btn1' type="primary"><FireOutlined />button/02<FireOutlined /></Button>
              <Button className='btn2' type="primary"><FireOutlined />button/02<FireOutlined /></Button>
              <Button className='btn3' type="primary"><FireOutlined />button/02<FireOutlined /></Button>
              <Button className='btn4' type="primary"><FireOutlined />button/02<FireOutlined /></Button>
              <Button className='btn5' type="primary"><FireOutlined />button/02<FireOutlined /></Button>
              <Button className='btn6' type="primary"><FireOutlined />button/02<FireOutlined /></Button>
            </div>
          </Col>
          <Col span={2} className='btn-layout icon-button2'>
            <Button className='btn1' type="primary"><PlusOutlined /></Button>
            <Button className='btn2' type="primary"><PlusOutlined /></Button>
            <Button className='btn3' type="primary"><PlusOutlined /></Button>
            <Button className='btn4' type="primary"><PlusOutlined /></Button>
            <Button className='btn5' type="primary"><PlusOutlined /></Button>
            <Button className='btn6' type="primary"><PlusOutlined /></Button>
            <Button className='btn7' type="primary"><PlusOutlined /></Button>
            <Button className='btn8' type="primary"><PlusOutlined /></Button>
            <Button className='btn9' type="primary"><PlusOutlined /></Button>
            <Button className='btn10' type="primary"><PlusOutlined /></Button>
            <Button className='btn11' type="primary"><PlusOutlined /></Button>
          </Col>
          <Col span={4} className='layout button3'>
            <div className='btn-layout'>
              <Button className='btn1' type="primary"><FireOutlined />button/02<FireOutlined /></Button>
              <Button className='btn2' type="primary"><FireOutlined />button/02<FireOutlined /></Button>
              <Button className='btn3' type="primary"><FireOutlined />button/02<FireOutlined /></Button>
              <Button className='btn4' type="primary"><FireOutlined />button/02<FireOutlined /></Button>
              <Button className='btn5' type="primary"><FireOutlined />button/02<FireOutlined /></Button>
              <Button className='btn6' type="primary"><FireOutlined />button/02<FireOutlined /></Button>
            </div>
          </Col>
          <Col span={2} className='btn-layout icon-button3'>
            <Button className='btn1' type="primary"><PlusOutlined /></Button>
            <Button className='btn2' type="primary"><PlusOutlined /></Button>
            <Button className='btn3' type="primary"><PlusOutlined /></Button>
            <Button className='btn4' type="primary"><PlusOutlined /></Button>
            <Button className='btn5' type="primary"><PlusOutlined /></Button>
            <Button className='btn6' type="primary"><PlusOutlined /></Button>
            <Button className='btn7' type="primary"><PlusOutlined /></Button>
            <Button className='btn8' type="primary"><PlusOutlined /></Button>
            <Button className='btn9' type="primary"><PlusOutlined /></Button>
            <Button className='btn10' type="primary"><PlusOutlined /></Button>
            <Button className='btn11' type="primary"><PlusOutlined /></Button>
          </Col>
          <Col span={4} className='layout button4'>
            <div className='btn-layout'>
              <Button className='btn1' type="primary"><FireOutlined />button/02<FireOutlined /></Button>
              <Button className='btn2' type="primary"><FireOutlined />button/02<FireOutlined /></Button>
              <Button className='btn3' type="primary"><FireOutlined />button/02<FireOutlined /></Button>
              <Button className='btn4' type="primary"><FireOutlined />button/02<FireOutlined /></Button>
              <Button className='btn5' type="primary"><FireOutlined />button/02<FireOutlined /></Button>
              <Button className='btn6' type="primary"><FireOutlined />button/02<FireOutlined /></Button>
            </div>
          </Col>
          <Col span={2} className='btn-layout icon-button4'>
            <Button className='btn1' type="primary"><PlusOutlined /></Button>
            <Button className='btn2' type="primary"><PlusOutlined /></Button>
            <Button className='btn3' type="primary"><PlusOutlined /></Button>
            <Button className='btn4' type="primary"><PlusOutlined /></Button>
            <Button className='btn5' type="primary"><PlusOutlined /></Button>
            <Button className='btn6' type="primary"><PlusOutlined /></Button>
            <Button className='btn7' type="primary"><PlusOutlined /></Button>
            <Button className='btn8' type="primary"><PlusOutlined /></Button>
            <Button className='btn9' type="primary"><PlusOutlined /></Button>
            <Button className='btn10' type="primary"><PlusOutlined /></Button>
            <Button className='btn11' type="primary"><PlusOutlined /></Button>
          </Col>
        </Row>
      </div>
      <div>
        <Row className='btn-type'>
          <Col span={4}>
            <h3 className='font-style'>Simple</h3>
            <div className='layout '>
              <Button className='btn1' style={{ marginTop: '0' }} type="primary"><FireOutlined />button/02<FireOutlined /></Button>
            </div>
          </Col>
          <Col span={2} className='type-layout'>
            <Button className='btn2' type="primary"><PlusOutlined /></Button>
          </Col>
          <Col span={4}>
            <h3 className='font-style'>Round</h3>
            <div className='layout '>
              <Button className='btn3' style={{ marginTop: '0' }} type="primary"><FireOutlined />button/02<FireOutlined /></Button>
            </div>
          </Col>
          <Col span={2} className='type-layout'>
            <Button className='btn4' type="primary"><PlusOutlined /></Button>
          </Col>
          <Col span={4}>
            <h3 className='font-style'>Circle</h3>
            <div className='layout '>
              <Button className='btn5' style={{ marginTop: '0' }} type="primary"><FireOutlined />button/02<FireOutlined /></Button>
            </div>
          </Col>
          <Col span={2} className='type-layout'>
            <Button className='btn6' type="primary"><PlusOutlined /></Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default First;
