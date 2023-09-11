import React from 'react';
import { Button } from 'antd';
import { Col, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import { FireOutlined } from '@ant-design/icons'


function Second() {
    const [width] = ['10px', '20px']

    return (
        <div className="App">
            <div className='layout' style={{ alignItems: "center", justifyContent: "space-between", margin: '50px', marginBottom: '0' }}>

                <a href="/">Go to Previous Page</a>
                <a href="/third">Go to Next Page</a>

            </div>
            <Row>
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
    );
}

export default Second;
