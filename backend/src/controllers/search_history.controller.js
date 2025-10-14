import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync.js';
import searchHistoryModel from '../models/search_history.model.js';

const getSearchHistories = catchAsync(async (req, res) => {
  const histories = await searchHistoryModel.findByUserToken(req.userToken);
  res.status(httpStatus.OK).json(histories);
});

export default { getSearchHistories };