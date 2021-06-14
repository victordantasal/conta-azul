<template>
  <section :class="$style.operations">
    <BaseMonthSelector @input="fetchOperations" />

    <div :class="$style.total">
      <div :class="$style.text">{{ getTotal }}</div>
    </div>

    <div :class="$style.title">Movimentações</div>
    <BaseCard
      :class="$style.card"
      v-for="operation in operations"
      :key="`operation-${operation.id}`"
    >
      <div :class="$style.row">
        <div> {{ operation.formatted.date }} </div>
        <div :class="$style.flex"> {{ operation.formatted.description }} </div>
        <div> {{ operation.formatted.value }} </div>
      </div>
      <div :class="$style.row">
        <div v-if="operation.cardId"> {{ operation.formatted.card }} </div>
        <div v-else> Em espécie </div>
        <div> {{ operation.formatted.installments }} </div>
      </div>
    </BaseCard>
    <BaseCard
      v-if="!operations.length"
      :class="[$style.card, $style.empty]"
    >
      Não existem movimentações neste período.
    </BaseCard>

    <BaseFab />
  </section>
</template>

<script>
import _ from 'lodash';
import moment from 'moment';
import { mapActions } from 'vuex';

import BaseCard from '@/components/base/BaseCard.vue';
import BaseFab from '@/components/base/BaseFab.vue';
import BaseMonthSelector from '@/components/base/BaseMonthSelector.vue';

export default {
  components: { BaseCard, BaseMonthSelector, BaseFab },
  data() {
    return {
      operations: [],
    };
  },
  computed: {
    getTotal() {
      const total = this.operations.reduce((subTotal, operation) => {
        const operationValue = operation.installmentValue || operation.value;
        return subTotal + operationValue;
      }, 0);

      return this.getCurrencyValue(total);
    },
  },
  methods: {
    ...mapActions('operations', ['getOperationsByMonth']),
    getCurrencyValue(value) {
      return parseFloat(`${value}`).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    },
    getFormattedOperation(operation) {
      const { date, installmentValue, value, installments, installmentNumber } = operation;
      return {
        formatted: {
          date: moment(date).format('MM[/]DD'),
          value: this.getCurrencyValue(installmentValue || value),
          installments: installments
            ? `${installmentNumber}/${installments}`
            : 'A vista',
        },
      };
    },
    async fetchOperations(date) {
      try {
        this.isLoading = true;
        const operations = await this.getOperationsByMonth(date);
        this.operations = _.map(operations, (operation) => ({
          ...operation,
          ...this.getFormattedOperation(operation),
        }));
      } catch (error) {
        throw error;
      } finally {
        this.isLoading = false;
      }
    },
  }
}
</script>

<style lang="scss" module>

.operations {
  .title {
    font-size: 20px;
    font-weight: 700;
    padding-top: 16px;
  }
  .card {
    margin: 8px 0;

    .row {
      margin: 0 -4px;
      display: flex;
      justify-content: space-between;
      > div {
        margin: 0 4px;
      }
      .flex {
        flex: 1;
      }
    }
  }
  .empty {
    text-align: center;
    padding: 16px 8px;

    background-color: rgba(#fff, 30%);
    border-color: rgba(#fff, 10%);
  }
  .total {
    font-weight: 700;
    text-align: center;
    margin: 64px 0;
    .text {
      font-size: 42px;
    }
  }
}
</style>