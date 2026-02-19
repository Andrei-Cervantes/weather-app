import { type AxiosRequestConfig } from "axios";

export interface IAxios<P = unknown, B = unknown> extends Omit<
  AxiosRequestConfig<B>,
  "params"
> {
  params?: P;
}
