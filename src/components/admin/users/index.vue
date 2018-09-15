<template>
    <div>
        <ul class="list-group" >
          <li v-for="user in users" class="list-group-item d-flex justify-content-between align-items-center">
              {{user.name}}
            <span class="badge badge-primary badge-pill">{{user.id}}</span>
          </li>
        </ul>
    </div>
</template>

<script>
export default {
     data () {
    return {
      users: [],
      user: ''
    }
  },
created: function () {
    this.$http.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.users = response.data;
        console.log(this.users)
      });
  }
}
</script>

<style>

</style>
