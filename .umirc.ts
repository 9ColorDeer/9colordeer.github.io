import { defineConfig } from 'umi';

export default defineConfig({
  title: '九色鹿传媒',
  ssr: {},
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
