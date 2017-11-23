/**
 * Created by yujin.li on 2017/11/23.
 */


import React, {Component} from 'react';

class ImgFigure extends Component{

  constructor(props){
    super(props);
  }


  render(){
    return(
      <figure className="img-figure">
        <img src={this.props.data.imageUrl}
          alt={this.props.data.title}>
        </img>

        <figcaption className="img-title">
          <h2>
            {this.props.data.title}
          </h2>
        </figcaption>

      </figure>
    );
  }
}

export default ImgFigure;
