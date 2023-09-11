import React from 'react';
import { Button } from 'antd';
import { Col, Row } from 'antd';
import { UpOutlined } from '@ant-design/icons'
import { DownOutlined } from '@ant-design/icons'

function Fourth() {
    const [width] = ['10px', '20px']

    return (
        <div className="App">
            <div className='layout' style={{ alignItems: "center", justifyContent: "space-between", margin: '50px', marginBottom: '0' }}>

                <a href="/third">Go to Previous Page</a>
                <a href="/fifth">Go to Next Page</a>

            </div>
            <Row>
                <Col span={2} className='btn-layout arrow-button1'>
                    <Button type="primary" className='down-layout btn1'>
                        <div style={{ marginBottom: '10px' }}>
                            <UpOutlined />
                        </div>
                        <div>
                            <DownOutlined />
                        </div>
                    </Button>
                    <Button type="primary" className='down-layout btn2'>
                        <div style={{ marginBottom: '10px' }}>
                            <UpOutlined />
                        </div>
                        <div>
                            <DownOutlined />
                        </div>
                    </Button>
                    <Button type="primary" className='down-layout btn3'>
                        <div style={{ marginBottom: '10px' }}>
                            <UpOutlined />
                        </div>
                        <div>
                            <DownOutlined />
                        </div>
                    </Button>
                    <Button type="primary" className='down-layout btn4'>
                        <div style={{ marginBottom: '10px' }}>
                            <UpOutlined />
                        </div>
                        <div>
                            <DownOutlined />
                        </div>
                    </Button>
                    <Button type="primary" className='down-layout btn5'>
                        <div style={{ marginBottom: '10px' }}>
                            <UpOutlined />
                        </div>
                        <div>
                            <DownOutlined />
                        </div>
                    </Button>
                    <Button type="primary" className='down-layout btn6'>
                        <div style={{ marginBottom: '10px' }}>
                            <UpOutlined />
                        </div>
                        <div>
                            <DownOutlined />
                        </div>
                    </Button>
                    <Button type="primary" className='down-layout btn7'>
                        <div style={{ marginBottom: '10px' }}>
                            <UpOutlined />
                        </div>
                        <div>
                            <DownOutlined />
                        </div>
                    </Button>
                </Col>
                <Col span={2} className='btn-layout arrow-button2'>
                    <Button type="primary" className='down-layout btn1'>
                        <div style={{ marginBottom: '10px' }}>
                            <UpOutlined />
                        </div>
                        <div>
                            <DownOutlined />
                        </div>
                    </Button>
                    <Button type="primary" className='down-layout btn2'>
                        <div style={{ marginBottom: '10px' }}>
                            <UpOutlined />
                        </div>
                        <div>
                            <DownOutlined />
                        </div>
                    </Button>
                    <Button type="primary" className='down-layout btn3'>
                        <div style={{ marginBottom: '10px' }}>
                            <UpOutlined />
                        </div>
                        <div>
                            <DownOutlined />
                        </div>
                    </Button>
                    <Button type="primary" className='down-layout btn4'>
                        <div style={{ marginBottom: '10px' }}>
                            <UpOutlined />
                        </div>
                        <div>
                            <DownOutlined />
                        </div>
                    </Button>
                    <Button type="primary" className='down-layout btn5'>
                        <div style={{ marginBottom: '10px' }}>
                            <UpOutlined />
                        </div>
                        <div>
                            <DownOutlined />
                        </div>
                    </Button>
                    <Button type="primary" className='down-layout btn6'>
                        <div style={{ marginBottom: '10px' }}>
                            <UpOutlined />
                        </div>
                        <div>
                            <DownOutlined />
                        </div>
                    </Button>
                    <Button type="primary" className='down-layout btn7'>
                        <div style={{ marginBottom: '10px' }}>
                            <UpOutlined />
                        </div>
                        <div>
                            <DownOutlined />
                        </div>
                    </Button>
                </Col>
                <Col span={2} className='btn-layout arrow-button3'>
                    <Button type="primary" className='down-layout btn1'>
                        <div style={{ marginBottom: '10px' }}>
                            <UpOutlined />
                        </div>
                        <div>
                            <DownOutlined />
                        </div>
                    </Button>
                    <Button type="primary" className='down-layout btn2'>
                        <div style={{ marginBottom: '10px' }}>
                            <UpOutlined />
                        </div>
                        <div>
                            <DownOutlined />
                        </div>
                    </Button>
                    <Button type="primary" className='down-layout btn3'>
                        <div style={{ marginBottom: '10px' }}>
                            <UpOutlined />
                        </div>
                        <div>
                            <DownOutlined />
                        </div>
                    </Button>
                    <Button type="primary" className='down-layout btn4'>
                        <div style={{ marginBottom: '10px' }}>
                            <UpOutlined />
                        </div>
                        <div>
                            <DownOutlined />
                        </div>
                    </Button>
                    <Button type="primary" className='down-layout btn5'>
                        <div style={{ marginBottom: '10px' }}>
                            <UpOutlined />
                        </div>
                        <div>
                            <DownOutlined />
                        </div>
                    </Button>
                    <Button type="primary" className='down-layout btn6'>
                        <div style={{ marginBottom: '10px' }}>
                            <UpOutlined />
                        </div>
                        <div>
                            <DownOutlined />
                        </div>
                    </Button>
                    <Button type="primary" className='down-layout btn7'>
                        <div style={{ marginBottom: '10px' }}>
                            <UpOutlined />
                        </div>
                        <div>
                            <DownOutlined />
                        </div>
                    </Button>
                </Col>
                <Col span={2} className='btn-layout arrow-button4'>
                    <div className='btn1'>
                        <div className='bg-color1'>
                            <UpOutlined />
                        </div>
                        <div className='bg-color2'>
                            <DownOutlined />
                        </div>
                    </div>
                    <div className='btn2'>
                        <div className='bg-color1'>
                            <UpOutlined />
                        </div>
                        <div className='bg-color2'>
                            <DownOutlined />
                        </div>
                    </div>
                    <div className='btn3'>
                        <div className='bg-color1'>
                            <UpOutlined />
                        </div>
                        <div className='bg-color2'>
                            <DownOutlined />
                        </div>
                    </div>
                    <div className='btn4'>
                        <div className='bg-color1'>
                            <UpOutlined />
                        </div>
                        <div className='bg-color2'>
                            <DownOutlined />
                        </div>
                    </div>
                    <div className='btn5'>
                        <div className='bg-color1'>
                            <UpOutlined />
                        </div>
                        <div className='bg-color2'>
                            <DownOutlined />
                        </div>
                    </div>
                    <div className='btn6'>
                        <div className='bg-color1'>
                            <UpOutlined />
                        </div>
                        <div className='bg-color2'>
                            <DownOutlined />
                        </div>
                    </div>
                    <div className='btn7'>
                        <div className='bg-color1'>
                            <UpOutlined />
                        </div>
                        <div className='bg-color2'>
                            <DownOutlined />
                        </div>
                    </div>
                </Col>
                <Col span={2} className='btn-layout arrow-button5'>
                    <div className='btn1'>
                        <div className='bg-color1'>
                            <UpOutlined />
                        </div>
                        <div className='bg-color2'>
                            <DownOutlined />
                        </div>
                    </div>
                    <div className='btn2'>
                        <div className='bg-color1'>
                            <UpOutlined />
                        </div>
                        <div className='bg-color2'>
                            <DownOutlined />
                        </div>
                    </div>
                    <div className='btn3'>
                        <div className='bg-color1'>
                            <UpOutlined />
                        </div>
                        <div className='bg-color2'>
                            <DownOutlined />
                        </div>
                    </div>
                    <div className='btn4'>
                        <div className='bg-color1'>
                            <UpOutlined />
                        </div>
                        <div className='bg-color2'>
                            <DownOutlined />
                        </div>
                    </div>
                    <div className='btn5'>
                        <div className='bg-color1'>
                            <UpOutlined />
                        </div>
                        <div className='bg-color2'>
                            <DownOutlined />
                        </div>
                    </div>
                    <div className='btn6'>
                        <div className='bg-color1'>
                            <UpOutlined />
                        </div>
                        <div className='bg-color2'>
                            <DownOutlined />
                        </div>
                    </div>
                    <div className='btn7'>
                        <div className='bg-color1'>
                            <UpOutlined />
                        </div>
                        <div className='bg-color2'>
                            <DownOutlined />
                        </div>
                    </div>
                </Col>
                <Col span={2} className='btn-layout arrow-button6'>
                    <div className='btn1'>
                        <div className='bg-color1'>
                            <UpOutlined />
                        </div>
                        <div className='bg-color2'>
                            <DownOutlined />
                        </div>
                    </div>
                    <div className='btn2'>
                        <div className='bg-color1'>
                            <UpOutlined />
                        </div>
                        <div className='bg-color2'>
                            <DownOutlined />
                        </div>
                    </div>
                    <div className='btn3'>
                        <div className='bg-color1'>
                            <UpOutlined />
                        </div>
                        <div className='bg-color2'>
                            <DownOutlined />
                        </div>
                    </div>
                    <div className='btn4'>
                        <div className='bg-color1'>
                            <UpOutlined />
                        </div>
                        <div className='bg-color2'>
                            <DownOutlined />
                        </div>
                    </div>
                    <div className='btn5'>
                        <div className='bg-color1'>
                            <UpOutlined />
                        </div>
                        <div className='bg-color2'>
                            <DownOutlined />
                        </div>
                    </div>
                    <div className='btn6'>
                        <div className='bg-color1'>
                            <UpOutlined />
                        </div>
                        <div className='bg-color2'>
                            <DownOutlined />
                        </div>
                    </div>
                    <div className='btn7'>
                        <div className='bg-color1'>
                            <UpOutlined />
                        </div>
                        <div className='bg-color2'>
                            <DownOutlined />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Fourth;
