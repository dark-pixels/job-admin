export const fetchJobs = async () => {
  const res = await fetch('https://job-backend-nine.vercel.app/api/jobs');
  const data = await res.json();
  return Array.isArray(data) ? data : data.jobs || [];
};

export const createJob = async (jobData) => {
  const res = await fetch('https://job-backend-nine.vercel.app/api/jobs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(jobData),
  });
  return await res.json();
};