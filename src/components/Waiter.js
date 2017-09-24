/**
 * Takoyaki Waiter Component
 * ==========================
 *
 * Component displaying three moving little dots to make the user wait.
 */
import React, {Component} from 'react';

export default class Waiter extends Component {
  constructor() {
    super();

    this.state = {dots: '...'};

    // Ticking
    this.interval = setInterval(() => {
      if (this.state.dots.length === 3)
        this.setState({dots: ''});
      else
        this.setState({dots: this.state.dots + '.'});
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const dots = this.state.dots,
          align = this.props.align || 'left';

    return <span className="waiter" style={{textAlign: align}}>{dots}&nbsp;</span>;
  }
}
