import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AppsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Add padding to body to compensate for scrollbar
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      // Delay the reset of body padding and overflow to avoid layout shift before animation ends
      setTimeout(() => {
        document.body.style.paddingRight = "";
        document.body.style.overflow = "";
      }, 300); // Adjust the delay based on the dropdown animation duration (e.g., 300ms)
    }

    // Cleanup on unmount
    return () => {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <DropdownMenu onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={`flex items-center focus:outline-none focus:ring-0 ${
            isOpen ? "border-b-2 border-blue-500" : ""
          }`}
        >
          Apps
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      {/* Dropdown Content */}
      <DropdownMenuContent
        className="w-full max-w-4xl mt-2 bg-white border border-gray-200 shadow-lg rounded-md p-4 z-50 overflow-y-auto max-h-[400px]"
        align="start"
        sideOffset={10}
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {" "}
          {/* Responsive grid */}
          {/* Finance Section */}
          <div>
            <h3 className="font-semibold text-gray-700">FINANCE</h3>
            <hr className="my-2 border-gray-300" />
            <div className="space-y-1">
              <Link href="/finance/accounting">
                <DropdownMenuItem>Accounting</DropdownMenuItem>
              </Link>
              <Link href="/finance/invoicing">
                <DropdownMenuItem>Invoicing</DropdownMenuItem>
              </Link>
              <DropdownMenuItem>Expenses</DropdownMenuItem>
              <DropdownMenuItem>Spreadsheet (BI)</DropdownMenuItem>
              <DropdownMenuItem>Documents</DropdownMenuItem>
              <DropdownMenuItem>Sign</DropdownMenuItem>
            </div>
          </div>
          {/* Sales Section */}
          <div>
            <h3 className="font-semibold text-gray-700">SALES</h3>
            <hr className="my-2 border-gray-300" />
            <div className="space-y-1">
              <DropdownMenuItem>CRM</DropdownMenuItem>
              <DropdownMenuItem>Sales</DropdownMenuItem>
              <DropdownMenuItem>POS Shop</DropdownMenuItem>
              <DropdownMenuItem>POS Restaurant</DropdownMenuItem>
              <DropdownMenuItem>Subscriptions</DropdownMenuItem>
              <DropdownMenuItem>Rental</DropdownMenuItem>
            </div>
          </div>
          {/* Websites Section */}
          <div>
            <h3 className="font-semibold text-gray-700">WEBSITES</h3>
            <hr className="my-2 border-gray-300" />
            <div className="space-y-1">
              {/* FOR GEETANSH LINK ERROR FIX */}
              <Link href="/website/builder">
                <DropdownMenuItem>Website Builder</DropdownMenuItem>
              </Link>
              <Link href="/website/eccomerce">
                <DropdownMenuItem>eCommerce</DropdownMenuItem>
              </Link>
              <DropdownMenuItem>Blog</DropdownMenuItem>
              <DropdownMenuItem>Forum</DropdownMenuItem>
              <DropdownMenuItem>Live Chat</DropdownMenuItem>
              <DropdownMenuItem>eLearning</DropdownMenuItem>
            </div>
          </div>
          {/* Supply Chain Section */}
          <div>
            <h3 className="font-semibold text-gray-700">SUPPLY CHAIN</h3>
            <hr className="my-2 border-gray-300" />
            <div className="space-y-1">
              <DropdownMenuItem>Inventory</DropdownMenuItem>
              <DropdownMenuItem>Manufacturing</DropdownMenuItem>
              <DropdownMenuItem>PLM</DropdownMenuItem>
              <DropdownMenuItem>Purchase</DropdownMenuItem>
              <DropdownMenuItem>Maintenance</DropdownMenuItem>
              <DropdownMenuItem>Quality</DropdownMenuItem>
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AppsDropdown;
