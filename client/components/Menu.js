import React, { Component } from 'react';

export default class Menu extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="menu">

        <div className="icon">
          <img src="client/assets/images/menu3.png"/>
        </div>

        <div className="row row_1">
          <div>File</div>
          <div>Home</div>
          <div>Format</div>
          <div>Insert</div>
          <div>Tools</div>
        </div>

        <div className="row row_2">


          <div className="icon_box">
            <img src="client/assets/images/cut.png"/>
            <img src="client/assets/images/copy.png"/>
            <img src="client/assets/images/paste.png"/>
          </div>

          <div className="separator">|</div>

          <div className="options_box">
            <select className="paragraph_style">
              <option value="normal">Normal</option>
              <option value="title">Title</option>
              <option value="h1">Heading 1</option>
              <option value="h2">Heading 2</option>
            </select>
          </div>


          <div className="options_box">
            <select className="font">
              <option value="arial">Arial</option>
              <option value="roboto">Roboto</option>
              <option value="open-sans">Open Sans</option>
              <option value="times-new-roman">Times New Roman</option>
            </select>
          </div>

          <div className="options_box">
            <select className="font-size">
              <option value="10">10</option>
              <option value="12">12</option>
              <option value="14">14</option>
              <option value="18">18</option>
              <option value="22">22</option>
              <option value="24">24</option>
            </select>
          </div>

          <div className="separator">|</div>

          <div className="icon_box text_style_icons">
            <img onClick={() => this.props.modify_font_style('b')} src="client/assets/images/bold.png"/>
            <img onClick={() => this.props.modify_font_style('i')} src="client/assets/images/italicize.png"/>
            <img onClick={() => this.props.modify_font_style('u')} src="client/assets/images/underline.png"/>
          </div>


        </div>

      </div>
    );
  }

}
