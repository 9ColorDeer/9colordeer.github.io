import Layout from '@/components/layout';
import IMAGE_CASE from '@/assets/case.jpg';
import MOCK from '@/assets/mock.json';
import Fancybox from '@/components/fancybox';

export default function CasePage() {
  return (
    <Layout>
      <section className="pb-64">
        <div
          className="w-full absolute top-0 left-0 h-96 bg-fixed bg-gray-800"
          style={{
            backgroundImage: `url(${IMAGE_CASE})`,
            filter: 'brightness(60%)',
          }}
        ></div>
        <div className="w-full absolute top-0 left-0 h-96 flex flex-col justify-center items-center">
          <h2 className="text-5xl text-white">「 案例展示 」</h2>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto relative">
          <div className="absolute -top-10 w-full flex">
            <div className="flex bg-white px-1 py-2 shadow rounded-full m-auto">
              ['全部', '企业宣传片']
              <div className="mx-2 py-2 px-4 cursor-pointer | bg-indigo-500 rounded-full text-white shadow">
                全部
              </div>
              <div className="mx-2 py-2 px-4 cursor-pointer">企业宣传片</div>
              <div className="mx-2 py-2 px-4 cursor-pointer">影视广告</div>
              <div className="mx-2 py-2 px-4 cursor-pointer">微电影</div>
              <div className="mx-2 py-2 px-4 cursor-pointer">短视频</div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <Fancybox>
              {MOCK.map((item, key) => (
                <div
                  key={key}
                  className="lg:w-1/4 md:w-1/2 p-4 w-full rounded"
                  data-fancybox="gallery"
                  data-src={item.video}
                >
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block transform scale-100 hover:scale-110 transition-all duration-300 ease-in-out "
                      src={item.post}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CASES SHOW
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {item.name}
                    </h2>
                    <p className="mt-1">微电影</p>
                  </div>
                </div>
              ))}
            </Fancybox>
          </div>
        </div>
      </section>
    </Layout>
  );
}
