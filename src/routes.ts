import type { RouteRecordRaw } from 'vue-router'

import IndexView from './components/views/Index.vue'
import LogView from './components/views/Log.vue'
import TagsView from './components/views/Tags.vue'
import NotFoundView from './components/views/NotFoundView.vue'

export default [
    {
        path: '/',
        component: IndexView,
        name: 'Home'
    },
    {
        path: '/log/:id',
        component: LogView,
        name: 'Log'
    },
    {
        path: '/tags',
        component: TagsView,
        name: 'Tags'
    },
    {
        path: '/:anyway(.*)*',
        component: NotFoundView,
        name: 'Not Found'
    }
] as RouteRecordRaw[]
