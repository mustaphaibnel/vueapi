<template>
    <div>
<pre>
{{post}}
</pre>

    </div>
</template>

<script>
/* eslint-disable */
import { mapGetters,mapActions } from 'vuex'
export default {
computed:{
    ...mapGetters({
      post: 'post/post'
    })
  },
  methods:{
    ...mapActions({
      getPost: 'post/show'
    })
  },
  created(){
    this.getPost('1');
  }
}
</script>

<style>

</style>


