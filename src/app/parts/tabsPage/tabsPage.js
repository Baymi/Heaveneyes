import React,{Component} from "react";
import { Tabs, Icon } from 'antd';
import Service from "../service/service";
import Deploy from "../deploy/deploy";
import Test from "../test/test";
const TabPane = Tabs.TabPane;

class TabsPage extends Component{
    render(){
        return(
            <Tabs defaultActiveKey="2">
                <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">
                    <Service/>
                </TabPane>
                <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">
                    <Deploy/>
                </TabPane>
                <TabPane tab={<span><Icon type="like" />Tab 3</span>} key="3">
                    <Test/>
                </TabPane>
            </Tabs>
        )
    }
}

export default TabsPage