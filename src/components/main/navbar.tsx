'use client';

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

// Import the AppsDropdown, IndustriesDropdown, and CommunityDropdown components
import AppsDropdown from "./appsDropdown"; // Ensure this path is correct
import IndustriesDropdown from "./industriesDropDown"; // Ensure this path is correct
import CommunityDropdown from "./communityDropdown"; // Ensure this path is correct

const Navbar = () => {
  const [isIndustriesOpen, setIndustriesOpen] = useState(false); // For Industries dropdown
  const [isCommunityOpen, setCommunityOpen] = useState(false); // For Community dropdown

  return (
    <nav className="flex items-center justify-between p-2 bg-gray-50 text-black fixed w-full top-0 z-50">
      {/* Logo Image */}
      <div className="flex items-center pl-4">
        <Image
          src="/logo.png"
          alt="Brand Logo"
          width={125}
          height={110}
          className="transform scale-125"
        />
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <div className="flex items-center hover:text-gray-600">
          <AppsDropdown />
        </div>
        <div className="flex items-center hover:text-gray-600">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link" onClick={() => setIndustriesOpen(!isIndustriesOpen)}>
                Industries
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            {isIndustriesOpen && <IndustriesDropdown />} {/* Render IndustriesDropdown */}
          </DropdownMenu>
        </div>
        <div className="flex items-center hover:text-gray-600">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link" onClick={() => setCommunityOpen(!isCommunityOpen)}>
                Community
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            {isCommunityOpen && <CommunityDropdown />} {/* Render CommunityDropdown */}
          </DropdownMenu>
        </div>
        <div className="flex items-center hover:text-gray-600">
          <a href="#" className="hover:underline">
            Pricing
          </a>
        </div>
        <div className="flex items-center hover:text-gray-600">
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      </div>

      {/* Buttons for Sign In and Try It Free */}
      <div className="hidden md:flex space-x-4">
        <Button
          variant="outline"
          className="text-black hover:bg-black hover:text-slate-100"
        >
          Sign In
        </Button>
        <Button variant="outline" className="text-white bg-pink-800 hover:bg-purple-400">
          Try It Free
        </Button>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <Menu className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>

          {/* Mobile Dropdown with 2 Items per Row */}
          <DropdownMenuContent className="w-full max-w-xs mx-auto p-2 bg-white rounded-lg shadow-md grid grid-cols-1 gap-2 sm:grid-cols-2">
            {/* Dropdown Item: Apps */}
            <DropdownMenuItem>
              <div className="flex items-center w-full">
                <AppsDropdown />
              </div>
            </DropdownMenuItem>

            {/* Dropdown Item: Industries */}
            <DropdownMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start">
                    Industries
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full max-w-xs mx-auto p-2 bg-white rounded-lg shadow-md mt-1">
                  <IndustriesDropdown /> {/* Show dropdown for Industries */}
                </DropdownMenuContent>
              </DropdownMenu>
            </DropdownMenuItem>

            {/* Dropdown Item: Community */}
            <DropdownMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start">
                    Communities
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full max-w-xs mx-auto p-2 bg-white rounded-lg shadow-md mt-1">
                  <CommunityDropdown /> {/* Show dropdown for Communities */}
                </DropdownMenuContent>
              </DropdownMenu>
            </DropdownMenuItem>

            {/* Static Links */}
            <DropdownMenuItem>
              <a href="#">Pricing</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#">Contact</a>
            </DropdownMenuItem>

            {/* Sign In Button */}
            <DropdownMenuItem>
              <Button
                variant="outline"
                className="text-black hover:bg-black hover:text-slate-100 w-full"
              >
                Sign In
              </Button>
            </DropdownMenuItem>

            {/* Try It Free Button */}
            <DropdownMenuItem>
              <Button
                variant="outline"
                className="text-white bg-pink-800 hover:bg-pink-600 w-full hover:text-white"
              >
                Try It Free
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};
export default Navbar; 
