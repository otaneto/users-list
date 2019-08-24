<template>
  <div class="card flex column">
    <div class="flex main-info align-center">
      <img
        class="user-avatar"
        :src='avatar'
        :alt="user.name"
      />
      <div class="flex column main-info-text">
        <span class="title primary--text">{{ user.name }}</span>
        <span class="subtitle">{{ user.email }}</span>
      </div>
    </div>
    <div class="flex column justify-start">
      <span class="lowercase"><i class="fas fa-at"/>{{ user.username }}</span>
      <span><i class="fas fa-phone" />{{ user.phone }}</span>
      <div>
        <i class="fas fa-globe-americas" />
        <a :href="user.website">{{ user.website }}</a>
      </div>
      <span><i class="fas fa-map-marked-alt" />{{ address(user.address) }}</span>
    </div>
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
  methods: {
    address({ city, street, suite }) {
      return `${city}, ${street}, ${suite}`;
    },
  },
  computed: {
    avatar() {
      const name = this.user.name.replace(' ', '+');
      return `https://ui-avatars.com/api/?name=${name}&background=0080B6&color=FFFFFF`;
    },
  },
};
</script>

<style lang="scss" scoped>
  i {
    margin-right: 0.6em;
    color: rgba(0,0,0,0.6);
  }

 .card {
  height: 200px;
  min-width: 370px;
  max-width: 370px;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 5px;
  flex: 1;
  padding: 1.5em;
  background: no-repeat padding-box;
  margin-bottom: 1.5em;
  line-height: 1.4;
 }
 .user-avatar {
   border-radius: 50%;
   width: 56px;
   height: 56px;
 }
 .main-info-text{
   padding: 0 0.8em;
 }
</style>
