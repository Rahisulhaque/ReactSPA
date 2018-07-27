
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom'
import './index.css'
import githublogo from './Octocat.png'
import linkedInLogo from './linkedin.png'
import instalogo from './insta.png'

const headerDestination = document.querySelector('#myHeader')
const destination = document.querySelector('#root')

class MyName extends Component {
  render () {
    return (<div id='container' >
      <Letter bgColor='#FF605F' letter='R' />
      <Letter bgColor='#50f442' letter='A' />
      <Letter bgColor='#49DD8E' letter='H' />
      <Letter bgColor='#AE99FF' letter='I' />
      <Letter bgColor='#f77c02' letter='S' />
      <Letter bgColor='#95f701' letter='U' />
      <Letter bgColor='#FF605F' letter='L' />
      <Letter bgColor='#FFCC00' letter=' ' />
      <Letter bgColor='#49DD8E' letter='H' />
      <Letter bgColor='#AE99FF' letter='A' />
      <Letter bgColor='#49DD8E' letter='Q' />
      <Letter bgColor='#41f4d9' letter='U' />
      <Letter bgColor='#ce42f4' letter='E' />
    </div>)
  }
}

class Letter extends Component {
  render () {
    const LetterStyle = {
      fontSize: 36,
      fontFamily: 'LucidaGrande',
      padding: 5,
      margin: 10,
      backgroundColor: this.props.bgColor,
      color: '#333',
      display: 'inline-block',
      height: 40,
      widows: 25

    }
    return (<div style={LetterStyle}> {this.props.letter} </div>)
  }
}

class Fonts extends Component {
  render () {
    const FontStyle = {
      textAlign: 'center'
    }
    return (<div style={FontStyle}> {this.props.letter} </div>)
  }
}

class Main extends Component {
  render () {
    return (
      <HashRouter>
        <div>

          <div id='container'> <MyName /> </div>
          <ul className='header'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/work'>Work</NavLink></li>
            <li><NavLink to='/reason'>Reason</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
          </ul>
          <div className='content'>
            <Route path='/' component={Home} />
            <Route path='/work' component={Work} />
            <Route path='/reason' component={Reason} />
            <Route path='/contact' component={Contact} />
          </div>
        </div>
      </HashRouter>

    )
  }
}

class Home extends Component {
  render () {
    return (
      <div>
        <h2>Hello!</h2>
        <p>I'm Rahisul. I'm a very passionate software developer. Currently I'm going to Arizona State University. I've a long retail and customer serveice experinece.
        Now, I'm looking for a internship oppurtunity so I can get into industry.</p>

        <p>If you take time to know me, recommend me or give me any suggestion I will really appriciate it.</p>
      </div>
    )
  }
}

class Work extends Component {
  render () {
    return (
      <div>
        <h2>My Experinces:</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>
          <li>Currently I'm working in WholeFoods Market in Scottsdale, Arizona.</li>
          <li>I was a barista in Starbucks.</li>
          <li>I have served as Director of Outreach in Santa Monica College Associate Students. I was elected with around 2700 votes.</li>
          <li>I worked in Banana Republic Flagship store as a casheier lead.</li>
          <li>I went to Military boarding school and I was a leader in those days.</li>
        </ol>
      </div>
    )
  }
}

class Reason extends Component {
  render () {
    return (
      <div>
        <h2>Top 10 reasons you should consider me:</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>
          <li>I know C programming language, pointers. Now, Im focusing on Go-lang.</li>
          <li>I have also worked with OOP language C++ and Java.</li>
          <li>I did webdevelopent with HTML, CSS and PHP.</li>
          <li>Currently I''m mastering Python and Javascript.</li>
          <li>In mobile app development, I'm choosing flutter. </li>
          <li>I'm also doing project in ReactJS.</li>
        </ol>
      </div>
    )
  }
}
class Contact extends Component {
  render () {
    return (
      <div>
        <h2>Want to know more?</h2>
        <p>
          <ul>
            <li>Check out my <a href='https://github.com/rahisulhaque'> <img style={{height: 30, width: 34}} src={githublogo} alt='Octocat' /></a>.</li>
            <li>or LinkedIn <a href='https://www.linkedin.com/in/rahisul'><img style={{height: 30, width: 120}} src={linkedInLogo} /> </a>.</li>
            <li>or Instagram: <a href='https://www.instagram.com/rahisul_hawk'><img style={{height: 30, width: 30}} src={instalogo} /></a>.</li>
          </ul>
        </p>
      </div>
    )
  }
}

ReactDOM.render(
  <Main />, destination
)
