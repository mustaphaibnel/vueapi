<template>
 <div>
    <br>
    <hr>
<v-btn @click="getPosts">get all</v-btn>
<hr>

<ul>
<div v-for="myposts in posts" :key="myposts">
  <li v-for="post in myposts" :key="post.id">
{{post.id}}
  </li>
</div>
</ul>
<br><br><br><br>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {

  computed:{
    ...mapGetters({
      posts: 'post/posts',
    }),
    posts(posts){
      return posts[0]
    }
  },
  methods:{
    ...mapActions({
      getPosts: 'post/index',
    })
  },
  created(){
    this.getPosts();
  }
}
</script>

<style>

</style>
