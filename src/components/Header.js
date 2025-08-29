export default function Header({ onCreate }) {
  return (
    <header className="bg-gray-900 py-4 px-5 mb-8 ml-40 mr-40 rounded-3xl rounded-a-3xl shadow-lg">
      <div className="max-w-7xl mx-auto px-26 flex items-center justify-between">
        {/* Logo + Navigation */}
        <div className="flex items-center space-x-8">
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold">M</div>
          <nav className="hidden md:flex space-x-6 text-gray-300">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">Find Jobs</a>
            <a href="#" className="hover:text-white transition-colors">First Talents</a>
            <a href="#" className="hover:text-white transition-colors">About us</a>
            <a href="#" className="hover:text-white transition-colors">Testimonials</a>
          </nav>
        </div>

        {/* Create Jobs Button */}
        <button
          onClick={onCreate}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full transition-colors"
        >
          Create Jobs
        </button>
      </div>
    </header>
  );
}