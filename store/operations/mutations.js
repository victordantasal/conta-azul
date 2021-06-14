import _ from 'lodash';
import moment from 'moment';

export default {
  NEW_OPERATION (state, payload) {
    const id = state.nextId;
    const { type, value, date, description, cardId } = payload;
    const installments = payload.installments || 1;
    const operations = [];
    const installmentCod = installments > 1 ? state.nextInstallmentId++ : undefined;

    for (let i = 1; i <= installments; i += 1) {
      const operation = {
        id: state.nextId++,
        type,
        value,
        date: moment(date).format(),
        description,
        createdAt: moment().format(),
        updatedAt: moment().format(),
        cardId,
      };

      Object.assign(
        operation,
        installmentCod && {
          installments,
          installmentCod,
          installmentNumber: i,
          installmentValue: value / installments,
        });

      operations.push(operation);
    }

    state.operations = _.concat(state.operations, operations);
  },
}