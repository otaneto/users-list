<template>
  <div class="card column">
    <div class="flex card-header align-center">
      <div class="main-info flex align-center">
        <img
          class="flex user-avatar"
          :src='avatar'
          :alt="user.name"
        />
        <div class="flex column main-info-text">
          <span class="title primary--text">{{ user.name }}</span>
          <span class="subtitle">{{ user.email }}</span>
        </div>
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

  @media only screen and (max-width: 2560px) {
    .card {
      max-width: 26%;
      min-width: 26%;
    }
  }

  @media only screen and (max-width: 1440px) {
    .card {
      max-width: 26%;
      min-width: 26%;
    }
  }

  @media only screen and (max-width: 1024px) {
    .card {
      max-width: 40%;
      min-width: 40%;
    }
  }

  @media only screen and (max-width: 768px) {
    .card {
      max-width: 37%;
      min-width: 37%;
    }
  }

  @media only screen and (max-width: 568px) {
    .card {
      min-width: 85%;
      max-width: 85%;
    }
  }

  .card {
    height: 200px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 5px;
    padding: 1.5em;
    background: no-repeat padding-box;
    margin: 0.8em;
    line-height: 1.4;
  }

 .user-avatar {
   border-radius: 50%;
   max-width: 48px;
   max-height: 48px;
 }

 .card-header {
   height: 100px;
   box-sizing: content-box;
 }

.main-info-text{
  padding: 0 0.5em;
  width: 100%;
  flex: unset;
}
</style>
