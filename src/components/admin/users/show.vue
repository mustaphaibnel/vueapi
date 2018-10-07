<template>
    <div>
<pre>
{{user}}
</pre>

    </div>
</template>

<script>
/* eslint-disable */
import { mapGetters,mapActions } from 'vuex'
export default {
computed:{
    ...mapGetters({
      user: 'user/user'
    })
  },
  methods:{
    ...mapActions({
      getUser: 'user/show'
    })
  },
  created(){
    this.getUser('1');
  }
}
</script>

<style>

</style>


