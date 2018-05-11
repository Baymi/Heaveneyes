import React, {Component} from 'react';
import './style.css';
import serviceResource from './serviceData';
import {Button, Row, Col} from 'antd';

class Service extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        const data = serviceResource.serviceData;
        let color;
        const loop = data=>data.map((item)=> {
            switch (item.status) {
                case 1:
                    color = '#03bceb';
                    break;
                case 2:
                    color = '#38c84c';
                    break;
                case 3:
                    color = '#fa615b';
                    break;
                case 4:
                    color = '#bebebe';
                    break;
            }
            return (
                <Col span={6}>
                    <div className="sPanel">
                        <Row className="pRow" type="flex" justify="space-around" align="middle">
                            <Col span={7}>
                                <div className="sRate">
                                    <span className="spanRate1">使用频率</span>
                                    <span className="spanRate2">{item.rate}</span>
                                </div>
                            </Col>
                            <Col span={10}>
                                <div className="sName">{item.name}</div>
                            </Col>
                            <Col span={3}>
                                <div className="sStatus" style={{backgroundColor: color}}></div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            );
        });
        return (
            <div className="c">
                <div className="availableTitle">
                    <Row gutter={24} className="availableRow" type="flex" justify="start" align="middle">
                        <Col>可用状态：</Col>
                        <Col>
                            <div className="useCol">
                                <div className="sStatus" style={{backgroundColor: '#03bceb'}}></div>
                                <span>在线被使用</span>
                            </div>
                        </Col>
                        <Col>
                            <div className="useCol">
                                <div className="sStatus" style={{backgroundColor: '#38c84c'}}></div>
                                <span>在线被使用</span>
                            </div>
                        </Col>
                        <Col>
                            <div className="useCol">
                                <div className="sStatus" style={{backgroundColor: '#fa615b'}}></div>
                                <span>在线被使用</span>
                            </div>
                        </Col>
                        <Col>
                            <div className="useCol">
                                <div className="sStatus" style={{backgroundColor: '#bebebe'}}></div>
                                <span>在线被使用</span>
                            </div>
                        </Col>
                        <Col>
                            <Button className="startBtn" type="primary">服务部署</Button>
                        </Col>
                    </Row>
                </div>
                <div className="serviceContainer">
                    <Row gutter={16} className="outsideRow">
                        {loop(data)}
                    </Row>
                </div>
            </div>
        )
    }
}

export default Service