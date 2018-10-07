<template>
  <v-app id="inspire">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            v-if="item.heading"
            :key="item.heading"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }} 
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a :to="'/'" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
          
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text" >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue darken-3"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Admin Contacts</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-avatar size="32px" tile>
          <img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          >
        </v-avatar>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
       
          <router-view></router-view>
        
      </v-container>
    </v-content>
    

  </v-app>
</template>

<script>

  export default {
    data: () => ({
      dialog: false,
      drawer: null,
      items: [
        { icon: 'contacts', link:'Home',text: 'Contacts' },
        { icon: 'history', link:'Home',text: 'Frequently contacted' },
        { icon: 'content_copy', link:'Home',text: 'Duplicates' },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          link:'Home',text: 'Labels',
          model: true,
          children: [
            { icon: 'add', link:'Home',text: 'Create label' }
          ]
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          link:'Home',text: 'More',
          model: false,
          children: [
            { link:'Home',text: 'Import' },
            { link:'Home',text: 'Export' },
            { link:'Home',text: 'Print' },
            { link:'Home',text: 'Undo changes' },
            { link:'Home',text: 'Other contacts' }
          ]
        },
        { icon: 'settings', link:'Home',text: 'Settings' },
        { icon: 'chat_bubble', link:'Home',text: 'Send feedback' },
        { icon: 'help', link:'Home',text: 'Help' },
        { icon: 'phonelink', link:'Home',text: 'App downloads' },
        { icon: 'keyboard', link:'Home',text: 'Go to the old version' }
      ]
    }),
    props: {
      source: String
    }
  }
</script>