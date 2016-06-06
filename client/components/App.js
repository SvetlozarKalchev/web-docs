import React, {Component} from 'react';

import Menu from './Menu';
import Doc from './Doc';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { saveKeyPressed: 0 }
  }

  sendTextToServer() {
    // Event fires a few times, but I only want the data sent once.
    // That's why I am using a counter.
    if(this.state.saveKeyPressed == 0) {

        // Increment the counter.
        this.setState({ saveKeyPressed: 1 });

        // Get the text in the textarea
        var text = $('.doc').html();

        // Create a JSON object holding the data.
        var data = { userText: text };

        // Send the ajax request and decrement the counter once a
        // response arrives
        $.ajax(
          {
            type: 'POST',
            url: 'http://localhost:8000/save',
            data: data,
            success: (response) => {
              console.log(response);
              this.setState({ saveKeyPressed: 0 })
            }
          });
    }
  }

  makeBold() {
    let selection = window.getSelection().toString();
    
    console.log(selection);
    // console.log(this.getSelection);
  }

  getSelectedText() {
    let selection = window.getSelection().toString();

    return selection;
  }

  render() {
    return(
      <div>
        <Menu bold={this.makeBold.bind(this)}/>
        <Doc saveText={this.sendTextToServer.bind(this)}/>
      </div>
    );
  }
}
