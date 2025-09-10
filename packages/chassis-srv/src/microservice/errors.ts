/**
 * Canceled indicates the operation was cancelled (typically by the caller).
 */
export class Cancelled extends Error {
  details: any;
  name: string;
  message: string;
  constructor(details: any) {
    super();
    this.name = this.constructor.name;
    this.message = 'operation was cancelled';
    this.details = details;
  }
}

/**
 * InvalidArgument indicates client specified an invalid argument.
 */
export class InvalidArgument extends Error {
  details: any;
  name: string;
  message: string;
  constructor(details: any) {
    super();
    this.name = this.constructor.name;
    this.message = 'invalid argument';
    this.details = details;
  }
}

/**
 *  NotFound means some requested entity was not found.
 */
export class NotFound extends Error {
  details: any;
  name: string;
  message: string;
  constructor(details: any) {
    super();
    this.name = this.constructor.name;
    this.message = 'not found';
    this.details = details;
  }
}

/**
 * AlreadyExists means an entity the operation attempted to create
 * already exists.
 */
export class AlreadyExists extends Error {
  details: any;
  name: string;
  message: string;
  constructor(details: any) {
    super();
    this.name = this.constructor.name;
    this.message = 'already exists';
    this.details = details;
  }
}

/**
 * PermissionDenied indicates the caller does not have permission to
 * execute the specified operation.
 */
export class PermissionDenied extends Error {
  details: any;
  name: string;
  message: string;
  constructor(details: any) {
    super();
    this.name = this.constructor.name;
    this.message = 'permission denied';
    this.details = details;
  }
}

/**
 * Unauthenticated means the caller could not be authenticated.
 */
export class Unauthenticated extends Error {
  details: any;
  name: string;
  message: string;
  constructor(details: any) {
    super();
    this.name = this.constructor.name;
    this.message = 'unauthenticated';
    this.details = details;
  }
}

/**
 * FailedPrecondition means the system is not in a state in which
 * the operation can be executed. A precondition, for example a call
 * to a different endpoint before this call is required.
 */
export class FailedPrecondition extends Error {
  details: any;
  name: string;
  message: string;
  constructor(details: any) {
    super();
    this.name = this.constructor.name;
    this.message = 'failed precondition';
    this.details = details;
  }
}

/**
 * Aborted indicates the operation was aborted because
 * of transaction aborts or sequencer check failures.
 */
export class Aborted extends Error {
  details: any;
  name: string;
  message: string;
  constructor(details: any) {
    super();
    this.name = this.constructor.name;
    this.message = 'aborted';
    this.details = details;
  }
}

/**
 * OutOfRange means one of the provided arguments is
 * outside the range of the iterated data.
 */
export class OutOfRange extends Error {
  details: any;
  name: string;
  message: string;
  constructor(details: any) {
    super();
    this.name = this.constructor.name;
    this.message = 'out of range';
    this.details = details;
  }
}

/**
 * Unimplemented means the endpoint is not implemented,
 * not specified or not configured.
 */
export class Unimplemented extends Error {
  details: any;
  name: string;
  message: string;
  constructor(details: any) {
    super();
    this.name = this.constructor.name;
    this.message = 'unimplemented';
    this.details = details;
  }
}

/**
 * ResourceExhausted indicates that a quota or storage is used up.
 */
export class ResourceExhausted extends Error {
  details: any;
  name: string;
  message: string;
  constructor(details: any) {
    super();
    this.name = this.constructor.name;
    this.message = 'resource exhausted';
    this.details = details;
  }
}

/**
 * DeadlineExceeded means the operation expired before completion.
 * It does not mean the operation did not complete.
 */
export class DeadlineExceeded extends Error {
  details: any;
  name: string;
  message: string;
  constructor(details: any) {
    super();
    this.name = this.constructor.name;
    this.message = 'deadline exceeded';
    this.details = details;
  }
}

/**
 * Internal indicates an uncaught or unhandled server error.
 */
export class Internal extends Error {
  details: any;
  name: string;
  message: string;
  constructor(details: any) {
    super();
    this.name = this.constructor.name;
    this.message = 'internal';
    this.details = details;
  }
}

/**
 * Unavailable indicates that the service currently is not
 * processing requests.
 * This is mostlikly only a short condition.
 */
export class Unavailable extends Error {
  details: any;
  name: string;
  message: string;
  constructor(details: any) {
    super();
    this.name = this.constructor.name;
    this.message = 'unavailable';
    this.details = details;
  }
}

/**
 * DataLoss indicates unrecoverable data loss or corruption.
 */
export class DataLoss extends Error {
  details: any;
  name: string;
  message: string;
  constructor(details: any) {
    super();
    this.name = this.constructor.name;
    this.message = 'data loss';
    this.details = details;
  }
}
