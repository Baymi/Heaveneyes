import React, {Component} from "react";
import {Row, Col, Select, Button} from 'antd';
import './style.css';
import DeployRight from './deployRight/deployRight';
import deployData from './deployData';
const Option = Select.Option;

class Deploy extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectTab: 0,
            iService: {}
        };
    }

    handleChange(value) {
        console.log(`selected ${value}`, deployData);
        this.setState({
            selectTab: value
        }, function () {
            console.log('666', this.state.selectTab);
        })
    }

    serviceProp(value) {
        this.setState({
            iService: value
        }, function () {
            console.log('获取到的服务为：', this.state.iService);
        });
    }

    render() {
        const selectItem = deployData=>deployData.map((item)=> {
            return (<Option value={item.key}>{item.label}</Option>);
        });
        let i = this.state.selectTab;
        let icData = deployData[i].children;
        const sItem = sData=>sData.map((item, index)=> {
            return (
                <Col className="sCol" span={12}>
                    <Button className="sTag" type="primary"
                            onClick={this.serviceProp.bind(this, item)}>{item.sName}</Button >
                </Col>
            );
        });
        const icItem = icData=>icData.map((item)=> {
            return (
                <div className="icDiv">
                    <Row type="flex" justify="center" align="middle">
                        <Col span={8} style={{textAlign: "center"}}>{item.iName}</Col>
                        <Col span={16}>
                            <Row className="tagRow" type="flex" justify="start" align="middle">
                                {sItem(item.iService)}
                            </Row>
                        </Col>
                    </Row>
                </div>
            );
        });
        return (
            <Row className="outsideRow">
                <Col className="fCol" span={12}>
                    <div>
                        <Select style={{width: 120}} onChange={this.handleChange.bind(this)}>
                            {selectItem(deployData)}
                        </Select>
                    </div>
                    {icItem(icData)}
                </Col>
                <Col className="sCol" span={12}>
                    <DeployRight sevData={this.state.iService}/>
                </Col>
            </Row>
        )
    }
}

export default Deploy