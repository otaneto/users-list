<template>
  <div class="flex align-center">
    <span class="subtitle">Filtrar por domínio:&nbsp;&nbsp;</span>
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
