// Dynamically set backend URL
const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : 'https://job-backend-nine.vercel.app';

export const fetchJobs = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/jobs`);
    const data = await res.json();
    return Array.isArray(data) ? data : data.jobs || [];
  } catch (err) {
    console.error('Error fetching jobs:', err);
    return [];
  }
};

export const createJob = async (jobData) => {
  try {
    const res = await fetch(`${BASE_URL}/api/jobs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jobData),
    });

    if (!res.ok) {
      throw new Error(`Server responded with ${res.status}`);
    }

    return await res.json();
  } catch (err) {
    console.error('Error creating job:', err);
    return { error: err.message };
  }
};