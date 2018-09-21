<template>
    <div>
<pre>
{{post}}
</pre>

    </div>
</template>

<script>
export default {
     data () {
    return {
      post: ''
    }
  },
created: function () {
    this.$http.get('https://jsonplaceholder.typicode.com/posts/'+this.$route.params.id )
      .then(response => {
        this.post = response.data;
      
      });
  }
}
</script>

<style>

</style>


