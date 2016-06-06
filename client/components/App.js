import React, {Component} from 'react';

import Menu from './Menu';
import Doc from './Doc';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { saveKeyPressed: 0 }
  }

  sendTextToServer() {
    // Event fires a few times,   but I only want the data sent once.
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

  // Accepts either <b>, <i> or <u> strings as an argument.
  modify_font_style(element_style) {
    let selection_object = window.getSelection();
    
    let selection_text = selection_object.toString();

    // More data about the selected text can be gotten by
    // creating a Range object. It holds the start and
    // end position and allows modifying the selection.
    let selection_data = selection_object.getRangeAt(0);

    // Collapse the range, so data can be inserted at
    // the place of the selection later. A collapsed range
    // begins and ends at the same position.
    // HACK: Apparently, Range.collapse() does not work
    // in Firefox. Inserting data at the place of the selection
    // can be done by just removing the selection contents first
    // and then appending the desired element.
    // selection_data.collapse();

    // Remove selected text from document
    selection_object.deleteFromDocument();

    // Insert the selected content surrounded by styling tags.
    let selection_text_to_DOM_NODE = document.createTextNode(selection_text);
    let bold = document.createElement(element_style);

    bold.appendChild(selection_text_to_DOM_NODE);

    selection_data.insertNode(bold);
  }



  render() {
    return(
      <div>
        <Menu modify_font_style={this.modify_font_style.bind(this)}/>
        <Doc saveText={this.sendTextToServer.bind(this)}/>
      </div>
    );
  }
}
