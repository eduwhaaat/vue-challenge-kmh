<template>
  <div class="container">


    <md-table
      v-model="users"
      md-sort="name"
      md-sort-order="asc"
      md-card
      @md-selected="onSelect"
      
      class="md-table-fixed-header-kmh"
    >
      <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="single">
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Vorname" md-sort-by="firstName">{{ item.firstName }}</md-table-cell>
        <md-table-cell md-label="Nachname" md-sort-by="lastName">{{ item.lastName }}</md-table-cell>
        <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Telefonnumer" md-sort-by="phone">{{ item.phone }}</md-table-cell>
        <md-table-cell md-label="Rolle" md-sort-by="role">{{ item.role }}</md-table-cell>
        <md-table-cell md-label="...">Buttons</md-table-cell>
      </md-table-row>

      <!-- <UsersTableItem v-bind={item} /> -->
    </md-table>
  </div>
</template>

<script>
// import UsersTableItem from "./UsersTableItem.vue";
export default {
  name: "UsersTable",
  components: {
    // UsersTableItem
  },
  data: () => ({
    selected: {},
    users: [
      {
        id: 1,
        firstName: "Shawna ",
        lastName: "Dubbin",
        email: "sdubbin0@geocities.com",
        role: "Guest",
        phone: "012345678"
      },
      {
        id: 2,
        firstName: "Eduard",
        lastName: "Reimer",
        email: "test@geocities.com",
        role: "Admin",
        phone: "012345678"
      },
      {
        id: 3,
        firstName: "Shawna ",
        lastName: "Dubbin",
        email: "sdubbin0@geocities.com",
        role: "Guest",
        phone: "012345678"
      },
      {
        id: 4,
        firstName: "Shawna ",
        lastName: "Dubbin",
        email: "sdubbin0@geocities.com",
        role: "Guest",
        phone: "012345678"
      }
    ]
  }),
  methods: {
    onSelect(item) {
      this.selected = item;
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  padding: 12px;
}
.md-table-fixed-header-kmh {
  /* background-color: rgb(255, 210, 3) !important;; */
}
</style>
