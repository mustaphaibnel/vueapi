<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>POSTS</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
            <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      
      <v-dialog v-model="dialog" max-width="100%">
        <v-btn slot="activator" color="success"  class="mb-2" fab dark >
          <v-icon>
            add
          </v-icon>
        </v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.title" label="Dessert title"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.body" label="Body"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.userId" label="UserId (g)"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.id" label="ID (g)"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn  class="red" flat @click.native="close" dark>Cancel</v-btn>
            <v-btn  class="primary" flat @click.native="save" dark>Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="posts"
      
      class="elevation-1"
      :search="search"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.title }}</td>
        <td class="text-xs-left">{{ props.item.body }}</td>
        <td class="text-xs-left">{{ props.item.userId }}</td>
        <td class="text-xs-left">{{ props.item.id }}</td>
        <td class="justify-center layout px-0">
          <v-btn  class="primary" @click="editItem(props.item)" fab small dark>
          <v-icon
            small
            class="mr-2"
            
          >
            edit
          </v-icon>
          </v-btn>
 <v-btn  class="red" @click="deleteItem(props.item)" fab small dark>
          <v-icon
            small
            
          >
            delete
          </v-icon>
 </v-btn>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
  export default {
    data: () => ({
      search:'',
      dialog: false,
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'title'
        },
        { text: 'Body', value: 'body' },
        { text: 'UserId (g)', value: 'userId' },
        { text: 'ID (g)', value: 'id' },
        { text: 'Actions', value: 'title', sortable: false }
      ],
      editedIndex: -1,
      editedItem: {
        title: '',
        body: 0,
        userId: 0,
        id: 0
      },
      defaultItem: {
        title: '',
        body: 0,
        userId: 0,
        id: 0
      }
    }),
    computed: {
    ...mapGetters({
      posts: 'post/posts'
    })
    },
  created(){
      this.getPosts();
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
    watch: {
      dialog (val) {
        val || this.close()
      }
    },
    methods: {
    ...mapActions({
      getPosts: 'post/index'
      }),
      editItem (item) {
        this.editedIndex = this.posts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        const index = this.posts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.posts.splice(index, 1)
      },
      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.posts[this.editedIndex], this.editedItem)
        } else {
          this.posts.push(this.editedItem)
        }
        this.close()
      }
    }
  }
</script>