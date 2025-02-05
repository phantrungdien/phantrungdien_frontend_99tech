import CurrencyApi from "@api/currencyApi";
import { ICurrencyRespond } from "@domain/currency";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useGetListCurrency = (): UseQueryResult<
  AxiosResponse<ICurrencyRespond[]>
> => {
  return useQuery({
    queryKey: ["currency.get_list"],
    queryFn: async () => {
      return await CurrencyApi.getListCurrency();
    },
  });
};
