export const increament = 'increament';
export const decreament = 'decreament';


export class IncreamentAction {
  type = increament;
  payload: number;

  constructor(payload: number) {
    this.payload = payload;
  }
}

export class DecreamentAction {
  type = decreament;
  payload: number;

  constructor(payload: number) {
    this.payload = payload;
  }
}
