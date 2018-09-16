//guest 
 import GuestHome  from "../pages/guest/default"
//child guest
 import GuestUsers from '../pages/guest/users'
//child of user
 import GuestUsersIndex from '../components/admin/users/index'
 import GuestUsersShow from '../components/admin/users/show'


 import GuestPosts from '../pages/guest/posts'
 import GuestPostsIndex from '../components/admin/posts/index'
 import GuestPostsShow from '../components/admin/posts/show'

// admin 
import AdminHome from '../pages/admin/default'
//child admin
import AdminUsers from '../pages/admin/users'
//child of user
import AdminUsersIndex from '../components/admin/users/index'
import AdminUsersShow from '../components/admin/users/show'
import AdminUsersEdit from '../components/admin/users/edit'
import AdminUsersDelete from '../components/admin/users/delete'

import AdminPosts from '../pages/admin/posts'
import AdminPostsIndex from '../components/admin/posts/index'
import AdminPostsShow from '../components/admin/posts/show'
import AdminPostsEdit from '../components/admin/posts/edit'
import AdminPostsDelete from '../components/admin/posts/delete'



const routes = [
    { path: '/', name:'GuestHome',components: { 
        default: GuestHome,
        
	},
	children: [
        {
          path: 'users',
			components: { 
			default: GuestUsers,
		},
		children: [
			{
				path: '',
				component: GuestUsersIndex
			},
			{
				path: ':id',
				component: GuestUsersShow
			}
		]
		},
		{
		path: 'posts',
			components: { 
			default: GuestPosts,
		},
		children: [
			{
				path: '',
				component: GuestPostsIndex
			},
			{
				path: ':id',
				component: GuestPostsShow
			}
		]
		}

	]
	},
	{ path: '/admin', components: { 
        default: AdminHome,
    },
    children: [
        {
          path: 'users',
            components: { 
            default: AdminUsers,
        },
        children: [
            {
                path: '',
                component: AdminUsersIndex
            },
            {
                path: ':id',
                component: AdminUsersShow
            },
            {
                path: ':id/edit',
                component: AdminUsersEdit
            },
            {
                path: ':id/delete',
                component: AdminUsersDelete
            }
        ]
        },
        {
        path: 'posts',
            components: { 
            default: AdminPosts,
        },
        children: [
            {
                path: '',
                component: AdminPostsIndex
            },
            {
                path: ':id',
                component: AdminPostsShow
            },
            {
                path: ':id/edit',
                component: AdminPostsEdit
            },
            {
                path: ':id/delete',
                component: AdminPostsDelete
            }
        ]
        }

    ],
    meta: { requiresAuth: true} 
    },
    { 
        path: '*',
        redirect:{name:'GuestHome'}
    }
	
]
export default routes