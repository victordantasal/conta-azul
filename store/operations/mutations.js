import _ from 'lodash';

export default {
  NEW_OPERATION (state, payload) {
    const id = state.nextId;
    const { type, value, installments, date } = payload;
    const operations = [];

    const installmentCod = installments > 1 ? state.nextInstallmentId++ : undefined;
    for (let i = 1; i <= installments; i += 1) {
      operations.push({
        id: state.nextId++,
        type,
        value,
        date,
        installmentCod,
        installmentNumber: i,
        installmentValue: value / installments,
        installments,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    state.operations = _.concat(state.operations, operations);
  },
}