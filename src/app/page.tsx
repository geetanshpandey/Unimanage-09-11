
'use client';
import { useRouter } from 'next/navigation'; // Correct import for useRouter
import BusinessAppsSection from '@/components/main/BusinessAppsPromo';
import Navbar from '@/components/main/navbar';
import FeatureSection from '@/components/main/FeatureSection';
import Footer from '@/components/main/footer';
import OdooComparison from '@/components/main/comparison';
import Image from 'next/image'; // Import next/image for optimized image handling
import AppIconsSection from '@/components/main/appsIconsSection';
import ModernVideoPlayer from '@/components/main/modernVideoPlayer';
import Link from 'next/link';


export default function Home() {
  const router = useRouter(); // Assign useRouter() to router
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 md:p-0 relative">
        
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-mono font-bold text-black mb-4">
            All your business on <span className="text-orange-400">one platform</span>.
          </h1>
          <p className="text-base md:text-lg font-mono text-gray-700 mb-6">
            Simple, efficient, yet affordable!
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
            <Link href="/dpage/check" passHref>
              <button className="bg-pink-800 text-white px-6 py-3 rounded-lg w-full md:w-auto hover:bg-purple-400 hover:text-black">
                Start now - It&apos;s free
              </button>
            </Link>


            <button className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg w-full md:w-auto hover:bg-gray-800 hover:text-gray-100">
              Schedule a demo
            </button>
          </div>
          <p className="text-gray-600 font-medium text-sm md:text-base">
            580.00 Rs/month for ALL apps
          </p>
        </div>

        {/* Light Grey Semicircle at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gray-200 rounded-t-full flex items-center justify-center">
          <p className="text-center text-2xl font-bold text-gray-700">
            Unify your business, <span className="text-orange-400">elevate your success.</span>
          </p>
        </div>
      </div>

      {/* App Icons Section */}
      <AppIconsSection />

      <div className='bg-gradient-to-b from-white via-gray-100 to-white'>
          {/* Edit Notes on Notion Text */}
        <div className="text-center my-8">
          <h2 className="text-4xl font-semibold text-gray-800">
            Edit Notes on Notion
          </h2>
        </div>

        {/* New Image After App Icons Section */}
        <div className="my-8 flex justify-center">
        <Image 
          src="/Notion.png" 
          alt="Another Descriptive Alt Text" 
          width={800} 
          height={400} 
          className="object-cover rounded-lg" 
          quality={100}  // Ensuring maximum quality
        />
      </div>
      </div>

      {/* Business Apps Section */}
      <div>
        <BusinessAppsSection />
      </div>
      
      {/* Modern Video Player */}
      <div>
        <ModernVideoPlayer videoSrc='path/of/video' />
      </div>

      {/* Schedule a Meeting at Calmarshal Text */}
      <div className="text-center my-8 mt-28">
        <h2 className="text-4xl font-semibold text-gray-800">
          Schedule a Meeting at Calmarshal
        </h2>
      </div>

      {/* New Image After Modern Video Player */}
      <div className="my-8 flex justify-center">
        <Image 
          src="/Notion.png" 
          alt="Another Descriptive Alt Text" 
          width={800} 
          height={400} 
          className="object-cover rounded-lg" 
          quality={100}  // Ensuring maximum quality
        />
      </div>

      
      <div>
        {/* Other components */}
        <OdooComparison />
      </div>
      
      <div>
        <FeatureSection />
      </div>

      {/* Growth Potential Section */}
      <div className="bg-gradient-to-b from-white to-gray-400 py-12">
        <div className="flex flex-col items-center justify-center h-[40vh] w-full" style={{ paddingLeft: '20%', paddingRight: '20%' }}>
          <Image src="/logo.png" alt="Company Logo" width={280} height={280} className="object-contain h-full" />
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-6xl font-mono font-bold text-black mb-8">
            Maximize Your Growth <span className="text-orange-500">Trajectory</span>
          </h1>
          <p className="text-1.7xl text-center text-gray-600 mb-12 mt-8 font-bold">
            The product can personalize user experiences <span className='text-pink-700'>by understanding</span> <br />
            individual preferences and tailoring recommendations <span className='text-pink-700'>or content based </span><br />
            <span className='text-orange-500'>on user behavior and historical data.</span>
          </p>
        </div>

        {/* Start Now Button */}
        <div className="flex justify-center mb-4">
          <button className="bg-pink-800 hover:bg-pink-600 text-white px-16 py-4 rounded-lg text-xl mt-8">
            Start now - It&apos;s free
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
