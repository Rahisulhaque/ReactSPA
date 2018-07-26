
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom'
import './index.css'

const destination = document.querySelector('#root')

class Main extends Component {
  render () {
    return (
      <HashRouter>
        <div>
          <h1>Rahisul Haque</h1>
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
            <li>Check out my <a href='https://github.com/rahisulhaque'> Github</a>.</li>
            <li>or LinkedIn <a href='https://www.linkedin.com/in/rahisul'>LinkedIn</a>.</li>
            <li>or Instagram: <a href='https://www.instagram.com/rahisul_hawk'>Instagram</a>.</li>
          </ul>
        </p>
      </div>
    )
  }
}

ReactDOM.render(
  <Main />, destination
)