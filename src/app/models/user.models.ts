export interface IUser {
  firstName?: string;
  familyName?: string;
  email?: string;
  age?: number;
  monthlyIncome?: number;
  isMarried?: boolean;
  numberOfChildren?: number;
}

export class User implements IUser {
  constructor(firstName?: string,
              familyName?: string,
              email?: string,
              age?: number,
              monthlyIncome?: number,
              isMarried?: boolean,
              numberOfChildren?: number) {
  }
}
