export default {
    name: 'disney',
    component: () => import(/* webpackChunkName: "disney" */ '@/modules/disney/layouts/DisneyLayout.vue'),
    children: [{
        path: '',
        name: 'general-view',
        component: () => import(/* webpackChunkName: "disney-general-view" */ '@/modules/disney/views/GeneralView.vue'),
        meta: {
            key: 1
        }
    },
    {
        path: 'search/:id',
        name: 'search-character',
        component: () => import(/* webpackChunkName: "disney-search-character" */ '@/modules/disney/views/SearchCharacter.vue'),
        meta: {
            key: 2
        }
    },
    ]
}