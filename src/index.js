import React from 'react';
import ReactDOM from 'react-dom';
import "cesium/Source/Widgets/widgets.css";
import './index.css';
import 'antd/dist/antd.css';
//import App from './app/App';
//import Service from './app/parts/service/service';
import TabsPage from './app/parts/tabsPage/tabsPage';
import registerServiceWorker from './registerServiceWorker';
import buildModuleUrl from "cesium/Source/Core/buildModuleUrl";

buildModuleUrl.setBaseUrl('./cesium/');

ReactDOM.render(<TabsPage/>, document.getElementById('root'));

registerServiceWorker();