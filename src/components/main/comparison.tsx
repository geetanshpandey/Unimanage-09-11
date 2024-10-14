import Image from 'next/image'; // Ensure Image is imported from 'next/image'
import Checked from '@/app/icons/checked.png'; // Import your checked icon
import Unchecked from '@/app/icons/red-flag.png'; // Import your unchecked icon
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function OdooComparison() {
  return (
    <div className="bg-white py-10 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-black pb-4">
          Why Choose <span className="text-pink-800">Unimanage?</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
          {/* Card: With Unimanage */}
          <Card className="flex-1 mx-2 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <div className="h-full flex flex-col justify-center items-center text-center bg-gradient-to-b from-emerald-100 to-white rounded-xl">
              <CardHeader>
                <CardTitle className="text-emerald-800 text-2xl">With Unimanage</CardTitle>
                <CardDescription className='text-black'>Transform your business effortlessly</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-none space-y-2 font-bold text-left">
                  {[
                    "Greater Flexibility",
                    "Specialized Solutions",
                    "Simplicity in Use",
                    "Comprehensive Vendor Support",
                    "Fewer Customization Challenges",
                  ].map((text, index) => (
                    <li key={index} className="flex items-center text-emerald-700">
                      <Image src={Checked} alt="Checked" width={24} height={24} className="mr-2" />
                      {text}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="text-cyan-900">It provides you extraordinary features at affordable pricing.</CardFooter>
            </div>
          </Card>

          {/* Card: Without Unimanage */}
          <Card className="flex-1 mx-2 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <div className="h-full flex flex-col justify-center items-center text-center bg-gradient-to-b from-red-100 to-white rounded-xl">
              <CardHeader>
                <CardTitle className="text-rose-900 text-2xl">Without Unimanage</CardTitle>
                <CardDescription className='text-black'>Takes a lot of effort.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-none space-y-2 font-bold text-left">
                  {[
                    "Lack of Integration",
                    "Higher Operational Costs",
                    "Complicated Data Migration",
                    "Inconsistent User Experience",
                    "Scalability Issues",
                  ].map((text, index) => (
                    <li key={index} className="flex items-center text-rose-700">
                      <Image src={Unchecked} alt="Unchecked" width={24} height={24} className="mr-2" />
                      {text}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="text-rose-900">You will not be able to get all features at one place.</CardFooter>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
