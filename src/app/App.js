import React, {Component} from 'react';
import Panel from './parts/panel/panel';
import './App.css';
//import Viewer from "cesium/Source/Widgets/Viewer/Viewer";
import Cesium from "cesium/Source/Cesium";

class App extends Component {
    componentDidMount() {
        var viewer = new Cesium.Viewer('cesiumContainer', {});
        viewer.terrainProvider = Cesium.createWorldTerrain({
            requestWaterMask: true,
            requestVertexNormals: true
        });
        viewer.scene.globe.depthTestAgainstTerrain = true;
    }

    render() {
        return (
            <div>
                <Panel/>
                <div id="cesiumContainer">
                </div>
            </div>
        )
    }
}

export default App