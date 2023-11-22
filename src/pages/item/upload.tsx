import type { NextPage } from 'next';
import SquareStretchButton from '@/components/atom/SquareStretchButton';
import AddImageIcon from '@/components/atom/icons/AddImageIcon';
import Layout from '@/components/common/layout';

const Upload: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 py-16">
        <div>
          <label className="w-ful cursor-pointer text-gray-600 hover:text-orange-500 hover:border-orange-500 flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md">
            <AddImageIcon />
            <input type="file" className="hidden" />
          </label>
        </div>
        <div className="my-5">
          <label
            className="text-sm mb-1 block font-medium text-gray-900"
            htmlFor="price"
          >
            Price
          </label>
          <div className="rounded-md relative shadow-sm flex items-center">
            <div className="absolute left-0 pl-3 flex items-center justify-center pointer-events-none">
              <span className="text-gray-500 text-sm">$</span>
            </div>
            <input
              id="price"
              className="pl-7 rounded-md appearance-none w-full px-3 py-2 border border-solid border-gray-300 rounded-r-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              type="text"
              placeholder="0.00"
            />
            <div className=" absolute right-0 pr-3 flex items-center pointer-events-none">
              <span className=" text-gray-500">USD</span>
            </div>
          </div>
        </div>
        <div>
          <label
            className="text-sm mb-1 block font-medium text-gray-900"
            htmlFor="description"
          >
            Description
          </label>
          <div>
            <textarea
              className="mt-1 shadow-sm w-full focus:outline-none  focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
              id="description"
              rows={4}
            />
          </div>
        </div>
        <SquareStretchButton
          btnText="Upload product"
          buttonStyle={['mt-4', 'text-sm']}
        />
      </div>
    </Layout>
  );
};

export default Upload;
