import React from 'react';
import { Button } from 'antd';
import { Col, Row } from 'antd';
import { CloudDownloadOutlined } from '@ant-design/icons'

function Sixth() {


    return (
        <div className="App">
            <div className='layout' style={{ alignItems: "center", justifyContent: "space-between", margin: '50px', marginBottom: '0' }}>

                <a href="/fifth">Go to Previous Page</a>
                <a href="/">Go to Next Page</a>
            </div>
            <Row>
                <Col span={4} className='down-button1'>
                    <Button type="primary" className='down-layout btn1'>
                        <CloudDownloadOutlined className='font1' />
                        <span className='font2'>button</span>
                    </Button>
                    <Button type="primary" className='down-layout btn2'>
                        <CloudDownloadOutlined className='font1' />
                        <span className='font2'>button</span>
                    </Button>
                    <Button type="primary" className='down-layout btn3'>
                        <CloudDownloadOutlined className='font1' />
                        <span className='font2'>button</span>
                    </Button>
                    <Button type="primary" className='down-layout btn4'>
                        <CloudDownloadOutlined className='font1' />
                        <span className='font2'>button</span>
                    </Button>
                    <Button type="primary" className='down-layout btn5'>
                        <CloudDownloadOutlined className='font1' />
                        <span className='font2'>button</span>
                    </Button>
                </Col>
                <Col span={4} className='down-button2'>
                    <Button type="primary" className='down-layout btn1'>
                        <CloudDownloadOutlined className='font1' />
                        <span className='font2'>button</span>
                    </Button>
                    <Button type="primary" className='down-layout btn2'>
                        <CloudDownloadOutlined className='font1' />
                        <span className='font2'>button</span>
                    </Button>
                    <Button type="primary" className='down-layout btn3'>
                        <CloudDownloadOutlined className='font1' />
                        <span className='font2'>button</span>
                    </Button>
                    <Button type="primary" className='down-layout btn4'>
                        <CloudDownloadOutlined className='font1' />
                        <span className='font2'>button</span>
                    </Button>
                    <Button type="primary" className='down-layout btn5'>
                        <CloudDownloadOutlined className='font1' />
                        <span className='font2'>button</span>
                    </Button>
                </Col>
                <Col span={4} className='down-button3'>
                    <Button type="primary" className='down-layout btn1'>
                        <CloudDownloadOutlined className='font1' />
                        <span className='font2'>button</span>
                    </Button>
                    <Button type="primary" className='down-layout btn2'>
                        <CloudDownloadOutlined className='font1' />
                        <span className='font2'>button</span>
                    </Button>
                    <Button type="primary" className='down-layout btn3'>
                        <CloudDownloadOutlined className='font1' />
                        <span className='font2'>button</span>
                    </Button>
                    <Button type="primary" className='down-layout btn4'>
                        <CloudDownloadOutlined className='font1' />
                        <span className='font2'>button</span>
                    </Button>
                    <Button type="primary" className='down-layout btn5'>
                        <CloudDownloadOutlined className='font1' />
                        <span className='font2'>button</span>
                    </Button>
                </Col>
                <Col span={4} className='down-button4'>
                    <Button type="primary" className='down-layout btn1'>
                        <CloudDownloadOutlined className='font1' />
                        <span className='font2'>button</span>
                    </Button>
                    <Button type="primary" className='down-layout btn2'>
                        <CloudDownloadOutlined className='font1' />
                        <span className='font2'>button</span>
                    </Button>
                    <Button type="primary" className='down-layout btn3'>
                        <CloudDownloadOutlined className='font1' />
                        <span className='font2'>button</span>
                    </Button>
                    <Button type="primary" className='down-layout btn4'>
                        <CloudDownloadOutlined className='font1' />
                        <span className='font2'>button</span>
                    </Button>
                    <Button type="primary" className='down-layout btn5'>
                        <CloudDownloadOutlined className='font1' />
                        <span className='font2'>button</span>
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

export default Sixth;
