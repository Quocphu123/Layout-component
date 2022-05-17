import React, { Component } from 'react'
import Header from './header'
import Body from './body/body'
import Footer from './footer'
export default class Home extends Component {
  render() {
    return (
      <>
          <Header />
          <Body />
          <Footer />
      </>
    )
  }
}
