import React from 'react';
import { useForm } from 'react-hook-form';

export default function JobModal({ onClose }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const submitForm = async (data) => {
    try {
      await fetch('http://job-backend-nine.vercel.app/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      onClose();
    } catch (err) {
      console.error('Error submitting job:', err);
    }
  };

  const handleDraft = () => {
    setValue('isDraft', true);
    handleSubmit(submitForm)();
  };

  const handlePublish = () => {
    setValue('isDraft', false);
    handleSubmit(submitForm)();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Create Job Opening</h2>
          <button onClick={onClose} className="text-gray-500 text-2xl font-bold hover:text-red-500">&times;</button>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <input type="hidden" {...register('isDraft')} />

          {/* Title & Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
              <input
                type="text"
                {...register('title', { required: true })}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                placeholder="Full Stack Developer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <input
                type="text"
                {...register('company')}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                placeholder="Amazon"
              />
            </div>
          </div>

          {/* Location & Job Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <select
                {...register('location')}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select</option>
                <option value="Chennai">Chennai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
              <select
                {...register('type')}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select</option>
                <option value="Full Time">Full Time</option>
                <option value="Internship">Internship</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
              </select>
            </div>
          </div>

          {/* Salary Range & Deadline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Salary Range</label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  {...register('salaryMin')}
                  className="w-1/2 border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                  placeholder="₹50K"
                />
                <span className="text-gray-500">-</span>
                <input
                  type="text"
                  {...register('salaryMax')}
                  className="w-1/2 border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                  placeholder="₹180K"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Application Deadline</label>
              <input
                type="date"
                {...register('deadline')}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Experience */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
            <input
              type="text"
              {...register('experience')}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500"
              placeholder="1-3 Years"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
            <textarea
              {...register('description')}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm h-28 resize-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe the role and responsibilities..."
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-6">
            <button
              type="button"
              onClick={handleDraft}
              className="px-5 py-2 text-sm bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 font-semibold"
            >
              Save Draft
            </button>
            <button
              type="button"
              onClick={handlePublish}
              className="px-5 py-2 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700 font-semibold flex items-center gap-2"
            >
              Publish <i className="fas fa-chevron-right"></i><i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}