export enum CustomerType {
  COMMERCIAL,
  PRIVATE
}

export interface ICustomer {
  type: CustomerType;
}
