<template>
  <div class="users-list">
    <template v-for="user in users">
      <user-card
        :key="user.id"
        :user="user"
      />
    </template>
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
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 3em;
  }
</style>
