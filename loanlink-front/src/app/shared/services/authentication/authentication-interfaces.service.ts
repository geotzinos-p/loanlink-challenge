export interface GraphQLJsonResponse {
  data: any;
  errors: any[];
}

export interface GenericJsonResponse {
  success: boolean;
  message: string;
  data: any;
  errors: any[];
}
