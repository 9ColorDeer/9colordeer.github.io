import Layout from '@/components/layout';
import IMAGE_CASE from '@/assets/case.jpg';
import initalCases from '@/assets/mock.json';
import Fancybox from '@/components/fancybox';
import { useState } from 'react';

const initalCategorys = [
  {
    id: 0,
    category: '全部',
  },
  {
    id: 1,
    category: '企业宣传片',
  },
  {
    id: 2,
    category: '影视广告',
  },
  {
    id: 3,
    category: '微电影',
  },
  {
    id: 4,
    category: '短视频',
  },
];

export default function CasePage() {
  const [categoryIndex, setCategoryIndex] = useState(0);

  const [cases, setCases] = useState(initalCases);

  const onClick = ({ id, category }: { id: number; category: string }) => {
    setCases(
      initalCases
        .filter((v) => v.category?.includes(category) || id === 0)
        .sort((a, b) => (Math.random() > 0.5 ? 1 : -1)),
    );
    setCategoryIndex(id);
  };

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
              {initalCategorys.map((item) => (
                <div
                  key={item.id}
                  className={`mx-2 py-2 px-4 cursor-pointer | ${
                    categoryIndex === item.id
                      ? 'bg-indigo-500 rounded-full text-white shadow'
                      : ''
                  }`}
                  onClick={() => onClick(item)}
                >
                  {item.category}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <Fancybox>
              {cases.map((item, key) => (
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
