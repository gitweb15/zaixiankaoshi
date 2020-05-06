import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Home',
		component: () => import('../views/home.vue')
	},
	{
		path: '/kaoshi',
		name: 'Kaoshi',
		component: () => import('../views/kaoshi.vue')
	},
	{
		path: '/lianxi',
		name: 'Lianxi',
		component: () => import('../views/lianxi.vue')
	},
	{
		path: '/peixun',
		name: 'Peixun',
		component: () => import('../views/peixun.vue')
	},
	{
		path: '/admin',
		name: 'Admin',
		component: () => import('../views/admin.vue')
	},
	{
		path: '/baobiao',
		name: 'Baobiao',
		component: () => import('../views/baobiao.vue'),
		redirect: '/kaoshichengji',
		children: [{
				path: '/kaoshichengji',
				name: 'Kaoshichengji',
				component: () => import('../components/kaoshichengji.vue')
			}, {
				path: '/quexitongji',
				name: 'Quexitongji',
				component: () => import('../components/quexitongji.vue')
			}, {
				path: '/lessonanalysis',
				name: 'Lessonanalysis',
				component: () => import('../components/lessonanalysis.vue')
			}, {
				path: 'statistical',
				component: () => import('@/components/statistical'),

			},
			{
				path: 'practice',
				component: () => import('@/components/practice'),

			}
		]
	},
	{
		path: '/register',
		name: 'register',
		component: () => import('../views/register.vue')
	}, {
		path: '/questions',
		name: 'questions',
		component: () => import('../views/questions.vue')
	}, , {
		path: '/core',
		name: 'core',
		component: () => import('../views/core.vue')
	}, {
		path: '/Examinee',
		name: 'Examinee',
		component: () => import('../views/Examinee.vue')
	}, {
		path: '/SubAdministrator',
		name: 'SubAdministrator',
		component: () => import('../views/SubAdministrator.vue'),
		children: [{
			path: 'ziliuyou',
			name: 'ziliuyou',
			component: () => import('../components/ziliuyou.vue')
		}]
	}, {
		path: '/Report',
		name: 'Report',
		component: () => import('../views/Report.vue'),
		children: [{
			path: 'Analysis',
			name: 'Analysis',
			component: () => import('../components/Analysis.vue')
		}, {
			path: 'judgepaper',
			name: 'judgepaper',
			component: () => import('../components/judgepaper.vue')
		}, {
			path: 'IntegralAnalysis',
			name: 'IntegralAnalysis',
			component: () => import('../components/IntegralAnalysis.vue')
		}]
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
