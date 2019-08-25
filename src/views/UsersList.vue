<template>
  <div class="flex column align-center">
    <user-filter
      :options="options"
      @selected="filter = $event"
    />
    <div class="flex users-list wrap">
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
import UserFilter from '@/components/UserFilter.vue';
import UserCard from '@/components/UserCard.vue';

export default {
  name: 'UsersList',
  components: {
    UserFilter,
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

<style scoped>
  @media only screen and (max-width: 2560px) {
    .users-list {
      width: 66%;
    }
  }
  
  @media only screen and (max-width: 1440px) {
    .users-list {
      width: 86%;
    }
  }
  
  @media only screen and (max-width: 1366px) {
    .users-list {
      width: 75%;
    }
  }

  @media only screen and (max-width: 1024px) {
    .users-list {
      width: 100%;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 768px) {
    .users-list {
      justify-content: start;
    }
  }

  @media only screen and (max-width: 425px) {
    .users-list {
      justify-content: center;
    }
  }

  .users-list {
    margin-top: 1em;
  }
</style>
