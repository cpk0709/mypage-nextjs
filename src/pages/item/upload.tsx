import type { NextPage } from 'next';
import SquareStretchButton from '@/components/atom/SquareStretchButton';
import AddImageIcon from '@/components/atom/icons/AddImageIcon';
import Layout from '@/components/common/layout';
import Input from '@/components/molecules/Input';
import Textarea from '@/components/organisms/Textarea';

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
        <Textarea label='Description' name='description'/>
        <SquareStretchButton
          btnText="Upload product"
          buttonStyle={['mt-4', 'text-sm']}
        />
      </div>
    </Layout>
  );
};

export default Upload;
