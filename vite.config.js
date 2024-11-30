import { defineConfig } from 'vite';
import React from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [React(), svgr()],
});
