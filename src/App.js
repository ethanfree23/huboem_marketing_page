import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../src/components/Header.js'
import Footer from './components/Footer.js'

import Homepage from '../src/pages/Homepage.js'

import Documents from '../src/pages/Solutions/Documents.js'
import Parts from '../src/pages/Solutions/Parts.js'
import Services from '../src/pages/Solutions/Services.js'

import Demonstration from './pages/Support/Demonstration.js'
import Pricing from '../src/pages/Support/Pricing.js'
import Documentation from '../src/pages/Support/Documentation.js'
import ApiReference from '../src/pages/Support/API_Reference.js'

import About from '../src/pages/Company/About.js'
import Blog from '../src/pages/Company/Blog.js'
import Partners from '../src/pages/Company/Partners.js'

import Claim from '../src/pages/Legal/Claim.js'
import Privacy from '../src/pages/Legal/Privacy.js'
import Terms from './pages/Legal/Terms.js'

function App() {

  return (
    // <BrowserRouter>
    <Router>
      <Header />
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/Homepage" element={<Homepage />} />

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