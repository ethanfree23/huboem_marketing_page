import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Login from './components/Login.js'

import Homepage from './pages/Homepage.js'

import Documents from './pages/Solutions/Documents.js'
import Parts from './pages/Solutions/Parts.js'
import Services from './pages/Solutions/Services.js'

import Demonstration from './pages/Support/Demonstration.js'
import Pricing from './pages/Support/Pricing.js'
import Documentation from './pages/Support/Documentation.js'
import ApiReference from './pages/Support/API_Reference.js'

import About from './pages/Company/About.js'
import Blog from './pages/Company/Blog.js'
import Partners from './pages/Company/Partners.js'

import Claim from './pages/Legal/Claim.js'
import Privacy from './pages/Legal/Privacy.js'
import Terms from './pages/Legal/Terms.js'

function App() {

  return (
    // <BrowserRouter>
    <Router>
      <Header />
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />

        {/* Footer - Solutions */}
        <Route path="/Parts" element={<Parts />} />
        <Route path="/Documents" element={<Documents />} />
        <Route path="/Services" element={<Services />} />

        {/* Footer - Support */}
        <Route path="/Demonstration" element={<Demonstration />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Documentation" element={<Documentation />} />
        <Route path="/API_Reference" element={<ApiReference />} />

        {/* Footer - Company */}
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Partners" element={<Partners />} />

        {/* Footer - Legal */}
        <Route path="/Claim" element={<Claim />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Terms" element={<Terms />} />

      </Routes>
      <Footer />
    </Router>
    //  </BrowserRouter >
  )
}

export default App;