<template>
    <div>
        <ul class="list-group" >
          <li
          v-for="post in posts" 
          class="list-group-item d-flex justify-content-between align-items-center"
          :key="post.id">
              {{post.title}}
            <span class="badge badge-primary badge-pill">{{post.id}}</span>
          </li>
        </ul>
    </div>
</template>

<script>
export default {
     data () {
    return {
      posts: [],
      post: ''
    }
  },
created: function () {
    this.$http.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.posts = response.data;
        //console.log(this.posts)
      });
  }
}
</script>

<style>

</style>
