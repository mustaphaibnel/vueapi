<template>
<v-app light>
    <v-toolbar class="white" fixed>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Contact</v-btn>
      <v-btn flat>Groupe</v-btn>
      <v-btn flat>Blog</v-btn>
    </v-toolbar-items>
      <v-toolbar-items>
      <v-btn fab dark small color="green">
      <v-icon dark>settings</v-icon>
      </v-btn>
                  <v-btn color="black" fab dark small>
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
        title: 'HCP',
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
