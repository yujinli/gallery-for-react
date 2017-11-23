require('normalize.css/normalize.css');
require('styles/App.css');

import React, {Component} from 'react';
import ImgFigure from './ImgFigure';

let yeomanImage = require('../images/yeoman.png');
let imageDatas = require('../data/imageDatas.json');

class AppComponent extends React.Component {

  constructor(props){
    super(props);

    // alert("appComponet, yeomanImage = "+ JSON.stringify(yeomanImage));
    imageDatas = this.generatorImageUrl(imageDatas);
  }

  generatorImageUrl(imageDatasArray){
    let length = imageDatasArray.length;
    //alert("generatorImageUrl, length = " + length);
    for(let index=0; index<length; index++){
      let singleImageData = imageDatasArray[index];
      singleImageData.imageUrl = require('../images/' +singleImageData.fileName);
      // alert("singleImageData.imageUrl = "+singleImageData.imageUrl);
      imageDatasArray[index] = singleImageData;
    }

    return imageDatasArray;
  }


  render() {

    let controllerUnits = [];
    let imgFigures = [];
    /*
    imageDatas.forEach((value) => {
      imgFigures.push(<ImgFigure data={value} />);
    });
    */

    imageDatas.forEach(function(imageInfo){
      imgFigures.push(<ImgFigure data={imageInfo} />);

    });

    return (
      <section className="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
        </nav>
      </section>
    );
  }
}


AppComponent.defaultProps = {
};

export default AppComponent;
