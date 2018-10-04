import PostProvider from './post_provider'

// Give arg to provider to start endpoint with specific path for example = xxx.com/api/person

export const PostService = new PostProvider('posts')
