<template>
    <div>
      <br>

      <div>
        {{message}}
      </div>
      <v-btn @click="moins">moiins
      </v-btn>
            <div>
        {{count}}
      </div>

      <v-btn @click="plus">plus
      </v-btn>

            <div>
        {{title}}
      </div>
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
  },
  methods:{
 plus(){
  this.$store.dispatch('plus',3)
 },
 moins(){
   this.$store.dispatch('moins',3)
 }
  },
  computed:{
    
    title(){
      return this.$store.state.post.title
    },
    message(){
      return this.$store.getters.message.toUpperCase()
    },
    
    count(){
      return this.$store.getters.count+112
    }
  }
}
</script>

<style>

</style>
