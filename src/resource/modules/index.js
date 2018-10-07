import PostProvider from './post_provider'
import UserProvider from './user_provider'

// Give arg to provider to start endpoint with specific path for example = xxx.com/api/person

export const PostService = new PostProvider('posts')
export const UserService = new UserProvider('users')
