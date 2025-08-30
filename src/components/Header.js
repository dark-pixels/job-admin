export default function Header({ onCreate }) {
  return (
    <header className="bg-white py-4 px-5 mb-8 ml-40 mr-40 rounded-3xl shadow-lg">
      <div className="max-w-7xl mx-auto px-26 flex items-center justify-between">
        {/* Logo + Navigation */}
        <div className="flex items-center space-x-8">
          <div className="w-12 h-12 rounded-full  flex items-center justify-center overflow-hidden">
            <img
              src="/cyberlogo.svg"
              alt="Cyber Logo"
              className="w-8 h-8 object-contain"
            />
          </div>
          <nav className="hidden md:flex space-x-6 text-gray-700">
            <a href="#" className="hover:text-black transition-colors">Home</a>
            <a href="#" className="hover:text-black transition-colors">Find Jobs</a>
            <a href="#" className="hover:text-black transition-colors">First Talents</a>
            <a href="#" className="hover:text-black transition-colors">About us</a>
            <a href="#" className="hover:text-black transition-colors">Testimonials</a>
          </nav>
        </div>

        {/* Create Jobs Button */}
        <button
          onClick={onCreate}
          className="text-white font-semibold px-6 py-2 rounded-full transition-all whitespace-nowrap"
          style={{
            background: 'linear-gradient(180deg, #A128FF 0%, #6100AD 113.79%)',
            borderRadius: '30px',
            minWidth: '140px',
            height: '38px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          Create Jobs
        </button>
      </div>
    </header>
  );
}