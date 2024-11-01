import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Login from './components/Login.js'
import Signup from './pages/Signup.js'

import Homepage from './pages/Homepage.js'

import Documents from './pages/Solutions/Documents.js'
import Parts from './pages/Solutions/Parts.js'
import Service from './pages/Solutions/Services.js'

import Demonstration from './pages/Support/Demonstration.js'
import Pricing from './pages/Support/Pricing.js'
import ApiReference from './pages/Support/API_Reference.js'
import Whitepapers from './pages/Support/Whitepapers.js'

import WhitepapersCFO from './pages/Support/Whitepapers/whitepapersCFO.js'
import WhitepapersPareto from './pages/Support/Whitepapers/whitepapersPareto.js'
import WhitepapersDigging from './pages/Support/Whitepapers/whitepapersDigging.js'


import About from './pages/Company/About.js'
import Blog from './pages/Company/Blog.js'
import Partners from './pages/Company/Partners.js'
import FAQs from './pages/Company/FAQs.js'

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
        <Route path="/Signup" element={<Signup />} />

        {/* Footer - Solutions */}
        <Route path="/Parts" element={<Parts />} />
        <Route path="/Documents" element={<Documents />} />
        <Route path="/Service" element={<Service />} />

        {/* Footer - Support */}
        <Route path="/Demonstration" element={<Demonstration />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/API_Reference" element={<ApiReference />} />

        {/* Support - Whitepaper */}
        <Route path="/Whitepapers" element={<Whitepapers />} />
        <Route path="/Whitepapers-CFO" element={<WhitepapersCFO />} />
        <Route path="/Whitepapers-Pareto" element={<WhitepapersPareto />} />
        <Route path="/Whitepapers-Digging_the_Moat" element={<WhitepapersDigging />} />

        {/* Footer - Company */}
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Partners" element={<Partners />} />
        <Route path="/FAQs" element={<FAQs />} />

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