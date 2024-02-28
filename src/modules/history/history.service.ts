import { SalesHistory } from './history.model';

// get all sales history
const getSalesHistory = async () => {
  const result = await SalesHistory.find();

  return result;
};

// get all sales history
const getSingleSaleHistory = async (id: string) => {
  const result = await SalesHistory.findById(id);

  return result;
};

export const historyServices = {
  getSalesHistory,
  getSingleSaleHistory
};
