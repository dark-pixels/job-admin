export default function JobCard({ job }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow border hover:-translate-y-1 transition flex flex-col">
      <div className="flex justify-between items-start mb-4">
        {job.logoBase64 ? (
          <img
            src={job.logoBase64}
            alt="Company Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold ${
              job.logoColor || 'bg-blue-500'
            }`}
          >
            {job.logo || job.company?.charAt(0)}
          </div>
        )}
        <span className="text-xs bg-blue-100 text-blue-600 font-semibold px-3 py-1 rounded-full">
          24h Ago
        </span>
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-1">{job.title}</h3>
      <p className="text-sm text-gray-500 mb-4">{job.company}</p>

      <div className="text-sm text-gray-600 mb-4 flex flex-wrap gap-4">
        {/* 💼 Experience */}
        <div className="flex items-center gap-x-1 text-sm text-gray-600">
          <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.7 14.75C11.7 12.7618 9.28233 11.15 6.29999 11.15C3.31766 11.15 0.899994 12.7618 0.899994 14.75M15.3 12.05V9.35M15.3 9.35V6.65M15.3 9.35H12.6M15.3 9.35H18M6.29999 8.45C4.31177 8.45 2.69999 6.83822 2.69999 4.85C2.69999 2.86177 4.31177 1.25 6.29999 1.25C8.28822 1.25 9.89999 2.86177 9.89999 4.85C9.89999 6.83822 8.28822 8.45 6.29999 8.45Z"
              stroke="#5A5A5A"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{job.experience || '1-3 yr Exp'}</span>
        </div>

        {/* 📍 Location */}
        <div className="flex items-center gap-x-1 text-sm text-gray-600">
          <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.76364 16.3408H3.49091M3.49091 16.3408H12.1273M3.49091 16.3408V4.42274C3.49091 3.45538 3.49091 2.97133 3.67918 2.60185C3.84478 2.27684 4.10882 2.0128 4.43383 1.8472C4.80331 1.65894 5.28736 1.65894 6.25472 1.65894H9.36381C10.3312 1.65894 10.8142 1.65894 11.1837 1.8472C11.5087 2.0128 11.7736 2.27684 11.9392 2.60185C12.1273 2.97097 12.1273 3.45443 12.1273 4.4199V9.43166M12.1273 16.3408H17.3091M12.1273 16.3408V9.43166M17.3091 16.3408H19.0364M17.3091 16.3408V9.43166C17.3091 8.62686 17.309 8.22465 17.1775 7.90723C17.0022 7.484 16.6663 7.14754 16.243 6.97223C15.9256 6.84075 15.5228 6.84075 14.718 6.84075C13.9132 6.84075 13.5108 6.84075 13.1933 6.97223C12.7701 7.14754 12.4341 7.484 12.2588 7.90723C12.1273 8.22465 12.1273 8.62685 12.1273 9.43166M6.08182 7.70439H9.53637M6.08182 5.11348H9.53637"
              stroke="#5A5A5A"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{job.location || 'Onsite'}</span>
        </div>

        {/* 💰 Salary */}
        <div className="flex items-center gap-x-1 text-sm text-gray-600">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.1728 10.0001L9.99096 15.4546L1.80914 10.0001M18.1728 13.6365L9.99096 19.091L1.80914 13.6365M18.1728 6.36373L9.99096 11.8183L1.80914 6.36373L9.99096 0.90918L18.1728 6.36373Z"
              stroke="#5A5A5A"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{job.salary ? `₹${job.salary}K` : '₹12LPA'}</span>
        </div>
      </div>

      <p className="text-sm text-gray-500 mb-6">
        {job.description ||
          'A user-friendly interface lets you browse stunning photos and videos from around the world, filter destinations based on interests and travel style, and create personalized stories effortlessly.'}
      </p>

      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition">
        Apply Now
      </button>
    </div>
  );
}