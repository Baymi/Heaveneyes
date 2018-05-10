import React, {Component} from 'react';
import './style.css';
//import serviceResource from './serviceData';
import {Row, Col} from 'antd';

class Service extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        // const serviceDom;
        // for (var i of serviceResource) {
        //     switch (i.status) {
        //         case 1:
        //             serviceDom = <Col></Col>;
        //             break;
        //         case 2:
        //             serviceDom = <Col></Col>;
        //             break;
        //         case 3:
        //             serviceDom = <Col></Col>;
        //             break;
        //         case 4:
        //             serviceDom = <Col></Col>;
        //             break;
        //     }
        // }
        return (
            <div className="serviceContainer">
                <Row>
                    <Col span={6}>
                        <div className="sPanel">
                            <Row className="pRow" type="flex" justify="space-around" align="middle">
                                <Col span={7}>
                                    <div className="sRate">
                                        <span>使用频率</span>
                                        <span className="spanRate">26</span>
                                    </div>
                                </Col>
                                <Col span={10}>
                                    <div className="sName">服务名称</div>
                                </Col>
                                <Col span={3}>
                                    <div className="circle"></div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Service