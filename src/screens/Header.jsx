import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { 
  FaEnvelope,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      
      {/* header / navigation */}
      <header className=" bg-gradient-to-r from-slate-900 to-indigo-900 absolute w-full backdrop-blur-sm fie top-0 z-10 ">
        <nav className="max-w-8xl mx-auto px-6 py-4 flex items-center justify-between flex-wrap gap-4">
          <Link to='/' className="flex items-center space-x-2">
            <FaEnvelope className="text-3xl text-indigo-600" />
            <span className="text-2xl font-bold text-slate-50">Emails</span>
          </Link>
          <div className="flex gap-6 text-slate-600 font-medium">
          </div>
          <div className="flex gap-3">
            <button className="bg-indigo-600 text-white px-4 py-4 rounded-full text-sm font-semibold hover:bg-indigo-700 transition shadow-md"></button>
          </div>
        </nav>
      </header>
      
    </div>
  )
}

export default Header
