// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://arch-evolve.pages.dev',
	integrations: [
		starlight({
			title: 'ArchEvolve',
			description: '架构演进：从分布式系统到 AI 应用架构',
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			customCss: ['./src/styles/custom.css'],
			lastUpdated: true,
			sidebar: [
				{
					label: '开始',
					items: [
						{ label: '关于架构演进', slug: 'start-here' },
					],
				},
				{
					label: '分布式系统',
					items: [{ autogenerate: { directory: 'distributed-systems' } }],
				},
				{
					label: 'AI 应用架构',
					items: [{ autogenerate: { directory: 'ai-application' } }],
				},
				{
					label: '项目实践',
					items: [{ autogenerate: { directory: 'projects' } }],
				},
				{
					label: '关于',
					items: [{ label: '关于本站', slug: 'about' }],
				},
			],
		}),
	],
});
