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


import AdminPosts from '../pages/admin/posts'
import AdminPostsIndex from '../components/admin/posts/index'
import AdminPostsShow from '../components/admin/posts/show'




const routes = [
    { path: '/', components: { 
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
            }
        ]
        }

    ]
    }
	
]
export default routes