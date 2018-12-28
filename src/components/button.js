import React, { Component } from 'react'

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: false,
    }
    this.handleScreen = this.handleScreen.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScreen);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScreen);
  }

  handleScreen() {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.min(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const docScreen = docHeight * (7 / 5);
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docScreen) {
      this.setState({ height: true });
    }
    else {
      this.setState({ height: false });
    }
  }

  render() {
    let handleArrow = this.state.height ? "-show" : "-hide";
    return (
      <a href="https://codepen.io/royhhwang/pens/public/#" className={"button--top " + handleArrow} target="_blank" rel="noopener noreferrer">
        Lab
        <span class="blinker"></span>
      </a>
    )
  }
}


export default Button
