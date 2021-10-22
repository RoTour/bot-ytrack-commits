export enum HttpStatusCode {
  "CONTINUE" = 100,
  "SWITCHING_PROTOCOLS" = 101,
  "EARLY_HINTS" = 103,
  "OK" = 200,
  "CREATED" = 201,
  "ACCEPTED" = 202,
  "NON_AUTHORITATIVE_INFORMATION" = 203,
  "NO_CONTENT" = 204,
  "RESET_CONTENT" = 205,
  "PARTIAL_CONTENT" = 206,
  "MULTIPLE_CHOICES" = 300,
  "MOVED_PERMANENTLY" = 301,
  "FOUND" = 302,
  "SEE_OTHER" = 303,
  "NOT_MODIFIED" = 304,
  "TEMPORARY_REDIRECT" = 307,
  "PERMANENT_REDIRECT" = 308,
  "BAD_REQUEST" = 400,
  "UNAUTHORIZED" = 401,
  "PAYMENT_REQUIRED" = 402,
  "FORBIDDEN" = 403,
  "NOT_FOUND" = 404,
  "METHOD_NOT_ALLOWED" = 405,
  "NOT_ACCEPTABLE" = 406,
  "PROXY_AUTHENTICATION_REQUIRED" = 407,
  "REQUEST_TIMEOUT" = 408,
  "CONFLICT" = 409,
  "GONE" = 410,
  "LENGTH_REQUIRED" = 411,
  "PRECONDITION_FAILED" = 412,
  "PAYLOAD_TOO_LARGE" = 413,
  "URI_TOO_LONG" = 414,
  "UNSUPPORTED_MEDIA_TYPE" = 415,
  "RANGE_NOT_SATISFIABLE" = 416,
  "EXPECTATION_FAILED" = 417,
  "IM_A_TEAPOT" = 418,
  "UNPROCESSABLE_ENTITY" = 422,
  "TOO_EARLY" = 425,
  "UPGRADE_REQUIRED" = 426,
  "PRECONDITION_REQUIRED" = 428,
  "TOO_MANY_REQUESTS" = 429,
  "REQUEST_HEADER_FIELDS_TOO_LARGE" = 431,
  "UNAVAILABLE_FOR_LEGAL_REASONS" = 451,
  "INTERNAL_SERVER_ERROR" = 500,
  "NOT_IMPLEMENTED" = 501,
  "BAD_GATEWAY" = 502,
  "SERVICE_UNAVAILABLE" = 503,
  "GATEWAY_TIMEOUT" = 504,
  "HTTP_VERSION_NOT_SUPPORTED" = 505,
  "VARIANT_ALSO_NEGOTIATES" = 506,
  "INSUFFICIENT_STORAGE" = 507,
  "LOOP_DETECTED" = 508,
  "NOT_EXTENDED" = 510,
  "NETWORK_AUTHENTICATION_REQUIRED" = 511,
}

export class HttpStatus extends Error {
  private code: number;

  constructor(code: HttpStatusCode, message?: string) {
    super(message);
    if (typeof code === "string") {
      this.code = +HttpStatusCode[code];
    } else {
      this.code = code;
    }
  }

  toJSON() {
    const { code, message } = this;
    return { code, message };
  }

  toString() {
    return JSON.stringify(this.toJSON());
  }

  get statusCode() {
    return this.code;
  }

  static CONTINUE = new HttpStatus(HttpStatusCode.CONTINUE, "Continue");

  static SWITCHING_PROTOCOLS = new HttpStatus(
    HttpStatusCode.SWITCHING_PROTOCOLS,
    "Switching Protocols"
  );

  static EARLY_HINTS = new HttpStatus(
    HttpStatusCode.EARLY_HINTS,
    "Early Hints"
  );

  static OK = new HttpStatus(HttpStatusCode.OK, "OK");

  static CREATED = new HttpStatus(HttpStatusCode.CREATED, "Created");

  static ACCEPTED = new HttpStatus(HttpStatusCode.ACCEPTED, "Accepted");

  static NON_AUTHORITATIVE_INFORMATION = new HttpStatus(
    HttpStatusCode.NON_AUTHORITATIVE_INFORMATION,
    "Non-Authoritative Information"
  );

  static NO_CONTENT = new HttpStatus(HttpStatusCode.NO_CONTENT, "No Content");

  static RESET_CONTENT = new HttpStatus(
    HttpStatusCode.RESET_CONTENT,
    "Reset Content"
  );

  static PARTIAL_CONTENT = new HttpStatus(
    HttpStatusCode.PARTIAL_CONTENT,
    "Partial Content"
  );

  static MULTIPLE_CHOICES = new HttpStatus(
    HttpStatusCode.MULTIPLE_CHOICES,
    "Multiple Choices"
  );

  static MOVED_PERMANENTLY = new HttpStatus(
    HttpStatusCode.MOVED_PERMANENTLY,
    "Moved Permanently"
  );

  static FOUND = new HttpStatus(HttpStatusCode.FOUND, "Found");

  static SEE_OTHER = new HttpStatus(HttpStatusCode.SEE_OTHER, "See Other");

  static NOT_MODIFIED = new HttpStatus(
    HttpStatusCode.NOT_MODIFIED,
    "Not Modified"
  );

  static TEMPORARY_REDIRECT = new HttpStatus(
    HttpStatusCode.TEMPORARY_REDIRECT,
    "Temporary Redirect"
  );

  static PERMANENT_REDIRECT = new HttpStatus(
    HttpStatusCode.PERMANENT_REDIRECT,
    "Permanent Redirect"
  );

  static BAD_REQUEST = new HttpStatus(
    HttpStatusCode.BAD_REQUEST,
    "Bad Request"
  );

  static UNAUTHORIZED = new HttpStatus(
    HttpStatusCode.UNAUTHORIZED,
    "Unauthorized"
  );

  static PAYMENT_REQUIRED = new HttpStatus(
    HttpStatusCode.PAYMENT_REQUIRED,
    "Payment Required"
  );

  static FORBIDDEN = new HttpStatus(HttpStatusCode.FORBIDDEN, "Forbidden");

  static NOT_FOUND = new HttpStatus(HttpStatusCode.NOT_FOUND, "Not Found");

  static METHOD_NOT_ALLOWED = new HttpStatus(
    HttpStatusCode.METHOD_NOT_ALLOWED,
    "Method Not Allowed"
  );

  static NOT_ACCEPTABLE = new HttpStatus(
    HttpStatusCode.NOT_ACCEPTABLE,
    "Not Acceptable"
  );

  static PROXY_AUTHENTICATION_REQUIRED = new HttpStatus(
    HttpStatusCode.PROXY_AUTHENTICATION_REQUIRED,
    "Proxy Authentication Required"
  );

  static REQUEST_TIMEOUT = new HttpStatus(
    HttpStatusCode.REQUEST_TIMEOUT,
    "Request Timeout"
  );

  static CONFLICT = new HttpStatus(HttpStatusCode.CONFLICT, "Conflict");

  static GONE = new HttpStatus(HttpStatusCode.GONE, "Gone");

  static LENGTH_REQUIRED = new HttpStatus(
    HttpStatusCode.LENGTH_REQUIRED,
    "Length Required"
  );

  static PRECONDITION_FAILED = new HttpStatus(
    HttpStatusCode.PRECONDITION_FAILED,
    "Precondition Failed"
  );

  static PAYLOAD_TOO_LARGE = new HttpStatus(
    HttpStatusCode.PAYLOAD_TOO_LARGE,
    "Payload Too Large"
  );

  static URI_TOO_LONG = new HttpStatus(
    HttpStatusCode.URI_TOO_LONG,
    "URI Too Long"
  );

  static UNSUPPORTED_MEDIA_TYPE = new HttpStatus(
    HttpStatusCode.UNSUPPORTED_MEDIA_TYPE,
    "Unsupported Media Type"
  );

  static RANGE_NOT_SATISFIABLE = new HttpStatus(
    HttpStatusCode.RANGE_NOT_SATISFIABLE,
    "Range Not Satisfiable"
  );

  static EXPECTATION_FAILED = new HttpStatus(
    HttpStatusCode.EXPECTATION_FAILED,
    "Expectation Failed"
  );

  static IM_A_TEAPOT = new HttpStatus(
    HttpStatusCode.IM_A_TEAPOT,
    "I'm a teapot"
  );

  static UNPROCESSABLE_ENTITY = new HttpStatus(
    HttpStatusCode.UNPROCESSABLE_ENTITY,
    "Unprocessable Entity"
  );

  static TOO_EARLY = new HttpStatus(HttpStatusCode.TOO_EARLY, "Too Early");

  static UPGRADE_REQUIRED = new HttpStatus(
    HttpStatusCode.UPGRADE_REQUIRED,
    "Upgrade Required"
  );

  static PRECONDITION_REQUIRED = new HttpStatus(
    HttpStatusCode.PRECONDITION_REQUIRED,
    "Precondition Required"
  );

  static TOO_MANY_REQUESTS = new HttpStatus(
    HttpStatusCode.TOO_MANY_REQUESTS,
    "Too Many Requests"
  );

  static REQUEST_HEADER_FIELDS_TOO_LARGE = new HttpStatus(
    HttpStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE,
    "Request Header Fields Too Large"
  );

  static UNAVAILABLE_FOR_LEGAL_REASONS = new HttpStatus(
    HttpStatusCode.UNAVAILABLE_FOR_LEGAL_REASONS,
    "Unavailable For Legal Reasons"
  );

  static INTERNAL_SERVER_ERROR = new HttpStatus(
    HttpStatusCode.INTERNAL_SERVER_ERROR,
    "Internal Server Error"
  );

  static NOT_IMPLEMENTED = new HttpStatus(
    HttpStatusCode.NOT_IMPLEMENTED,
    "Not Implemented"
  );

  static BAD_GATEWAY = new HttpStatus(
    HttpStatusCode.BAD_GATEWAY,
    "Bad Gateway"
  );

  static SERVICE_UNAVAILABLE = new HttpStatus(
    HttpStatusCode.SERVICE_UNAVAILABLE,
    "Service Unavailable"
  );

  static GATEWAY_TIMEOUT = new HttpStatus(
    HttpStatusCode.GATEWAY_TIMEOUT,
    "Gateway Timeout"
  );

  static HTTP_VERSION_NOT_SUPPORTED = new HttpStatus(
    HttpStatusCode.HTTP_VERSION_NOT_SUPPORTED,
    "HTTP Version Not Supported"
  );

  static VARIANT_ALSO_NEGOTIATES = new HttpStatus(
    HttpStatusCode.VARIANT_ALSO_NEGOTIATES,
    "Variant Also Negotiates"
  );

  static INSUFFICIENT_STORAGE = new HttpStatus(
    HttpStatusCode.INSUFFICIENT_STORAGE,
    "Insufficient Storage"
  );

  static LOOP_DETECTED = new HttpStatus(
    HttpStatusCode.LOOP_DETECTED,
    "Loop Detected"
  );

  static NOT_EXTENDED = new HttpStatus(
    HttpStatusCode.NOT_EXTENDED,
    "Not Extended"
  );

  static NETWORK_AUTHENTICATION_REQUIRED = new HttpStatus(
    HttpStatusCode.NETWORK_AUTHENTICATION_REQUIRED,
    "Network Authentication Required"
  );
}
