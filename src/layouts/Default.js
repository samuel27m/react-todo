import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'sweetalert2/dist/sweetalert2.css';
import Header from './Header';

class Default extends Component {
    render() {
      return (
        <main role="main">
          <Header />
          <div className="container">
            {this.props.content}
          </div>
        </main>
      );
    }
  }
  
  export default Default;