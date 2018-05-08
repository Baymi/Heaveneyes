import React, {Component} from 'react';
import './style.css'
import {Button, Row, Col} from 'antd';

class Panel extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: true
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
                <div className="toolPanel">
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <Button className="gutter-box"></Button>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Button className="gutter-box"></Button>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Button className="gutter-box"></Button>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Button className="gutter-box"></Button>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Panel