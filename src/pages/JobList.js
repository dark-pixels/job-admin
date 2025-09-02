import React from 'react';
import JobCard from '../components/JobCard';

export default function JobList({ jobs }) {
  if (!jobs || jobs.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-10">
        <p className="text-lg">No jobs found.</p>
        <p className="text-sm">Try adjusting your filters or check back later.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}