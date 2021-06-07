<template>
  <div :class="$style.main">
    <Topbar />
    <div :class="$style.content">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/ui/Footer.vue';
import Topbar from '@/components/ui/Topbar.vue';

export default {
  components: { Footer, Topbar },
}
</script>

<style lang="scss" module>
@import '@/variables/colors.scss';

.main, .content {
  display: flex;
  flex-direction: column;
}
.main {
  height: 100vh;

  .content {
    flex: 1;
    background: $primary;
    padding: 8px;
  }
}

</style>