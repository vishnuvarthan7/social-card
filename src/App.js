import React, { Component } from 'react';
import test from './test.json';
import './App.css';

class App extends Component {
  render() {
    return (
      test.map((item, i) => {
        return (
        <div className="social-card">
          {item.url && <img src={item.url} alt="post img"/> }
          <div className="post-title">{item.title}</div>
          <div className="author-detail">
            <div className="author-image"><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--CNQd0r3E--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/44236/d7beb6a8-36ba-4492-b521-e2e9f2a6e44c.jpeg" alt="profile-img"/></div>
            <div className="author-specs">
              <div className="author-name">
                <a href="#Lorem">{item.authorName}. 23 Mar</a>
              </div>
              <div className="tags">
                <a href="#psychology">#psychology</a>
                <a href="#tribe">#tribe</a>
                <a href="#teams">#teams</a>
              </div>
            </div>
          </div>
        </div>
        );
      })
    );
  }
}

export default App;
