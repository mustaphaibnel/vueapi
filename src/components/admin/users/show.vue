<template>
    <div>
      <br>
      <v-flex xs12>
          <v-text-field
            label="Recherche"
            placeholder="Recherchez par nom,prenom,bureau,fonctions"
          ></v-text-field>
        </v-flex>
<h5>Resultats: 4 trouvé</h5>
<v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>

          <v-flex xs6>
            <v-card color="gray darken-2">
              <v-layout>
                <v-flex xs5>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Contact Name</div>
                      <div>Function :XXXXXXXXX</div>
                      <div>Service :XXXXXXXXX</div>
                      <div>Division :XXXXXXXXX</div>
                      <div>Direction :XXXXXXXXX</div>
                      <div><v-icon>phone</v-icon>: 600 / <v-icon>business</v-icon>: 459</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
        <v-card-actions>
          <v-btn flat color="orange">show more</v-btn>
        </v-card-actions>
            </v-card>
          </v-flex>

         
          <v-flex xs6>
            <v-card color="gray darken-2">
              <v-layout>
                <v-flex xs5>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Contact Name</div>
                      <div>Function :XXXXXXXXX</div>
                      <div>Service :XXXXXXXXX</div>
                      <div>Division :XXXXXXXXX</div>
                      <div>Direction :XXXXXXXXX</div>

                      <div><v-icon>phone</v-icon>: 600 / <v-icon>business</v-icon>: 459</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>

            </v-card>
          </v-flex>

          
          <v-flex xs6>
            <v-card color="gray darken-2">
              <v-layout>
                <v-flex xs5>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Contact Name</div>
                      <div>Function :XXXXXXXXX</div>
                      <div>Direction :XXXXXXXXX</div>
                      <div><v-icon>phone</v-icon>: 600 / <v-icon>business</v-icon>: 459</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
        <v-card-actions>
          <v-btn flat color="orange">show more</v-btn>
        </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>

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
        
      });
  }
}
</script>

<style>

</style>


