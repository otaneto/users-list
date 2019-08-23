<template>
  <div class="users-list">
    <user-card />
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
  },
};
</script>

<style>
  .users-list {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
</style>
