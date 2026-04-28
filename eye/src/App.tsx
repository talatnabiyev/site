/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Diseases from './components/Diseases';
import AboutDoctor from './components/AboutDoctor';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Diseases />
        <AboutDoctor />
        <AppointmentForm />
      </main>
      <Footer />
    </div>
  );
}
