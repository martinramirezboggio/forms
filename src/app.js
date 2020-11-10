import React from 'react';
import { Route } from 'react-router-dom'

import Layout from './containers/Layout'
import Form1 from './components/forms/form1'
import Form2 from './components/forms/form2'
import Form3 from './components/forms/form3'
import Form4 from './components/forms/form4'


const App = () => (
  <Layout>
    <Route path="/" exact component={Form1} />
    <Route path="/form2" component={Form2} />
    <Route path="/form3" component={Form3} />
    <Route path="/form4" component={Form4} />
  </Layout>
)

export default App