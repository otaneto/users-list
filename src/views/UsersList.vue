<template>
  <div class="container flex column align-center">
    <div class="flex align-center">
      <span class="subtitle">Filtrar por domínio:&nbsp;&nbsp;</span>
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
    </div>
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
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: 0 !important;
    background: #1F3A54;
    background-image: none;
  }
  .filter {
    position: relative;
    display: flex;
    width: 20em;
    height: 3em;
    line-height: 3;
    background: #1F3A54;
    overflow: hidden;
    border-radius: .25em;
  }
  select {
    flex: 1;
    padding: 0 .5em;
    color: #fff;
    cursor: pointer;
    font-size: 0.9em;
  }

  .filter::after {
    content: '\25BC';
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1em;
    background: #1F3A54;
    cursor: pointer;
    pointer-events: none;
    -webkit-transition: .25s all ease;
    -o-transition: .25s all ease;
    transition: .25s all ease;
  }
</style>
