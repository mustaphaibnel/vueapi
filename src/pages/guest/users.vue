<template>
    <div>
    <v-breadcrumbs divider="/">
      <v-breadcrumbs-item
        v-for="item in items"
        :key="item.text"
        :disabled="item.disabled"
      >
        {{ item.text }}
      </v-breadcrumbs-item>
    </v-breadcrumbs>
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          text: 'Admin',
          disabled: false
        },
        {
          text: 'Users',
          disabled: false
        }
      ]
    })
  }
</script>

<style>

</style>
