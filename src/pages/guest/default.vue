<template>
<v-app light>
    <v-toolbar class="white" fixed>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
      <v-toolbar-items>
      <v-btn depressed small color="primary"  dark href="admin">Admin<v-icon>settings</v-icon></v-btn>
                  <v-btn color="warning" fab dark small>
              <v-icon>account_circle</v-icon>
            </v-btn>
    <v-btn fab dark small color="red">
      <v-icon dark>logout</v-icon>
    </v-btn>
    </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <section>
        <v-container>
          <router-view></router-view>
        </v-container>
      </section>

<v-footer
    fixed
    height="auto"
    color="primary lighten-1"
  >
    <v-layout
      justify-center
      row
      wrap
    >

      <v-flex
        primary
        lighten-2
        py-2
        text-xs-center
        white--text
        xs12
      >
        &copy;2018 — <strong>Vuetify</strong>
      </v-flex>
    </v-layout>
  </v-footer>
    </v-content>
  </v-app>

</template>

<script>
  export default {
    data () {
      return {
        title: 'STEEF',
         links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us'
      ]
      }
    }
  }
</script>
<style>

</style>
