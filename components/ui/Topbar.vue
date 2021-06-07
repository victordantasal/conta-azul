<template>
  <header :class="$style.topbar">
    <div :class="$style.item"> Olá, Victor </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" module>
@import '@/variables/colors.scss';

.topbar {
  height: 48px;
  display: flex;
  justify-content: space-between;

  background: $secondary;
  color: $white;
  border-bottom: 1px solid $light;

  .item {
    padding: 8px;
    display: flex;
    align-items: center;
  }
}

</style>