import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import JobFilters from './components/JobFilters';
import JobList from './pages/JobList';
import JobModal from './components/JobModal';

const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : 'https://job-backend-4ckc.onrender.com';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    location: '',
    type: '',
    minSalary: 0,
    maxSalary: 100,
  });

  const fetchJobs = async () => {
    try {
      const query = new URLSearchParams({
        search: filters.search,
        location: filters.location,
        type: filters.type,
        minSalary: Math.round(filters.minSalary),
        maxSalary: Math.round(filters.maxSalary),
      }).toString();

      const res = await fetch(`${BASE_URL}/api/jobs?${query}`);
      const data = await res.json();
      setJobs(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Error fetching jobs:', err);
      setJobs([]);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [filters]);

  return (
    <div className="bg-gray-100 min-h-screen px-6 py-8 font-sans">
      <Header onCreate={() => setShowModal(true)} />
      <JobFilters filters={filters} setFilters={setFilters} onFilter={fetchJobs} />
      <JobList jobs={jobs} />
      {showModal && (
        <JobModal
          onClose={() => {
            setShowModal(false);
            fetchJobs(); // Refresh job list after modal closes
          }}
        />
      )}
    </div>
  );
}

export default App;