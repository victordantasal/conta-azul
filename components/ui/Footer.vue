<template>
  <footer :class="$style.footer">
    <NuxtLink
      v-for="(route, index) in routes"
      :key="`route--${index}`"
      :class="[$style.link, isActiveRoute(route) && $style.isActive]"
      :to="route.to"
    >
      <i :class="[route.icon, $style.icon]" />
      {{ route.text }}
    </NuxtLink>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {text: 'Receitas', icon: 'fas fa-dollar-sign', to: { name: 'receipts' }},
        {text: 'Cartões', icon: 'fas fa-credit-card', to: { name: 'credit-cards' }},
        {text: 'Painel', icon: 'fas fa-tachometer-alt', to: { name: 'index' }},
        {text: 'Gastos', icon: 'fas fa-receipt', to: { name: 'operations' }},
        {text: 'Perfil', icon: 'fas fa-user', to: { name: 'profile' }},
      ],
    }
  },
  methods: {
    isActiveRoute({ to }) {
      const matched = this.$route.matched;
      if (matched.length === 1 && !matched[0].path) {
        return to.name === 'index';
      }
      return matched.some(route => route.name.includes(to.name));
    }
  }
}
</script>

<style lang="scss" module>
@import '@/variables/colors.scss';

.footer {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;

  background: $secondary;

  .link {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 72px;
    padding: 8px 0;

    color: $white;
    text-decoration: none;
    font-size: 14px;

    .icon {
      font-size: 24px;
      margin-bottom: 2px;
    }

    &.isActive {
      background: $primary;
    }
  }
}

</style>