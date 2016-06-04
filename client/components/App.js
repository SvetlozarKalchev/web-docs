import React, {Component} from 'react';

import Menu from './Menu';
import Doc from './Doc';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { saveKeyPressed: 0 }
  }

  sendTextToServer() {
    if(this.state.saveKeyPressed == 0) {
        this.setState({ saveKeyPressed: 1 });
        var text = $('.doc').text();

        var data = { userText: text };

        $.ajax(
          {
            type: 'POST',
            url: 'http://localhost:8000/save',
            data: data,
            success: (response) => {
              console.log(response);
              this.setState({ saveKeyPressed: 0 })
            }
          })
    }
  }

  render() {
    return(
      <div>
        <Menu/>
        <Doc saveText={this.sendTextToServer.bind(this)}/>
      </div>
    );
  }
}
