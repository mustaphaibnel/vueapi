<template>
  <v-app id="sandbox" :dark="dark">
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :permanent="primaryDrawer.type === 'permanent'"
      :temporary="primaryDrawer.type === 'temporary'"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      absolute
      overflow
      app
    >
    <v-list dense>
        <v-list-tile href="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile href="admin/users/1">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    
    
    </v-navigation-drawer>
    <v-toolbar app absolute :clipped-left="primaryDrawer.clipped">
      <v-toolbar-side-icon @click.stop="primaryDrawer.model = !primaryDrawer.model"
                           v-if="primaryDrawer.type !== 'permanent'"></v-toolbar-side-icon>
      <v-toolbar-title>Admin</v-toolbar-title>
      <v-spacer></v-spacer>


      <v-toolbar-items>
          <v-btn fab dark small color="green">
      <v-icon dark>home</v-icon>
    </v-btn>
         <v-btn fab dark small color="red">
      <v-icon dark>logout</v-icon>
    </v-btn>
    </v-toolbar-items>
    </v-toolbar>
    <v-content>
     <router-view></router-view>
    </v-content>
    <v-footer :fixed="footer.fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>

</template>

<script>
  export default {
    data: () => ({
      dark: true,
      drawers: ['Permanent', 'Persistent', 'Temporary'],
      primaryDrawer: {
        model: null,
        type: 'persistent',
        clipped: true,
        floating: false,
        mini: false
      },
      footer: {
        fixed: false
      }
    })
  }
</script>