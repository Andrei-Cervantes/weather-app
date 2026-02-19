import { type AxiosInstance, type AxiosResponse } from "axios";
import { type IAxios } from "@/lib/typings/IAxios";
import { useMemo } from "react";

export const useAxios = (client: AxiosInstance) => {
  const instance = useMemo(() => client, [client]);

  const GET = async <R, P = unknown, B = unknown>(
    args: IAxios<P, B>,
  ): Promise<AxiosResponse<R>> => {
    return instance<R>({
      ...args,
      method: "GET",
    });
  };

  const POST = async <R, P = unknown, B = unknown>(
    args: IAxios<P, B>,
  ): Promise<AxiosResponse<R>> => {
    return instance<R>({
      ...args,
      method: "POST",
    });
  };

  const PUT = async <R = unknown, P = unknown, B = unknown>(
    args: IAxios<P, B>,
  ): Promise<AxiosResponse<R>> => {
    return instance<R>({
      ...args,
      method: "PUT",
    });
  };

  const PATCH = async <R = unknown, P = unknown, B = unknown>(
    args: IAxios<P, B>,
  ): Promise<AxiosResponse<R>> => {
    return instance<R>({
      ...args,
      method: "PATCH",
    });
  };

  const DELETE = async <R = unknown, P = unknown, B = unknown>(
    args: IAxios<P, B>,
  ): Promise<AxiosResponse<R>> => {
    return instance<R>({
      ...args,
      method: "DELETE",
    });
  };

  return {
    GET,
    POST,
    PUT,
    PATCH,
    DELETE,
  };
};
