import React, {Component} from 'react'

class ReasonCounter extends React.Component {
  constructor (props) {
    	super(props)
    	this.state = {
    		NumberOfReasons: 25
    	}
    	this.timerTick = this.timerTick.bind(this)
  }

  timerTick () {
  	this.setState({
  		NumberOfReasons: this.state.NumberOfReasons + 1
  	})
  }

  componentDidMount () {
  	setInterval(this.timerTick, 1500)
  }

  render () {
  	var reasons = this.state.NumberOfReasons.toLocaleString()
    return (<reason id='container'> There are {reasons} reasons you should consider to hire me! I know it's increasing.</reason>)
  }
}
export default ReasonCounter
