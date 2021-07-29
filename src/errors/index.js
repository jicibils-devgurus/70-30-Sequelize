class ApiError extends Error {
  constructor({ id, status, code, title, detail, meta }) {
    super(title);
    this.id = id;
    this.code = code;
    this.status = status;
    this.title = title;
    this.detail = detail;
    this.meta = meta;
  }
}

const HttpStatusCode = {
  OK: 200,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER: 500
};

module.exports = {
  ApiError,
  HttpStatusCode
};
