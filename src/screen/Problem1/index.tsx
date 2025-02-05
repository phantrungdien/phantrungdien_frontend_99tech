import { Button, Form, InputNumber } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Problem1: React.FC = () => {
  const [formRef] = Form.useForm();
  const navigate = useNavigate();
  const [methodSum1, setMethodSum1] = useState(0);
  const [methodSum2, setMethodSum2] = useState(0);
  const [methodSum3, setMethodSum3] = useState(0);

  const handleMethodSum1 = () => {
    const n = Number(
      formRef.getFieldValue("value1").replace(/[a-zA-Z].*$/, "") || 0
    );
    const sum = (n * (n + 1)) / 2;

    setMethodSum1(sum);
  };

  const handleMethodSum2 = () => {
    const n = Number(
      formRef.getFieldValue("value2").replace(/[a-zA-Z].*$/, "") || 0
    );
    let sum = 0;

    const calculateSum: any = (n: number) => {
      if (n === 1) return 1;
      return n + calculateSum(n - 1);
    };

    sum = calculateSum(n);

    setMethodSum2(sum);
  };

  const handleMethodSum3 = () => {
    const n = Number(
      formRef.getFieldValue("value3").replace(/[a-zA-Z].*$/, "") || 0
    );
    const sum = Array.from({ length: n }, (_, i) => i + 1).reduce(
      (sum, num) => sum + num,
      0
    );

    setMethodSum3(sum);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center p-10">
      <h2 className="text-xl md:text-2xl mb-8">Problem 1: Summation to n</h2>
      <Form
        name="methodSum"
        autoComplete="off"
        className="w-full"
        layout="vertical"
        form={formRef}
      >
        <Form.Item
          label="Method 1: mathematical formula"
          name="value1"
          className="flex"
        >
          <div>
            <div className="flex mb-2 w-full">
              <InputNumber
                placeholder="Enter any integer"
                className="!mr-1 !w-full"
                onKeyDown={(e) => (e.keyCode == 13 ? e.preventDefault() : "")}
              />
              <Button onClick={handleMethodSum1}>Sum</Button>
            </div>
            <p>Result: {methodSum1}</p>
          </div>
        </Form.Item>
        <hr className="mb-6 text-gray-300" />
        <Form.Item label="Method 2: recursive" name="value2" className="flex">
          <div>
            <div className="flex mb-2 w-full">
              <InputNumber
                placeholder="Enter any integer"
                className="!mr-1 !w-full"
                onKeyDown={(e) => (e.keyCode == 13 ? e.preventDefault() : "")}
              />
              <Button onClick={handleMethodSum2}>Sum</Button>
            </div>
            <p>Result: {methodSum2}</p>
          </div>
        </Form.Item>
        <hr className="mb-6 text-gray-300" />
        <Form.Item label="Method 3: reduce" name="value3" className="flex">
          <div>
            <div className="flex mb-2 w-full">
              <InputNumber
                placeholder="Enter any integer"
                className="!mr-1 !w-full"
                onKeyDown={(e) => (e.keyCode == 13 ? e.preventDefault() : "")}
              />
              <Button onClick={handleMethodSum3}>Sum</Button>
            </div>
            <p>Result: {methodSum3}</p>
          </div>
        </Form.Item>
      </Form>
      <div>
        <Button type="primary" onClick={() => navigate("/")}>
          Go To Home
        </Button>
      </div>
    </div>
  );
};
