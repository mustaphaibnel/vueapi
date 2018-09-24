<template>
 <div>
    <br>
    <hr>
<v-btn @click="getPosts">get all</v-btn>
<hr>

  {{ posts }}

<br><br><br><br>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      posts: "post/posts"
    })
  },
  methods: {
    ...mapActions({
      getPosts: "post/index"
    })
  },
  created() {
    this.getPosts();
  }
};
</script>

<style>
</style>
