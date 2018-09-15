<template>
    <div>
<pre>
{{user}}
</pre>

    </div>
</template>

<script>
export default {
     data () {
    return {
      user: ''
    }
  },
created: function () {
    this.$http.get('https://jsonplaceholder.typicode.com/users/'+this.$route.params.id )
      .then(response => {
        this.user = response.data;
        console.log(this.user)
      });
  }
}
</script>

<style>

</style>


