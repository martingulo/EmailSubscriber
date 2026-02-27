import React from 'react'
import { 
  FaEnvelope,
  FaPhone,
  FaWhatsapp
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <div>
  
      {/* footer */}
      <footer className="bg-slate-900 flex-1 w-full text-slate-400">
        <div className="max-w-8xl flex flex-col md:flex-row justify-between flex-1 mx-auto px-6 py-5  gap-8">
          <div>
            <div className="flex items-center gap-2 text-white text-xl font-bold mb-4">
              <FaEnvelope className="text-indigo-400" /> Email
            </div>

            <p className="text-sm">The inbox is one of the most personal spaces online. Treat it with respect, and you’ll earn loyalty.</p>
          </div>

        

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm flex  gap-3 flex-col md:flex-row ">
              <li><a href="https://wa.me/265882271450" 
                className="hover:text-indigo-300 flex gap-2 items-center"> <FaWhatsapp className=' w-8 h-8 text-green-500'/>WhatsApp</a></li>
              
              <li><a href="tel:+265882271450" className="hover:text-indigo-300 flex gap-2 items-center"> <FaPhone className=' w-8 h-8 text-green-50' /> contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-8 py-4  mt-1  text-center text-xs">
            &copy; {new Date().getFullYear()} Emails subscription | crafted by Martin
        </div>
      </footer>

    </div>
  )
}

export default Footer
