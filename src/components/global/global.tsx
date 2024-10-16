'use client';
import React from "react";
import Navbar from '@/components/main/navbar';
import BusinessAppsSection from '@/components/main/BusinessAppsPromo';
import FeatureSection from '@/components/main/FeatureSection'; 
import Footer from '@/components/main/footer'; 
import OdooComparison from '@/components/main/comparison';
import Image from 'next/image';

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"; // Import ShadCN Card components

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

interface GlobalProps {
  header: string;
  headerpart: string;
  desc: string;
  cardHeading: string; // Prop for card heading
  cardContent: string;
  videoPath: string; // Prop for card content // Prop for the heading icon source
}

const Global = ({ header, headerpart, desc, cardHeading, cardContent}: GlobalProps) => {
  const iconSrc = icons[cardHeading as keyof typeof icons]; 
  return (
    <div>
      <Navbar />

      {/* Main Content */}
      <div className="mt-40 bg-color-white min-h-screen flex flex-col items-center justify-center bg-white p-6 md:p-0 relative">
        
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-mono font-bold text-black mb-8 flex items-center justify-center">
            {header}
          </h1>
          <h1 className="text-3xl md:text-4xl font-mono font-bold text-black mb-8 flex items-center justify-center">
            <span className="text-orange-500"> {headerpart}</span>
          </h1>
          <p className="text-base md:text-lg font-mono text-gray-700 mb-10">
            {desc}
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
            <button className="bg-pink-800 text-white px-6 py-3 rounded-lg w-full md:w-auto hover:bg-purple-400 hover:text-black">
              Get Started!
            </button>
          </div>
          <p className="text-gray-600 font-medium text-sm md:text-base">
            580.00 Rs/month for ALL apps
          </p>
        </div>

        {/* Inline Card component using ShadCN */}
        <div className="w-full flex justify-center pb-8">
          <Card className="bg-gradient-to-b from-purple-50 to-white w-full max-w-4xl shadow-md mb-8"> {/* Changed to max-w-2xl for increased width */}
            <CardHeader>
              <div className="flex items-center">
                <CardTitle className="text-3xl font-bold"><span className="text-pink-800">{cardHeading}</span></CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-black text-lg">{cardContent}</p>
            </CardContent>
          </Card>
        </div>

        <div className="w-full mb-16">
          <div className="mb-40">
          <ModernVideoPlayer videoSrc= "{videoPath}"/>
          </div>
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
                  <Image src={app.src} alt={app.name} width={48} height={48} />
                </div>
                <p className="text-sm font-medium mt-2 text-center">{app.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <BusinessAppsSection />
      <OdooComparison />
      <FeatureSection />

      <div className="bg-gradient-to-b from-white to-orange-100 py-12">
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

        <div className="flex justify-center mb-4">
          <button className="bg-pink-800 hover:bg-pink-600 text-white px-16 py-4 rounded-lg text-xl mt-8">
            Start now - It's free
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Global;
