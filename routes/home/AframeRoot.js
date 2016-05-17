import React, { Component } from 'react';
import 'aframe';
import { Scene } from 'aframe-react';

class AframeRoot extends Component {

  render() {
    return (
      <div>
        <Scene>
          <a-assets>
            <img id="shadow" src="/img/radial-shadow-2.png" />
            <img id="ui1" src="/img/ui-1.png" />
            <img id="ui2" src="/img/ui-2.png" />
            <img id="ui3" src="/img/ui-3.png" />
            <img id="ui4" src="/img/ui-4.png" />
          </a-assets>

          <a-curvedimage src="#ui1" radius="3.7" theta-length="90" height="4"
                         rotation="0 200 0" scale="1.2 1.2 1.2"></a-curvedimage>
          <a-curvedimage src="#ui2" radius="5.7" theta-length="80" height="3"
                         rotation="0 90 0" position="0 0.7 0" scale="0.6 0.6 0.6"></a-curvedimage>
          <a-curvedimage src="#ui3" radius="5.7" theta-length="50" height="3.02"
                         rotation="0 -60 0" position="0 2 0" scale="0.8 0.8 0.8"></a-curvedimage>
          <a-curvedimage src="#ui4" radius="5.7" theta-length="70" height="4"
                         rotation="0 20 0" position="0 2 0" scale="0.8 0.8 0.8"></a-curvedimage>

          <a-image position="0 -5 0" src="#shadow" rotation="-90 0 0" scale="6 6 6"></a-image>
          <a-sky src="/img/street.jpg"></a-sky>
          <a-camera position="0 1.8 1.5"></a-camera>
        </Scene>
      </div>
    );
  }

}

export default AframeRoot;
