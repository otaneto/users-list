<template>
  <div class="card">
    <div class="flex">
      <img
        class="user-avatar"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        :alt="user.name"
      />
      <div class="flex column">
        <span class="title primary--text-dark">{{ user.username }}</span>
        <span>{{ user.email }}</span>
      </div>
    </div>
    <small>Nome completo: {{ user.name }}</small>
    <div>Telefone: {{ user.phone }}</div>
    <div>
      <span>Página: </span>
      <a :href="user.website">{{ user.website }}</a>
    </div>
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
   max-width: 300px;
   border: 1px solid rgba(0, 0, 0, 0.3);
   flex: 1;
   margin: 1em;
   padding: 1.5em;
 }
 .user-avatar {
   border-radius: 50%;
   width: 48px;
   height: 48px;
 }
</style>
