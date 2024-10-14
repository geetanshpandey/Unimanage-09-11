'use client';
import BusinessAppsSection from '@/components/main/BusinessAppsPromo';
import Navbar from '@/components/main/navbar';
import FeatureSection from '@/components/main/FeatureSection'; // Adjust the path if necessary
import Footer from '@/components/main/footer'; // Adjust the path if necessary
import OdooComparison from '@/components/main/comparison';
import Image from 'next/image'; // Import next/image for optimized image handling
import { Button } from "@/components/ui/button"; // Import the Button component from ShadCN

// Import your logo here (make sure to replace with the actual path)
import Logo from '@/app/icons/logo.png'; // Change this to your actual logo path

// Import all your icons
import AccountingIcon from '@/app/icons/accounting.ico';
import KnowledgeIcon from '@/app/icons/Knowledge.ico';
import SignIcon from '@/app/icons/Sign.ico';
import CRMIcon from '@/app/icons/crm.png';
import StudioIcon from '@/app/icons/Studio.ico';
import SubscriptionsIcon from '@/app/icons/Subscription.png';
import RentalIcon from '@/app/icons/Rental.png';
import PointOfSaleIcon from '@/app/icons/Sales.ico';
import DiscussIcon from '@/app/icons/Discuss.png';
import DocumentsIcon from '@/app/icons/Documents.ico';
import ProjectIcon from '@/app/icons/project.ico';
import TimesheetsIcon from '@/app/icons/TimeSheets.ico';
import FieldServiceIcon from '@/app/icons/Field Service.ico';
import PlanningIcon from '@/app/icons/planning.ico';
import HelpdeskIcon from '@/app/icons/HelpDesk.ico';
import WebsiteIcon from '@/app/icons/Website.ico';
import SocialMarketingIcon from '@/app/icons/social_media_marketing.ico';
import EmailMarketingIcon from '@/app/icons/mail-marketting.ico';
import PurchaseIcon from '@/app/icons/Purchase.ico';
import InventoryIcon from '@/app/icons/Inventory.ico';
import ManufacturingIcon from '@/app/icons/manufacturing.ico';
import SalesIcon from '@/app/icons/Sales.ico';
import HRIcon from '@/app/icons/HR.ico';
import DashboardIcon from '@/app/icons/Dashboard.ico';
import ModernVideoPlayer from '@/components/main/modernVideoPlayer';

// Create an array of icon objects
const icons = [
  { name: 'Accounting', src: AccountingIcon },
  { name: 'Knowledge', src: KnowledgeIcon },
  { name: 'Sign', src: SignIcon },
  { name: 'CRM', src: CRMIcon },
  { name: 'Studio', src: StudioIcon },
  { name: 'Subscriptions', src: SubscriptionsIcon },
  { name: 'Rental', src: RentalIcon },
  { name: 'Point of Sale', src: PointOfSaleIcon },
  { name: 'Discuss', src: DiscussIcon },
  { name: 'Documents', src: DocumentsIcon },
  { name: 'Project', src: ProjectIcon },
  { name: 'Timesheets', src: TimesheetsIcon },
  { name: 'Field Service', src: FieldServiceIcon },
  { name: 'Planning', src: PlanningIcon },
  { name: 'Helpdesk', src: HelpdeskIcon },
  { name: 'Website', src: WebsiteIcon },
  { name: 'Social Marketing', src: SocialMarketingIcon },
  { name: 'Email Marketing', src: EmailMarketingIcon },
  { name: 'Purchase', src: PurchaseIcon },
  { name: 'Inventory', src: InventoryIcon },
  { name: 'Manufacturing', src: ManufacturingIcon },
  { name: 'Sales', src: SalesIcon },
  { name: 'HR', src: HRIcon },
  { name: 'Dashboard', src: DashboardIcon },
];

export default function Home() {
  return (
    <div>
      {/* Include the Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className=" min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 md:p-0 relative">
        
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-mono font-bold text-black mb-4">
            All your business on <span className="text-orange-400">one platform</span>.
          </h1>
          <p className="text-base md:text-lg font-mono text-gray-700 mb-6">
            Simple, efficient, yet affordable!
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
            <button className="bg-pink-800 text-white px-6 py-3 rounded-lg w-full md:w-auto hover:bg-purple-400 hover:text-black">
              Start now - It's free
            </button>
            <button className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg w-full md:w-auto hover:bg-gray-800 hover:text-gray-100">
              Schedule a demo
            </button>
          </div>
          <p className="text-gray-600 font-medium text-sm md:text-base">
            580.00 Rs/month for ALL apps
          </p>
        </div>

        {/* Light Grey Semicircle at the bottom with centered text */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-orange-100 rounded-t-full flex items-center justify-center">
          <p className="text-center text-2xl font-bold text-gray-700">
            Unify your business, <span className="text-orange-400">elevate your success.</span>
          </p>
        </div>
      </div>

      {/* App Icons Section */}
      <div className="bg-orange-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6" style={{ paddingLeft: '15%', paddingRight: '15%' }}>
            {icons.map((app, index) => (
              <div key={index} className="flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:-translate-y-2">
                <div className="shadow-lg flex items-center justify-center" style={{ width: '80px', height: '80px' }}>
                  {/* Use the Image component from Next.js */}
                  <Image src={app.src} alt={app.name} width={48} height={48} /> {/* Adjust size as needed */}
                </div>
                <p className="text-sm font-medium mt-2 text-center">{app.name}</p> {/* Icon name below the icon */}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Business Apps Section */}
      <div>
        <BusinessAppsSection />
      </div>
      
      {/* Modern Video Player */}
      <div>
        <ModernVideoPlayer />
      </div>
      
      <div>
        {/* Other components */}
        <OdooComparison />
      </div>
      
      <div>
        <FeatureSection />
      </div>

      <div className="bg-gradient-to-b from-white to-orange-100 py-12">
        {/* Logo Section */}
        <div className="flex flex-col items-center justify-center h-[40vh] w-full" style={{ paddingLeft: '20%', paddingRight: '20%' }}>
          <Image src="/logo.png" alt="Company Logo" width={280} height={280} className="object-contain h-full" />
        </div>

        {/* Unleash Your Growth Potential Heading */}
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
          Start now - It's free
          </button>
        </div>
      </div>
      <div>
        <Footer/>
      </div>


    </div>
  );
}
