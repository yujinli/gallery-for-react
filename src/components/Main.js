require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
let imageDatas = require('../data/imageDatas.json');

class AppComponent extends React.Component {

  constructor(props){
    super(props);

    imageDatas = this.generatorImageUrl(imageDatas);
  }

  generatorImageUrl(imageDatasArray){
    let length = imageDatasArray.length;
    for(let index=0; index<length; index++){
      let singleImageData = imageDatasArray[index];
      singleImageData.imageUrl = require("../images/" +singleImageData.fileName);
      imageDatasArray[index] = singleImageData;
    }

    return imageDatasArray;
  }


  render() {
    return (
      /*
      <div className="index">
        <span>Hello World!11</span>
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
      */

      <select className="stage">
        <select className="img-sec">

        </select>
        <nav className="controller-nav">

        </nav>
      </select>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
