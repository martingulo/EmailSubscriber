import { useState } from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { 
  FaEnvelope,
  FaPaperPlane
} from 'react-icons/fa6';

import axios from 'axios'
import Top from './Header';
import Footer from './Footer';

const Home = () => {
    const [ email, setEmail ] = useState("");
    const [ error, setError ] = useState(false);
    const [ success, setSuccess ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ isSubscribed, setIsSubscribed ] = useState(false);

    const BASE_URL = import.meta.env.BASE_URL;

    const handleSubscribe = async (e) => {
    e.preventDefault();
    setError(false);

    try 
    {
      if (!email) {
        setError("Email required");
        return;
      }
      if (!email.includes("@")) {
        setError("Invalid email spotted");
        return;
      }

      setLoading(true);
      const response = await axios.post(BASE_URL, { email } );

      if(response.status === 200){
        setIsSubscribed(true);
        setLoading(false);
        setSuccess(response.data?.message || "Subscribed");
        setEmail("");
      } else{
        setError("Something went wrong");
        setLoading(false);
      }

    } catch (err) 
    {
      const errorMessage = err.response?.data?.message || "Something went wrong. Please try again.";
      setError(errorMessage);
      setLoading(false);
    }
    finally
    {
      setTimeout(() => {
        setError(false);
      }, 10000);
  
      setTimeout(() => {
        setSuccess(false);
      }, 10000);
      setTimeout(() => {
        setIsSubscribed(false);
      }, 10000);
    }
      
    }

  return (

    <div className=' w-full h-screen'>
      <Top/>
      <div className='main-hero flex flex-col flex-1 overflow-x-hidden h-screen '>

      {/* CTA banner */}
      <section className="bg-gradient-to-t flex-7 pt-10 md:pt-25 w-full from-slate-800/70 to-slate-900/90 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl capitalize md:text-5xl font-bold mb-4">
            Be part of the team By subscribing
          </h2>
          <p className="md:text-xl text-indigo-100 mb-8">
            Subscribe to our email list and get the latest updates, exclusive offers, and helpful tips delivered right to your inbox. Be the first to know about new content, special perks, and upcoming events—all tailored just for you. Don’t miss out—join our community today!
          </p>

          {/* Email Subscription Form */}
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter your email"
                  className="w-full placeholder:text-gray-400 pl-10 pr-4 py-4 outline-2 outline-amber-50 rounded-full text-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  disabled={isSubscribed}
                />
              </div>
              <button
                type="submit"
                className= "bg-indigo-500 hover:bg-indigo-400 cursor-pointer text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-xl flex items-center justify-center gap-2 bg-green-500"
                disabled={isSubscribed}
              >
               
                  <>
                    <FaPaperPlane /> {loading ? " Subscribing...": "Subscribe"}
                  </>
                
              </button>
            </div>
            
           
            {/* Success Message */}
            {isSubscribed && (
              <p className="text-green-300 text-sm mt-2">
                ✓ Thanks for subscribing! Check your inbox for confirmation.
              </p>
            )}
            {/* error Message */}
            {error && (
              <p className="text-red-300 text-sm mt-2">
                {error}
              </p>
            )}
          </form>

          <p className="text-sm text-indigo-200 mt-6 flex items-center justify-center gap-2">
            {/* <FaCheckCircle className="inline" />  */}
              expand · growth · power · innovation
          </p>
        </div>
      </section>

      <Footer/>
      </div>

    </div>
    
  )
}

export default Home
