export default {
  getOperationById: async ({getters}, id) => {
    const operations = _.get(getters, 'operations');
    return operations.find((operation) => operation.id === id);
  },
  getOperationsByInstallmentCod: async ({getters}, installmentCod) => {
    const operations = _.get(getters, 'operations');
    return operations.filter((operation) => operation.installmentCod === installmentCod);
  },
}