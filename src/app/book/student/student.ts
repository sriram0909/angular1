export class Student {
  id: number;
  customername: string;
  contactperson: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  pan: string;
  registeron: string;
  Type: string;
  taxDescription: string;
  baseAmount: number;
  taxp: number;
  taxAmount: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
