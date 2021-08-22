import Layout from '@/components/layout';
import IMAGE_ORGS from '@/assets/orgs.png';
import MOCK from '@/assets/mock.json';
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import './index.css';

export default function IndexPage() {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <Layout>
      <section className="text-gray-400 relative body-font">
        <div className="w-full absolute top-0 left-0 z-20 overflow-hidden bg-indigo-900 h-screen">
          <video className="w-full invisible lg:visible" autoPlay muted loop>
            <source src="https://jiuselu-1257697918.cos.ap-guangzhou.myqcloud.com/%E6%96%B0%E5%A2%9E%E8%A7%86%E9%A2%91/%E6%8B%8D%E6%91%84%E8%8A%B1%E7%B5%AE%E5%89%AA%E8%BE%91-%E4%B9%9D%E8%89%B2%E9%B9%BF%E4%BC%A0%E5%AA%92.mp4" />
          </video>
          <div className="w-full absolute top-0 left-0 bg-black bg-opacity-75 z-30 h-full"></div>
        </div>
        <div className="w-full h-screen absolute top-0 left-0 z-40">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-end justify-end h-full">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="relative title-font sm:text-6xl text-3xl mb-4 font-medium text-white">
                <span className="text-indigo-500 absolute -top-10 left-0">
                  ”
                </span>
                九色鹿传媒
                <br className="hidden lg:inline-block" />
                专注于创意影视广告方案{' '}
                <span className="text-indigo-500">”</span>
              </h1>
              <p className="mb-8 leading-relaxed text-2xl">
                为企业提供专业的影视广告创意传播方案及制作服务，助力企业品牌升级！
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg cursor-pointer">
                  沟通需求
                </button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-full text-lg cursor-pointer">
                  获取报价
                </button>
              </div>
            </div>
            <div className="w-8 h-12 rounded-full border border-solid border-gray-300 flex flex-col justify-start items-center pt-2">
              <div className="w-1 h-3 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="text-gray-600 body-font bg-gray-200"
        style={{ paddingTop: '100vh' }}
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              合作案例
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              我们针对不同行业的合作伙伴量身定制了品牌营销影视解决方案
            </p>
          </div>
          <LightGallery
            elementClassNames="flex flex-wrap -m-4"
            onInit={onInit}
            speed={500}
          >
            {MOCK.map((item, key) => (
              <a
                key={key}
                className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer"
                data-lg-size="1280-720"
                data-video='{"source": [{"src":"https://jiuselu-1257697918.cos.ap-guangzhou.myqcloud.com/%E4%BD%9C%E5%93%81%E5%8A%A0logo/%E5%8D%8E%E4%B8%BA%E5%B9%B3%E6%9D%BF%E6%AD%A6%E4%BE%A0%E7%AF%87%E5%B8%A6logo.mp4", "type":"video/mp4"}], "tracks": [{"src": "{/videos/title.txt", "kind":"captions", "srclang": "en", "label": "English", "default": "true"}], "attributes": {"preload": false, "controls": true}}'
                data-poster="https://jiuselu-1257697918.cos-website.ap-guangzhou.myqcloud.com/作品截图裁剪后/华为平板广告武侠篇.png"
                data-sub-html="<h4>Thank You!</h4><p> Sample Wistia video </p>"
              >
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={item.post}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-solid border-4 border-indigo-500 bg-white bg-opacity-90 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                      THE SUBTITLE
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {item.name}
                    </h1>
                    <p className="leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </LightGallery>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">
              九色鹿传媒创立于经济特区深圳，集结了一批实干有梦想有追求的精英团队，我们长期服务于华为、网易、荣耀、TCL、电信等品牌企业，为企业提供专业的影视广告
              创意方案及拍摄制作服务，我们始终以客户诉求为出发点，将客户的最初诉求打造为极具创意和营收价值的影片，帮助客户抢占和巩固品牌领导者的位置。
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              https://www.9colordeer.cn/
            </h2>
            <p className="text-gray-500">九色鹿传媒</p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              合作伙伴
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              我们的客户与合作伙伴来自多个行业以及细分领域
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img className="w-2/3" src={IMAGE_ORGS} />
          </div>
        </div>
      </section>
    </Layout>
  );
}
