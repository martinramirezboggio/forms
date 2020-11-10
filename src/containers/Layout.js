import React, { Fragment } from 'react'
import Header from '../components/header/header'

const Layout = props => (
  <Fragment>
    <Header />
    <section className="form-container">
      { props.children }
    </section>
  </Fragment>
)

export default Layout