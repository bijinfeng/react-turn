import { defineConfig, IConfig } from 'dumi';

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production' && process.env.PREVIEW_PR !== 'true';

export default defineConfig({
  outputPath: 'site',
  exportStatic: isProd ? {} : false,
  title: 'React Turn',
  mode: 'site',
  favicon: 'http://www.turnjs.com/pics/favicon.png',
  logo: 'http://www.turnjs.com/pics/favicon.png',
  resolve: {
    passivePreview: true,
  },
  hash: isProd,
  base: isProd ? '/react-turn/' : '/',
  publicPath: isProd ? 'https://cdn.jsdelivr.net/gh/bijinfeng/react-turn@gh-pages/' : '/',
  sitemap: {
    hostname: 'https://bijinfeng.github.io/react-turn/',
  }
} as IConfig);
