/* eslint-disable */
import { defineConfig } from 'vite';
import svgr from '@honkhonk/vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import analyze from 'rollup-plugin-analyzer';
import fs from 'fs/promises';
import eslint from 'vite-plugin-eslint';
import { theme } from './src/theme/theme';
const path = require('path');

export default defineConfig(() => ({
  server: {
    open: true,
    host: true,
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': theme.primary.main,
        },
      },
    },
  },
  build: {
    sourcemap: false,
    outDir: 'build',
  },
  optimizeDeps: {
    include: ['antd'],
    esbuildOptions: {
      plugins: [
        {
          name: 'load-js-files-as-jsx',
          setup(build) {
            build.onLoad({ filter: /.*\.js$/ }, async args => ({
              loader: 'jsx',
              contents: await fs.readFile(args.path, 'utf8'),
            }));
          },
        },
      ],
    },
  },
  plugins: [
    svgr(),
    react(),
    eslint(),
    analyze({ summaryOnly: true }), // enable for show analyze build file
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: /^~/, replacement: '' },
    ],
  },
}));
