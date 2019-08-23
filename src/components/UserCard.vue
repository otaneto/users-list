<template>
  <div class="card">
    <div>{{ user.username }}</div>
    <div>{{ user.name }}</div>
    <div>{{ user.email }}</div>
    <div>{{ user.phone }}</div>
    <div>{{ user.website }}</div>
    <div>{{ user.address }}</div>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: {
      required: true,
      default: () => {},
      type: Object,
    },
  },
};
</script>

<style>
 .card {
   height: 300px;
   min-width: 300px;
   border: 1px solid rgba(0, 0, 0, 0.3);
   flex: 1;
   margin: 1em;
 }
</style>
