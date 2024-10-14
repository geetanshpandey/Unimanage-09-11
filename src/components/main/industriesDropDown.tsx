"use client";

import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const IndustriesDropdown = () => {
  return (
    <DropdownMenuContent
      className="absolute w-[800px] sm:w-[1000px] bg-white border border-gray-200 shadow-lg z-50"
      align="center" // Center the dropdown relative to the trigger button
      sideOffset={10}
      style={{
        padding: '1.5rem',
        left: '50%',  // Start from the middle of the trigger
        transform: 'translateX(-50%)',  // Shift back by 50% of the dropdown width to center it
        maxHeight: '400px', // Set a maximum height for mobile view
        overflowY: 'auto',  // Enable scrolling when content exceeds max height
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-gray-800">
        {/* Column 1: Retail */}
        <div>
          <h3 className="font-semibold text-blue-700">RETAIL</h3>
          <hr className="my-2 border-blue-300" />
          <DropdownMenuItem>Book Store</DropdownMenuItem>
          <DropdownMenuItem>Clothing Store</DropdownMenuItem>
          <DropdownMenuItem>Hardware Store</DropdownMenuItem>
        </div>

        {/* Column 2: Supply Chain */}
        <div>
          <h3 className="font-semibold text-orange-600">SUPPLY CHAIN</h3>
          <hr className="my-2 border-orange-300" />
          <DropdownMenuItem>Beverage Distributor</DropdownMenuItem>
          <DropdownMenuItem>Corporate Gifts</DropdownMenuItem>
          <DropdownMenuItem>Custom Furniture Production</DropdownMenuItem>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="font-semibold text-pink-600">SERVICES</h3>
          <hr className="my-2 border-pink-300" />
          <DropdownMenuItem>Odoo Partner</DropdownMenuItem>
          <DropdownMenuItem>Real Estate</DropdownMenuItem>
          <DropdownMenuItem>Talent Acquisition</DropdownMenuItem>
        </div>

        {/* Column 4: Construction */}
        <div>
          <h3 className="font-semibold text-purple-600">CONSTRUCTION</h3>
          <hr className="my-2 border-purple-300" />
          <DropdownMenuItem>Construction</DropdownMenuItem>
          <DropdownMenuItem>Gardening</DropdownMenuItem>
          <DropdownMenuItem>Solar Energy</DropdownMenuItem>
        </div>

        {/* Column 5: Hospitality */}
        <div>
          <h3 className="font-semibold text-purple-600">HOSPITALITY</h3>
          <hr className="my-2 border-purple-300" />
          <DropdownMenuItem>Bar and Pub</DropdownMenuItem>
          <DropdownMenuItem>Fast Food</DropdownMenuItem>
          <DropdownMenuItem>Fine Dining Restaurant</DropdownMenuItem>
        </div>

        {/* Column 6: Health & Fitness */}
        <div>
          <h3 className="font-semibold text-orange-600">HEALTH & FITNESS</h3>
          <hr className="my-2 border-orange-300" />
          <DropdownMenuItem>Fitness Center</DropdownMenuItem>
          <DropdownMenuItem>Sports Club</DropdownMenuItem>
          <DropdownMenuItem>Wellness Practitioners</DropdownMenuItem>
        </div>
      </div>

      {/* Browse More Section */}
      <div className="mt-6 text-center">
        <a href="#" className="text-purple-700 hover:underline">
          ...and much more!
        </a>
        <br />
        <a href="#" className="flex justify-center items-center mt-2 text-gray-600 hover:underline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.707-8.707a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L6 10.586l2.293-2.293z"
              clipRule="evenodd"
            />
          </svg>
          Browse all Industries
        </a>
      </div>
    </DropdownMenuContent>
  );
};

export default IndustriesDropdown;
