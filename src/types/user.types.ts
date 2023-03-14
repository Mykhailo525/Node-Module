export enum EGenders {
  male = "male",
  female = "female",
  mixed = "mixed",
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  gender: string;
}

export interface IMessage {
  message: string;
}

export interface ICommonResponse<T> extends IMessage {
  data: T;
}
