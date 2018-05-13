import React,{Component} from "react";
import {message,Button,Progress} from 'antd';
let i= 0;
let j =0;
class DeployRight extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            serviceName:'服务1',
            progressNum1:0,
            progressNum2:0,
        };
    }
    infoFinish(){
        message.success('数据已全部迁移完成！',2);
    }
    infoWarning(){
        message.warning('请不要重复迁移哦(*￣︶￣)！',1);
    }
    numCount(){
        if(i!=0||j!=0){
            this.infoWarning();
            return;
        }
        const that =this;
        let timer1 = setInterval(function () {
            i=i+10;
            that.setState({
                progressNum1:i
            });
            if(i>=100){
                window.clearInterval(timer1);
                console.log('计时结束');
            }
        },500);
        let timer2 = setInterval(function () {
            j=j+5;
            that.setState({
                progressNum2:j
            });
            if(j>=100){
                window.clearInterval(timer2);
                console.log('计时结束');
            }
        },200);
    };

    render(){
        const num1 = this.state.progressNum1;
        const num2 = this.state.progressNum2;
        if(num1>=100&&num2>=100){
            this.infoFinish();
        }
        return(
            <div>
            <p>{this.state.serviceName}</p>
                <Progress percent={this.state.progressNum1} status="active" />
                <Progress percent={this.state.progressNum2} status="active" />
                <Button type="primary" onClick={this.numCount.bind(this)}>开始迁移</Button>
            </div>
        )
    }}

export default DeployRight