const parseResultsWithPagination = (
  { sortBy, sortOrder, limit, offset },
  results = {}
) => ({
  results: results.rows,
  count: results.rows ? results.rows.length : 0,
  total: results.count,
  limit,
  offset,
  sortBy,
  sortOrder
});

module.exports = {
  parseResultsWithPagination
};
