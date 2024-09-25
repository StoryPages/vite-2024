import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import DEFAULT_OPTIONS from './imageOptimizerOptions'
import { ViteEjsPlugin } from 'vite-plugin-ejs'
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap'
import svgoConfig from './svgo.config'

export default defineConfig({
	plugins: [
		// Плагин для создания HTML с минимизацией
		createHtmlPlugin({
			minify: true,
		}),
		// Плагин для оптимизации изображений
		ViteImageOptimizer(DEFAULT_OPTIONS),
		// Плагин для создания SVG-спрайтов
		VitePluginSvgSpritemap('public/svg/**/*.svg', {
			svgSpriteConfig: {
				shape: {
					transform: ['svgo'],
				},
			},
			svgConfig: svgoConfig,
		}),
		// Плагин для статического копирования файлов
		viteStaticCopy({
			targets: [
				{
					src: 'public/images/*',
					dest: 'images',
				},
			],
		}),
		// Плагин для работы с EJS
		ViteEjsPlugin(),
	],

	server: {
		host: '0.0.0.0',
		port: 3000,
		watch: {
			paths: ['views/**/*.ejs'],
		},
	},

	build: {
		outDir: 'dist',
		assetsDir: 'assets',
		rollupOptions: {
			output: {
				assetFileNames: assetInfo => {
					// Настройка имен файлов для SVG
					if (assetInfo.name.endsWith('.svg')) {
						return 'assets/svg/[name]-[hash][extname]'
					}
					return 'assets/[name]-[hash][extname]'
				},
			},
		},
	},
})
