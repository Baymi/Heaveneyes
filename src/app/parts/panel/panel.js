import React, {Component} from 'react';
import './style.css'
import {Button, Row, Col} from 'antd';

class Panel extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: false
        };
    }

    componentDidMount() {
        console.log('nick');
    }

    toogleClick() {
        this.setState({
            data: !this.state.data
        });
    }

    render() {
        return (
            <div className="tool">
                <div className="toolBtn">
                    <Button onClick={this.toogleClick.bind(this)}/>
                </div>
                <div className="toolPanel" style={this.state.data ? {width: 0} : {width: 200}}>
                    <Row gutter={16}>
                        <Col className="gutter-row gutterRow1" span={6}>
                            <Button className="gutterBox1" style={this.state.data ? {opacity: 0} : {opacity: 1}}/>
                        </Col>
                        <Col className="gutter-row gutterRow2" span={6}>
                            <Button className="gutterBox2" style={this.state.data ? {opacity: 0} : {opacity: 1}}/>
                        </Col>
                        <Col className="gutter-row gutterRow3" span={6}>
                            <Button className="gutterBox3" style={this.state.data ? {opacity: 0} : {opacity: 1}}/>
                        </Col>
                        <Col className="gutter-row gutterRow4" span={6}>
                            <Button className="gutterBox4" style={this.state.data ? {opacity: 0} : {opacity: 1}}/>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Panel