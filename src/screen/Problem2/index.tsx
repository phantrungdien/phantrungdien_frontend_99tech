import { Button, Form, InputNumber, Select, Spin } from "antd";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { customFromCss } from "./style";
import { SwapOutlined } from "@ant-design/icons";
import { useGetListCurrency } from "@hook/useCurrency";
import { useEffect, useMemo, useState } from "react";
import { find } from "lodash";
import { ICurrencyRespond } from "@domain/currency";

export const Problem2: React.FC = () => {
  const navigate = useNavigate();
  const [formRef] = Form.useForm();
  const { data, isLoading } = useGetListCurrency();

  const [amount, setAmount] = useState(0);
  const [convertTo, setConvertTo] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState(
    data?.data?.[0]?.currency || "USD"
  );

  const options = useMemo(() => {
    if (data?.data) {
      data?.data?.sort((a, b) => new Date(b.date) - new Date(a.date));

      const uniqueCurrencies = new Map();
      const result: ICurrencyRespond[] = [];

      // eslint-disable-next-line no-unsafe-optional-chaining
      for (const item of data?.data) {
        if (!uniqueCurrencies.has(item.currency)) {
          uniqueCurrencies.set(item.currency, true);
          result.push(item);
        }
      }

      const newData = result?.map((item) => ({
        value: item?.currency,
        label: item?.currency,
        ...item,
      }));

      return newData;
    }
  }, [data?.data]);

  const USD = useMemo(() => {
    return find(data?.data, { currency: "USD" });
  }, [data?.data]);

  useEffect(() => {
    const firstConvert = find(data?.data, {
      currency: data?.data?.[0]?.currency || "USD",
    });

    if (USD) {
      setAmount(USD?.price);
    }
    if (firstConvert) {
      setConvertTo(firstConvert?.price);
      setToCurrency(firstConvert?.currency);
    }
    formRef.setFieldsValue({
      currency_amount: USD?.currency || "USD",
      currency_convert: firstConvert?.currency || "USD",
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.data]);

  const calculatePrice = (from: number, to: number) => {
    if (from && to) {
      const price = ((USD?.price || 1) * to) / from;

      return price;
    }

    return 0;
  };

  const onValuesChange = (changedValues: any, allValues: any) => {
    const currencyArr = ["currency_amount", "currency_convert"];
    const priceArr = ["amount", "convert"];

    if (currencyArr.includes(Object.keys(changedValues)[0] || "")) {
      if (
        changedValues["currency_amount"] !== undefined ||
        changedValues["currency_amount"] !== null ||
        changedValues["currency_convert"] !== undefined ||
        changedValues["currency_convert"] !== null
      ) {
        const valueAmount = find(data?.data, {
          currency: allValues?.currency_amount,
        });
        const valueConvert = find(data?.data, {
          currency: allValues?.currency_convert,
        });
        const onePrice = calculatePrice(
          valueAmount?.price || 0,
          valueConvert?.price || 0
        );

        setAmount(1);
        setConvertTo(onePrice);
        setFromCurrency(valueAmount?.currency || "");
        setToCurrency(valueConvert?.currency || "");

        if (
          allValues["amount"] !== undefined ||
          allValues["amount"] !== null ||
          allValues["convert"] !== undefined ||
          allValues["convert"] !== null
        ) {
          const valueConvert = allValues?.amount * onePrice;
          formRef.setFieldValue("convert", valueConvert);
        }
      }
    }

    if (priceArr.includes(Object.keys(changedValues)[0] || "")) {
      if (
        changedValues["amount"] !== undefined ||
        changedValues["amount"] !== null ||
        changedValues["convert"] !== undefined ||
        changedValues["convert"] !== null
      ) {
        if (Object.keys(changedValues)[0] === "amount") {
          const valueConvert = changedValues?.amount * convertTo;
          formRef.setFieldValue("convert", valueConvert);
        } else {
          const valueAmount = changedValues?.convert / convertTo;
          formRef.setFieldValue("amount", valueAmount);
        }
      }
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center p-10 bg-[#edefec]">
      <h2 className="text-xl md:text-2xl mb-8">Currency Converter</h2>
      {isLoading ? (
        <div className={`h-full grow flex justify-center items-center py-4`}>
          <Spin size="large" />
        </div>
      ) : (
        <Form
          name="methodSum"
          autoComplete="off"
          className="w-full bg-white rounded-lg !mb-8"
          layout="vertical"
          form={formRef}
          onValuesChange={onValuesChange}
        >
          <div className="border border-solid border-gray-300 rounded-lg p-6">
            <div
              className={classNames(
                "w-full grid grid-cols-13 gap-2 mb-6",
                customFromCss
              )}
            >
              <div className="col-span-13 lg:col-span-6 w-full">
                <p className="mb-2">Amount</p>
                <div className="problem_currency_to col-span-6 grid grid-cols-13 border border-solid border-gray-300 rounded-md">
                  <Form.Item name="amount" className="flex col-span-9 sm:col-span-10">
                    <InputNumber
                      placeholder="Amount"
                      className="!mr-1 !w-full !border-none !shadow-none problem_currency_to_children"
                      controls={false}
                      onKeyDown={(e) =>
                        e.keyCode == 13 ? e.preventDefault() : ""
                      }
                    />
                  </Form.Item>
                  <Form.Item name="currency_amount" className="flex col-span-4 sm:col-span-3">
                    <Select
                      className="custom_select problem_currency_to_children"
                      options={options || []}
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="col-span-13 lg:col-span-1 flex justify-center items-end">
                <Button className="rotate-90 lg:rotate-none" icon={<SwapOutlined />}></Button>
              </div>
              <div className="col-span-13 lg:col-span-6 w-full">
                <p className="mb-2">Convert to</p>
                <div className="problem_currency_to col-span-6 grid grid-cols-13 border border-solid border-gray-300 rounded-md">
                  <Form.Item name="convert" className="flex col-span-9 sm:col-span-10">
                    <InputNumber
                      placeholder="Convert to"
                      className="!mr-1 !w-full !border-none !shadow-none problem_currency_to_children"
                      controls={false}
                      onKeyDown={(e) =>
                        e.keyCode == 13 ? e.preventDefault() : ""
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    name="currency_convert"
                    className="flex col-span-4 sm:col-span-3"
                  >
                    <Select
                      className="custom_select problem_currency_to_children"
                      options={options || []}
                    />
                  </Form.Item>
                </div>
              </div>
            </div>
            <b>
              {amount} {fromCurrency} = {convertTo} {toCurrency}
            </b>
          </div>
        </Form>
      )}
      <div>
        <Button type="primary" onClick={() => navigate("/")}>
          Go To Home
        </Button>
      </div>
    </div>
  );
};
