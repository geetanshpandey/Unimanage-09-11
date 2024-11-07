import Image from 'next/image';
import Checked from '@/app/icons/checked.png';
import Unchecked from '@/app/icons/red-flag.png';

export default function OdooComparison() {
  return (
    <div className="bg-white py-10 pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-16 mt-16 text-gray-800">
          Why Choose <span className="text-emerald-700">Unimanage?</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-between md:space-x-28 space-y-6 md:space-y-0">
          {/* Section: With Unimanage */}
          <div className="flex-1 mx-2 p-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-102 text-center border border-gray-200">
            <h3 className="text-emerald-800 text-xl font-semibold mb-1">With Unimanage</h3>
            <p className="text-gray-700 text-sm mb-4">Transform your business effortlessly</p>

            {/* Table */}
            <div className="mx-auto max-w-xs">
              <table className="table-auto w-full text-left">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-emerald-800 font-medium">Benefits</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Greater Flexibility",
                    "Specialized Solutions",
                    "Simplicity in Use",
                    "Comprehensive Vendor Support",
                    "Fewer Customization Challenges",
                  ].map((text, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="px-4 py-2">{text}</td>
                      <td className="px-4 py-2 text-center">
                        <Image src={Checked} alt="Yes" width={20} height={20} className="inline-block" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-emerald-600 text-sm font-medium mt-4">Get extraordinary features at affordable pricing.</p>
          </div>

          {/* Section: Without Unimanage */}
          <div className="flex-1 mx-2 p-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-102 text-center border border-gray-200">
            <h3 className="text-rose-800 text-xl font-semibold mb-1">Without Unimanage</h3>
            <p className="text-gray-700 text-sm mb-4">Takes a lot of effort.</p>

            {/* Table */}
            <div className="mx-auto max-w-xs">
              <table className="table-auto w-full text-left">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-rose-800 font-medium">Challenges</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Lack of Integration",
                    "Higher Operational Costs",
                    "Complicated Data Migration",
                    "Inconsistent User Experience",
                    "Scalability Issues",
                  ].map((text, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="px-4 py-2">{text}</td>
                      <td className="px-4 py-2 text-center">
                        <Image src={Unchecked} alt="No" width={20} height={20} className="inline-block" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-rose-600 text-sm font-medium mt-4">Limited features, scattered solutions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
