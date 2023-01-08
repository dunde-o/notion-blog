export type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE"
  | "HEAD"
  | "OPTIONS"
  | "TRACE";

export interface HttpSuccessResponseForm<T> {
  success: true;
  path: string;
  timeStamp: Date;
  data: T;
}

export interface HttpFailResponseForm {
  success: false;
  path: string;
  timeStamp: Date;
  error: {
    message: string;
  } & { [key: string]: string };
}

export type HttpResponseForm<T> =
  | HttpSuccessResponseForm<T>
  | HttpFailResponseForm;
