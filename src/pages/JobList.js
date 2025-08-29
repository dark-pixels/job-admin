import JobCard from '../components/JobCard';

export default function JobList({ jobs }) {
  if (!Array.isArray(jobs) || jobs.length === 0) {
    return <p className="text-gray-500 text-center">No jobs found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}