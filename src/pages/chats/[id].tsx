import Layout from '@/components/common/layout';
import type { NextPage } from 'next';
import Message from '@/components/organisms/Message';

const ChatDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="py-10 px-4 space-y-4">
        <Message message="Hi how much are you selling them for?" />
        <Message message="I want ￦20,000" reversed />
        <Message message="미쳤어?" />
        {/* <div className="fixed w-full mx-auto max-w-md bottom-2">
          <div className="flex relative items-center">
            <input
              type="text"
              className=" shadow-sm rounded-full w-full border border-solid border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 pr-12"
            />
            <div className=" absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
              <button className="flex items-center focus:ring-2 focus:ring-offset-2 focus:ring-orange-500  bg-orange-500 rounded-full px-3 text-sm  text-white hover:bg-orange-600">
                &rarr;
              </button>
            </div>
          </div>
        </div> */}
        <form className="fixed py-2 bg-white  bottom-0 inset-x-0">
          <div className="flex relative max-w-md items-center  w-full mx-auto">
            <input
              type="text"
              className="shadow-sm rounded-full w-full border-solid border-gray-300 focus:ring-orange-500 focus:outline-none pr-12 focus:border-orange-500"
            />
            <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
              <button className="flex focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 items-center bg-orange-500 rounded-full px-3 hover:bg-orange-600 text-sm text-white">
                &rarr;
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ChatDetail;
