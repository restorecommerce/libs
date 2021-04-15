/**
 * Unauthenticated means the caller could not be authenticated.
 */
export class Unauthenticated extends Error {
  details: string;
  name: string;
  message: string;
  code: number;
  constructor(details: string, code: number) {
    super();
    this.name = this.constructor.name;
    this.message = 'unauthenticated';
    this.details = details;
    this.code = code;
  }
}

/**
* PermissionDenied indicates the caller does not have permission to
* execute the specified operation.
*/
export class PermissionDenied extends Error {
  details: string;
  name: string;
  message: string;
  code: number;
  constructor(details: string, code: number) {
    super();
    this.name = this.constructor.name;
    this.message = 'permission denied';
    this.details = details;
    this.code = code;
  }
}

/**
 * FailedPrecondition means the system is not in a state in which
 * the operation can be executed. A precondition, for example a call
 * to a different endpoint before this call is required.
 */
export class FailedPrecondition extends Error {
  details: string;
  name: string;
  message: string;
  code: number;
  constructor(details: string, code: number) {
    super();
    this.name = this.constructor.name;
    this.message = 'failed precondition';
    this.details = details;
    this.code = code;
  }
}