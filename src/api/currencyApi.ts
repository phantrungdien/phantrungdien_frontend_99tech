
import { ICurrencyRespond } from "@domain/currency"
import apiClient from "@util/ApiClient"

export default class CurrencyApi {
    static getListCurrency(): Promise<ICurrencyRespond[]> {
        return apiClient.get("/prices.json")
    }
}
