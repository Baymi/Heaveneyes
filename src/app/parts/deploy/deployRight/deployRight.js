import React from "react";
import {message, Button, Progress} from 'antd';
import './style.css';

class DeployRight extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            progressNum1: 0,
            progressNum2: 0,
            progressNum3: 0,
            sName: '服务1',
            sData: [],
            scontent: []
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            sName: nextProps.sevData.sName,
            sData: nextProps.sevData.sData,
            scontent: nextProps.sevData.scontent,
            progressNum1: 0,
            progressNum2: 0,
            progressNum3: 0
        });
    }

    infoFinish() {
        message.success('数据已全部迁移完成！', 2);
    }

    infoWarning() {
        message.warning('请不要重复迁移哦(*￣︶￣)！', 1);
    }

    numCount() {
        if (this.state.progressNum1 != 0 || this.state.progressNum2 != 0 || this.state.progressNum3 != 0) {
            this.infoWarning();
            return;
        }
        let x = 0;
        let y = 0;
        let z = 0;
        const that = this;
        let timer1 = setInterval(function () {
            x = x + 10;
            that.setState({
                progressNum1: x
            });
            if (x >= 100) {
                window.clearInterval(timer1);
                console.log('计时1结束');
            }
        }, 500);
        let timer2 = setInterval(function () {
            y = y + 5;
            that.setState({
                progressNum2: y
            });
            if (y >= 100) {
                window.clearInterval(timer2);
                console.log('计时2结束');
            }
        }, 200);
        let timer3 = setInterval(function () {
            z = z + 20;
            that.setState({
                progressNum3: z
            });
            if (z >= 100) {
                window.clearInterval(timer3);
                console.log('计时3结束');
            }
        }, 1000);
    }

    render() {
        let num1 = this.state.progressNum1;
        let num2 = this.state.progressNum2;
        let num3 = this.state.progressNum3;
        let sData = this.state.sData;
        let scontent = this.state.scontent;
        let percentArr=[num1,num2,num3];

        const progItem1 = sData=>sData.map((item,index)=> {
            let pIndex = Math.floor((Math.random() * 3));
            console.log('adads', pIndex);
            return (
                <div className="proDiv">
                    <Progress key={index} percent={percentArr[pIndex]} status="active"/>
                    <span className="proText">{item.dName + ':' + item.dNum}</span>
                </div>
            );
        });
        const progItem2 = scontent=>scontent.map((item)=> {
            let pIndex = Math.floor((Math.random() * 3));
            return (
                <div className="proDiv">
                    <Progress percent={percentArr[pIndex]} status="active"/>
                    <span className="proText">{item.cName}</span>
                </div>
            );
        });
        if (num1 >= 100 && num2 >= 100 && num3 >= 100) {
            this.infoFinish();
        }
        return (
            <div>
                <p style={{textAlign: "center"}}>{this.state.sName}</p>
                <div className="dataProgress">
                    <p>数据:</p>
                    {progItem1(sData)}
                </div>
                <div className="dataProgress">
                    <p>服务:</p>
                    {progItem2(scontent)}
                </div>
                <Button type="primary" onClick={this.numCount.bind(this)}>开始迁移</Button>
            </div>
        )
    }
}

export default DeployRight