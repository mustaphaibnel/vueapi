<template>
  <v-card v-if="posts">
    <v-card-title>
      Nutrition
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="posts"
      :search="search"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.title }}</td>
        <td class="text-xs-left">{{ props.item.body }}</td>
        <td class="text-xs-right">{{ props.item.userId }}</td>
        <td class="text-xs-right">{{ props.item.id }}</td>
<td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            
          >
            edit
          </v-icon>
          <v-icon
            small
          
          >
            delete
          </v-icon>
        </td>
 
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
      data () {
      return {

        search: '',
        headers: [
          {
            text: 'Posts (100g serving)',
            align: 'left',
            sortable: false,
            value: 'title'
          },
          { text: 'Body', value: 'body' },
          { text: 'userId', value: 'userId' },
          { text: 'id', value: 'id' },
          { text: 'actions', value: '' }

        ],
        }
      },

  computed: {
    ...mapGetters({
      posts: "post/posts"
    })
  },
  methods: {
    ...mapActions({
      getPosts: "post/index"
    })
  },
  created() {
    this.getPosts();
  }
};
</script>

<style>
</style>
