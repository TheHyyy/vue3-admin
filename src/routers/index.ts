import { createRouter, createWebHistory, RouteRecordRaw,createWebHashHistory,Router } from 'vue-router'
import Layout from "@/layout/index.vue";
// 扩展继承属性
interface extendRoute {
    hidden?:boolean
}

export const constantRoutes: Array<RouteRecordRaw & extendRoute> = [
    // {
    //     path: '/',
    //     name: 'layout',
    //     component: Layout,
    //     redirect: '/home',
    //     children: [
    //         {
    //         path: '/home',
    //         component: () => import('@/views/home/index.vue'),
    //         name: 'home',
    //         meta: { title: '首页', icon: 'House', affix: true ,role:['other']}
    //         },
    //     ]
    // },
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        hidden:true,
    },
    {
        path: "/403",
        name: "403",
        component: () => import("@/views/errorPages/403.vue"),
        hidden:true,
    },
]

/**
 * notFoundRouter(找不到路由)
 */
export const notFoundRouter = {
    path: '/:pathMatch(.*)',
    name: "notFound",
    redirect: '/404'
};


const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL), // history
  history: createWebHashHistory(), // hash
  routes:constantRoutes
})

export default router
