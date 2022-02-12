import { defineConfig, IConfig } from 'dumi';

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production' && process.env.PREVIEW_PR !== 'true';
const base = isProd ? '/react-turn/' : '/';

export default defineConfig({
  outputPath: 'site',
  exportStatic: isProd ? {} : false,
  title: 'React Turn',
  mode: 'site',
  favicon: base + 'favicon.png',
  logo: base + 'favicon.png',
  resolve: {
    passivePreview: true,
  },
  copy: ['static'],
  hash: isProd,
  base,
  publicPath: isProd ? 'https://cdn.jsdelivr.net/gh/bijinfeng/react-turn@gh-pages/' : '/',
  sitemap: {
    hostname: 'https://bijinfeng.github.io/react-turn/',
  }
} as IConfig);
