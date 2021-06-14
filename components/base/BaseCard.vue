<template>
  <div :class="$style.card">
    <slot>
      <header :class="$style.title">
        <slot name="title" />
      </header>
      <div :class="$style.text">
        <slot name="text" />
      </div>
      <footer :class="$style.actions">
        <slot name="actions" />
      </footer>
    </slot>
  </div>  
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    color: {
      type: String,
      default: '',
    },
  }
}
</script>

<style lang="scss" module>
@import '@/variables/colors.scss';

.card {
  color: white;
  border-radius: 8px;
  border: 1px solid $secondary;
  background-color: darken($secondary, 16%);
  padding: 8px;
  .title {
    padding-bottom: 4px;
  }
  .text {
    padding: 4px 0;
  }
  .actions {
    padding-top: 4px;
  }
}
</style>
