import React,{Component} from "react";
import {Progress} from 'antd';
import './style.css';
class Test extends Component{
    render(){
        return(
            <div>
                <Progress percent={30} format={() => 'Done'}/>
                <Progress percent={50} status="active" />
                <Progress percent={70} status="exception" />
                <Progress percent={100} />
                <Progress percent={50} showInfo={false} />
            </div>
        );
    }}

export default Test