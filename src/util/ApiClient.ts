import { notification } from "antd"

import axios, { AxiosInstance } from "axios"

import lodash from "lodash"

class ApiClient {
    static instance: AxiosInstance

    static getInstance = () => {
        if (!ApiClient.instance) {
            ApiClient.initialize()
        }

        return ApiClient.instance
    }

    static initialize = () => {
        const instance = axios.create({
            baseURL: "https://interview.switcheo.com",
        })

        instance.defaults.timeout = 60000

        instance.interceptors.response.use(
            function (response: any) {
                // Any status code that lie within the range of 2xx cause this function to trigger
                // Do something with response data
                return response
            },
            function (error: any) {
                // Any status codes that falls outside the range of 2xx cause this function to trigger
                // Do something with response error
                if (lodash.get(error, "response.status") >= 500) {
                    notification.error({
                        message: "Máy chủ gặp sự cố. Vui lòng thử lại sau",
                        key: "server_error",
                    })
                }

                return Promise.reject(error)
            }
        )

        ApiClient.instance = instance
    }
}

const apiClient = ApiClient.getInstance()

export default apiClient
