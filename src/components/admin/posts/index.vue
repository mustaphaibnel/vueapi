<template>
 <div>
    <br>
    <hr>
<v-btn @click="getPosts">get all</v-btn>

<v-btn @click="getPost">get one</v-btn>
<pre>
      {{post}}
    </pre>
    <h1>
      Posts
    </h1>
    <pre>
      {{posts}}
    </pre>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {

  computed:{
    ...mapGetters({
      posts: 'post/posts',
      post: 'post/post'
    })
  },
  methods:{
    ...mapActions({
      getPosts: 'post/getPosts',
      getPost: 'post/getPost'
    })
  }
}
</script>

<style>

</style>
