<template>
  <div class="container flex column align-center">
    <select
      v-model="filter"
      class="filter"
      name="filter"
      placeholder="Filtrar"
    >
      <option value="*">Todos</option>
      <template v-for="option in options">
        <option :key="option" :value="option">{{ option }}</option>
      </template>
    </select>
    <div class="container flex justify-space-between wrap">
      <template v-for="user in filteredUsers">
        <user-card
          :key="user.id"
          :user="user"
        />
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import usersService from '@/services/users-service';
import UserCard from '@/components/UserCard.vue';

export default {
  name: 'UsersList',
  components: {
    UserCard,
  },
  data() {
    return {
      filter: '*',
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      const response = await usersService.get();
      const users = await response.json();
      this.setUsers(users);
    },

    ...mapActions('users', ['setUsers']),
  },
  computed: {
    ...mapGetters('users', ['users']),
    filteredUsers() {
      if (this.filter !== '*') {
        return this.users.filter(user => user.email.indexOf(this.filter) !== -1);
      }
      return this.users;
    },
    options() {
      const domains = this.users.map((user) => {
        const { email } = user;
        const domain = email.slice(email.lastIndexOf('.'));
        return domain;
      });
      const uniqueDomains = [...new Set(domains)];
      return uniqueDomains.sort();
    },
  },
};
</script>

<style>
  select {
    width: 300px;
  }
</style>
