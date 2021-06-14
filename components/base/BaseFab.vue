<template>
  <button
    :class="$style.fab"
    @click="$emit('click', $event)"
  >
    <i :class="['fas fa-plus']" />
  </button>
</template>

<script>
export default {
  name: 'BaseFab'
}
</script>

<style lang="scss" module>
@import '@/variables/colors.scss';

.fab {
  position: absolute;
  bottom: 72px;
  right: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100%;
  border: none;
  width: 64px;
  height: 64px;
  color: white;
  font-size: 24px;
  background-color: $accent;

  &:hover {
    background-color: rgba($accent, 72%);
  }
}

</style>