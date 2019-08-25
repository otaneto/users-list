<template>
  <div class="flex align-center">
    <span class="subtitle">Filtrar por domínio:&nbsp;&nbsp;</span>
    <div class="custom-select">
      <select
        v-model="filter"
        class="filter"
        name="filter"
        placeholder="Filtrar"
        @change="$emit('selected', filter)"
      >
        <option value="*">Todos</option>
        <template v-for="option in options">
          <option :key="option" :value="option">{{ option }}</option>
        </template>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Filter',
  props: {
    options: {
      default: () => [],
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      filter: '*',
    };
  },
};
</script>

<style lang="scss" scoped>
  .custom-select {
    position: relative;
    font-family: 'Roboto', Helvetica, sans-serif;
    select {
      width: 200px;
      height: 24px;
    }
  }
</style>
