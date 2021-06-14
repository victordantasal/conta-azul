<template>
  <div :class="$style.month">
    <i
      :class="['fas fa-chevron-left', $style.icon]"
      @click="changeMonth(-1)"
    />
    <div>{{ displayDate }}</div>
    <i
      :class="['fas fa-chevron-right', $style.icon]"
      @click="changeMonth(1)"
    />
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'BaseMonthSelector',
  data() {
    return {
      date: moment(),
    }
  },
  watch: {
    date: {
      immediate: true,
      handler(value) {
        this.$emit('input', value.format());
      },
    },
  },
  computed: {
    displayDate() {
      return this.date.format('MMM[ / ]YYYY');
    },
  },
  methods: {
    changeMonth(offset) {
      this.date = moment(this.date).add(offset, 'month');
    },
  }
}
</script>

<style lang="scss" module>
@import '@/variables/colors.scss';

.month {
  display: flex;
  font-size: 20px;
  font-weight: 700;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  .icon {
    text-align: center;
    width: 36px;
    border-radius: 50%;
    padding: 8px;

    &:hover {
      background: #ffffff55;
    }
  }
}
</style>