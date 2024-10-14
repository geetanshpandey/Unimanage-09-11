"use client";

import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const CommunityDropdown = () => {
  return (
    <DropdownMenuContent
      className="absolute w-[800px] sm:w-[1000px] bg-white border border-gray-200 shadow-lg z-50"
      align="center"
      sideOffset={10}
      style={{
        padding: '1.5rem',
        left: '50%', // Start from the middle of the trigger
        transform: 'translateX(-50%)', // Shift back by 50% of the dropdown width to center it
        maxHeight: '400px', // Set a maximum height for mobile view
        overflowY: 'auto', // Enable scrolling when content exceeds max height
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-gray-800">
        {/* Column 1: Community A */}
        <div>
          <h3 className="font-semibold text-blue-700">COMMUNITY A</h3>
          <hr className="my-2 border-blue-300" />
          <DropdownMenuItem>Event Planning</DropdownMenuItem>
          <DropdownMenuItem>Networking</DropdownMenuItem>
          <DropdownMenuItem>Local Groups</DropdownMenuItem>
        </div>

        {/* Column 2: Community B */}
        <div>
          <h3 className="font-semibold text-orange-600">COMMUNITY B</h3>
          <hr className="my-2 border-orange-300" />
          <DropdownMenuItem>Online Forums</DropdownMenuItem>
          <DropdownMenuItem>Support Groups</DropdownMenuItem>
          <DropdownMenuItem>Volunteer Opportunities</DropdownMenuItem>
        </div>

        {/* Column 3: Community C */}
        <div>
          <h3 className="font-semibold text-pink-600">COMMUNITY C</h3>
          <hr className="my-2 border-pink-300" />
          <DropdownMenuItem>Workshops</DropdownMenuItem>
          <DropdownMenuItem>Classes</DropdownMenuItem>
          <DropdownMenuItem>Community Events</DropdownMenuItem>
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
          Browse all Communities
        </a>
      </div>
    </DropdownMenuContent>
  );
};

export default CommunityDropdown;
