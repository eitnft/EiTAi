import React from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import VideoGenerator from './components/VideoGenerator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Toaster position="top-right" />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <VideoGenerator />
      </main>
      <Footer />
    </div>
  );
}

export default App;