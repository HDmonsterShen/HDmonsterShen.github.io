import {
	defaultTheme,
	defineUserConfig
} from 'vuepress';
import {
	prismjsPlugin
} from '@vuepress/plugin-prismjs'
import {
	backToTopPlugin
} from '@vuepress/plugin-back-to-top'
import {
	containerPlugin
} from '@vuepress/plugin-container'
import {
	searchPlugin
} from '@vuepress/plugin-search'
export default defineUserConfig({
	base: '/',
	lang: 'zh-CN',
	title: 'Huidouer',
	description: '这是我的个人知识库',
	markdown: {
		headers: {
			level: [2, 3, 4, 5]
		}
	},
	theme: defaultTheme({
		logo: '/assets/img/heading.png',
		sidebarDepth: 5,
		navbar: [{
			text: '编程语言',
			children: [{
				text: 'Python',
				children: [{
						text: 'Python资源',
						link: '/programming/python/README.md'
					}, {
						text: 'Python学习笔记',
						link: '/programming/python/Python学习笔记.md'
					},
					{
						text: 'Python学习笔记',
						link: '/programming/python/Python学习笔记.md'
					},
					{
						text: 'Python学习笔记',
						link: '/programming/python/Python学习笔记.md'
					},
				]
			}]
		}, {
			text: '开发',
			children: [{
				text: '开发',
				children: [{
					text: '前端框架',
					link: '/develop/frone_end/前端框架.md'
				}]
			}]
		}]
	}),
	plugins: [
		backToTopPlugin(),
		containerPlugin({

		}),
		searchPlugin({
			// 配置项
		})
	]

})