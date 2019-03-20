<template>
  <div>
    <md-table-row slot="md-table-row" slot-scope="{ item }">
      <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
      <md-table-cell md-label="Vorname" md-sort-by="name">{{ item.firstName }}</md-table-cell>
      <md-table-cell md-label="Nachname" md-sort-by="name">{{ item.lastName }}</md-table-cell>
      <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
      <md-table-cell md-label="Rolle" md-sort-by="role">{{ item.role }}</md-table-cell>
      <md-table-cell md-label="Job Title" md-sort-by="title">{{ item.title }}</md-table-cell>
    </md-table-row>
  </div>
</template>

<script>

export default {
  name: "UsersTableItem",
  props: {
    item: Object
  }
};
</script>