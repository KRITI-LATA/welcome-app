// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isText: 'Subscribe'}

  renderChangeButton = () => {
    const {isText} = this.state
    if (isText === 'Subscribe') {
      return this.setState({isText: 'Subscribed'})
    }
    return this.setState({isText: 'Subscribe'})
  }

  render() {
    const {isText} = this.state
    return (
      <div className="bg-container">
        <h1 className="head-text">Welcome</h1>
        <p className="para-text">Thank you! Happy Learning</p>
        <div>
          <button
            type="button"
            className="sub-button"
            onClick={this.renderChangeButton}
          >
            {isText}
          </button>
        </div>
      </div>
    )
  }
}
export default Welcome
