import type { NextPage } from 'next';
import SquareStretchButton from '@/components/atom/SquareStretchButton';
import AddImageIcon from '@/components/atom/icons/AddImageIcon';
import Layout from '@/components/common/layout';
import Input from '@/components/molecules/Input';

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
        <Input label="price" name="price" kind="price" />
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
