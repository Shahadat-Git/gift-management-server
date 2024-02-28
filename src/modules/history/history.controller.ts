import catchAsync from '../../utils/catchAsync';
import { historyServices } from './history.service';

// get all sales history
const getSalesHistory = catchAsync(async (req, res) => {
  const result = await historyServices.getSalesHistory();

  res.status(200).json({
    success: true,
    message: 'Successfully fetched all sales history',
    data: result,
  });
});

// get single sale history
const getSingleSaleHistory = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await historyServices.getSingleSaleHistory(id);

  res.status(200).json({
    success: true,
    message: 'Successfully fetched Single sale history',
    data: result,
  });
});

export const historyControllers = {
  getSalesHistory,
  getSingleSaleHistory,
};
