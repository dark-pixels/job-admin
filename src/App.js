import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import JobFilters from './components/JobFilters';
import JobList from './pages/JobList';
import JobModal from './components/JobModal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({});

  const fetchJobs = async () => {
    try {
      const query = new URLSearchParams(filters).toString();
      const res = await fetch(`https://job-backend-nine.vercel.app/api/jobs?${query}`);
      const data = await res.json();
      setJobs(Array.isArray(data) ? data : data.jobs || []);
    } catch (err) {
      console.error('Error fetching jobs:', err);
      setJobs([]);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [filters]); // ✅ only runs when filters change

  return (
    <div className="bg-gray-100 min-h-screen px-6 py-8 font-sans">
      <Header onCreate={() => setShowModal(true)} />
      <JobFilters
        onSearch={(query) => setFilters({ ...filters, title: query })}
        onFilterChange={(key, value) => setFilters({ ...filters, [key]: value })}
      />
      <JobList jobs={jobs} />
      {showModal && <JobModal onClose={() => {
        setShowModal(false);
        fetchJobs(); // ✅ refresh jobs after modal closes
      }} />}
    </div>
  );
}

export default App;