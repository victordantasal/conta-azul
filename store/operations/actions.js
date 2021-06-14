import moment from 'moment';

export default {
  getOperationById: async ({getters}, id) => {
    const operations = _.get(getters, 'operations');
    return operations.find((operation) => operation.id === id);
  },
  getOperationsByInstallmentCod: async ({getters}, installmentCod) => {
    const operations = _.get(getters, 'operations');
    return operations.filter((operation) => operation.installmentCod === installmentCod);
  },
  getOperationsByMonth: async ({getters}, date) => {
    const operations = _.get(getters, 'operations');
    return operations.filter((operation) => {
        const searchDate = moment(date);
        const operationDate = moment(operation.date);
        const searchMonth = searchDate.month() + searchDate.year()*12;
        const operationMonth = operationDate.month() + operationDate.year()*12;
        return searchMonth === operationMonth;
    });
  },
}