import React, { Component } from 'react'

export default class Doc extends Component {

  constructor(props) {
    super(props);

    this.state = { css_class: 'doc empty', content: 'Enter your text here'};
  }

  reset() {
    this.setState({  content: ' ' });

    // If user pressed Ctrl+Shift+S, send the text data to the server.
    // This event is better than 'onkeydown', because it gets fired only once.
    $(document).keypress(keyPressEvent => {
      if (keyPressEvent.ctrlKey && keyPressEvent.shiftKey && keyPressEvent.keyCode == 19) {
        this.props.saveText();
      }
    });

  }

  getSelectedText() {
    let selection = window.getSelection().toString();
    console.log(selection);
  }

  render() {
    return(
      <div className={this.state.css_class}
        contentEditable="true"
        data-text="test"
        onFocus={this.reset.bind(this)}
      >

        {this.state.content}

      </div>
    );
  }
}
