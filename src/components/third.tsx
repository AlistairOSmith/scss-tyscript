import React from 'react';
import { Button, Radio, Space, Divider } from 'antd';
import { Col, Row } from 'antd';
import { LeftOutlined } from '@ant-design/icons'
import { RightOutlined } from '@ant-design/icons'
import { DownloadOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';


function Third() {

    return (
        <div className="App">
            <div className='layout' style={{ alignItems: "center", justifyContent: "space-between", margin: '50px', marginBottom: '0' }}>

                <a href="/second">Go to Previous Page</a>
                <a href="/fourth">Go to Next Page</a>

            </div>
            <Row>
                <Col span={5} className='group-button1'>
                    <Radio.Group className='btn1'>
                        <Radio.Button className='bt1'>Years</Radio.Button>
                        <Radio.Button className='bt2'>Months</Radio.Button>
                        <Radio.Button className='bt3'>Days</Radio.Button>
                    </Radio.Group>
                    <Radio.Group className='btn2'>
                        <Radio.Button className='bt1'>Years</Radio.Button>
                        <Radio.Button className='bt2'>Months</Radio.Button>
                        <Radio.Button className='bt3'>Days</Radio.Button>
                    </Radio.Group>
                    <Radio.Group className='btn3'>
                        <Radio.Button className='bt1'>Years</Radio.Button>
                        <Radio.Button className='bt2'>Months</Radio.Button>
                        <Radio.Button className='bt3'>Days</Radio.Button>
                    </Radio.Group>
                    <Radio.Group className='btn4'>
                        <Radio.Button className='bt1'>Years</Radio.Button>
                        <Radio.Button className='bt2'>Months</Radio.Button>
                        <Radio.Button className='bt3'>Days</Radio.Button>
                    </Radio.Group>
                </Col>
                <Col span={4} className='group-button2'>
                    <Radio.Group className='btn1'>
                        <Radio.Button className='bt1'><LeftOutlined /></Radio.Button>
                        <Radio.Button className='bt2'><RightOutlined /></Radio.Button>
                    </Radio.Group>
                    <Radio.Group className='btn2'>
                        <Radio.Button className='bt1'><LeftOutlined /></Radio.Button>
                        <Radio.Button className='bt2'><RightOutlined /></Radio.Button>
                    </Radio.Group>
                    <Radio.Group className='btn3'>
                        <Radio.Button className='bt1'><LeftOutlined /></Radio.Button>
                        <Radio.Button className='bt2'><RightOutlined /></Radio.Button>
                    </Radio.Group>
                    <Radio.Group className='btn4'>
                        <Radio.Button className='bt1'><LeftOutlined /></Radio.Button>
                        <Radio.Button className='bt2'><RightOutlined /></Radio.Button>
                    </Radio.Group>
                </Col>
                <Col span={5} className='group-button3'>
                    <Radio.Group className='btn1'>
                        <Radio.Button className='bt1'><DownloadOutlined style={{ marginRight: '10px' }} />Download</Radio.Button>
                        <Radio.Button className='bt2'> 12K</Radio.Button>
                    </Radio.Group>
                    <Radio.Group className='btn2'>
                        <Radio.Button className='bt1'><DownloadOutlined style={{ marginRight: '10px' }} />Download</Radio.Button>
                        <Radio.Button className='bt2'> 12K</Radio.Button>
                    </Radio.Group>
                    <Radio.Group className='btn3'>
                        <Radio.Button className='bt1'><DownloadOutlined style={{ marginRight: '10px' }} />Download</Radio.Button>
                        <Radio.Button className='bt2'> 12K</Radio.Button>
                    </Radio.Group>
                </Col>
                <Col span={5} className='group-button4'>
                    <Radio.Group className='btn1'>
                        <Radio.Button className='bt1'>Save changes</Radio.Button>
                        <Radio.Button className='bt2'><DownOutlined /></Radio.Button>
                    </Radio.Group>
                    <Radio.Group className='btn2'>
                        <Radio.Button className='bt1'>Save changes</Radio.Button>
                        <Radio.Button className='bt2'><DownOutlined /></Radio.Button>
                    </Radio.Group>
                    <Radio.Group className='btn3'>
                        <Radio.Button className='bt1'>Save changes</Radio.Button>
                        <Radio.Button className='bt2'><DownOutlined /></Radio.Button>
                    </Radio.Group>
                </Col>
                <Col span={5} className='group-button5'>
                    <Radio.Group className='btn1'>
                        <Radio.Button className='bt1'><Checkbox /></Radio.Button>
                        <Radio.Button className='bt2'>Save changes<DownOutlined style={{ paddingLeft: '20px' }} /></Radio.Button>
                    </Radio.Group>
                    <Radio.Group className='btn2'>
                        <Radio.Button className='bt1'><Checkbox /></Radio.Button>
                        <Radio.Button className='bt2'>Save changes<DownOutlined style={{ paddingLeft: '20px' }} /></Radio.Button>
                    </Radio.Group>
                    <Radio.Group className='btn3'>
                        <Radio.Button className='bt1'><Checkbox /></Radio.Button>
                        <Radio.Button className='bt2'>Save changes<DownOutlined style={{ paddingLeft: '20px' }} /></Radio.Button>
                    </Radio.Group>
                </Col>
            </Row>
            <Row style={{ backgroundColor: '#111928' }}>
                <Col span={5} className='group-button1'>
                    <Radio.Group className='btn1'>
                        <Radio.Button className='bt1'>Years</Radio.Button>
                        <Radio.Button className='bt2'>Months</Radio.Button>
                        <Radio.Button className='bt3'>Days</Radio.Button>
                    </Radio.Group>
                    <Radio.Group className='btn2'>
                        <Radio.Button className='bt1'>Years</Radio.Button>
                        <Radio.Button className='bt2'>Months</Radio.Button>
                        <Radio.Button className='bt3'>Days</Radio.Button>
                    </Radio.Group>
                    <Radio.Group className='btn3'>
                        <Radio.Button className='bt1'>Years</Radio.Button>
                        <Radio.Button className='bt2'>Months</Radio.Button>
                        <Radio.Button className='bt3'>Days</Radio.Button>
                    </Radio.Group>
                    <Radio.Group className='btn4'>
                        <Radio.Button className='bt1'>Years</Radio.Button>
                        <Radio.Button className='bt2'>Months</Radio.Button>
                        <Radio.Button className='bt3'>Days</Radio.Button>
                    </Radio.Group>
                </Col>
                <Col span={4} className='group-button2'>
                    <Radio.Group className='btn1'>
                        <Radio.Button className='bt1'><LeftOutlined /></Radio.Button>
                        <Radio.Button className='bt2'><RightOutlined /></Radio.Button>
                    </Radio.Group>
                    <Radio.Group className='btn2'>
                        <Radio.Button className='bt1'><LeftOutlined /></Radio.Button>
                        <Radio.Button className='bt2'><RightOutlined /></Radio.Button>
                    </Radio.Group>
                    <Radio.Group className='btn3'>
                        <Radio.Button className='bt1'><LeftOutlined /></Radio.Button>
                        <Radio.Button className='bt2'><RightOutlined /></Radio.Button>
                    </Radio.Group>
                    <Radio.Group className='btn4'>
                        <Radio.Button className='bt1'><LeftOutlined /></Radio.Button>
                        <Radio.Button className='bt2'><RightOutlined /></Radio.Button>
                    </Radio.Group>
                </Col>
                <Col span={5} className='group-button3'>
                    <Radio.Group className='btn1'>
                        <Radio.Button className='bt1'><DownloadOutlined style={{ marginRight: '10px' }} />Download</Radio.Button>
                        <Radio.Button className='bt2'> 12K</Radio.Button>
                    </Radio.Group>
                    <Radio.Group className='btn2'>
                        <Radio.Button className='bt1'><DownloadOutlined style={{ marginRight: '10px' }} />Download</Radio.Button>
                        <Radio.Button className='bt2'> 12K</Radio.Button>
                    </Radio.Group>
                    <Radio.Group className='btn3'>
                        <Radio.Button className='bt1'><DownloadOutlined style={{ marginRight: '10px' }} />Download</Radio.Button>
                        <Radio.Button className='bt2'> 12K</Radio.Button>
                    </Radio.Group>
                </Col>
                <Col span={5} className='group-button4'>
                    <Radio.Group className='btn1'>
                        <Radio.Button className='bt1'>Save changes</Radio.Button>
                        <Radio.Button className='bt2'><DownOutlined /></Radio.Button>
                    </Radio.Group>
                    <Radio.Group className='btn2'>
                        <Radio.Button className='bt1'>Save changes</Radio.Button>
                        <Radio.Button className='bt2'><DownOutlined /></Radio.Button>
                    </Radio.Group>
                    <Radio.Group className='btn3'>
                        <Radio.Button className='bt1'>Save changes</Radio.Button>
                        <Radio.Button className='bt2'><DownOutlined /></Radio.Button>
                    </Radio.Group>
                </Col>
                <Col span={5} className='group-button5'>
                    <Radio.Group className='btn1'>
                        <Radio.Button className='bt1'><Checkbox /></Radio.Button>
                        <Radio.Button className='bt2'>Save changes<DownOutlined style={{ paddingLeft: '20px' }} /></Radio.Button>
                    </Radio.Group>
                    <Radio.Group className='btn2'>
                        <Radio.Button className='bt1'><Checkbox /></Radio.Button>
                        <Radio.Button className='bt2'>Save changes<DownOutlined style={{ paddingLeft: '20px' }} /></Radio.Button>
                    </Radio.Group>
                    <Radio.Group className='btn3'>
                        <Radio.Button className='bt1'><Checkbox /></Radio.Button>
                        <Radio.Button className='bt2'>Save changes<DownOutlined style={{ paddingLeft: '20px' }} /></Radio.Button>
                    </Radio.Group>
                </Col>
            </Row>
            <Row>
                <Col span={5} className='group-button6'>
                    <h1>states/light</h1>
                    <Radio.Group className='btn'>
                        <Radio.Button className='bt1 active'>Years</Radio.Button>
                        <Radio.Button className='bt2'>Months</Radio.Button>
                        <Radio.Button className='bt3'>Days</Radio.Button>
                    </Radio.Group>
                </Col>
            </Row>
            <Row style={{ backgroundColor: '#111928' }}>
                <Col span={5} className='group-button7'>
                    <h1 style={{ color: 'white' }}>states/dark</h1>
                    <Radio.Group className='btn'>
                        <Radio.Button className='bt1 active'>Years</Radio.Button>
                        <Radio.Button className='bt2'>Months</Radio.Button>
                        <Radio.Button className='bt3'>Days</Radio.Button>
                    </Radio.Group>
                </Col>
            </Row>
        </div>
    );
}

export default Third;
