// import { useMemo } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

// interface WalletBalance {
//   currency: string;
//   amount: number;
//   blockchain: string;
// }
// interface FormattedWalletBalance {
//   currency: string;
//   amount: number;
//   formatted: string;
// }

// interface IWalletPage {
//   className: string;
//   key: number | string;
//   amount: number;
//   usdValue: number;
//   formattedAmount: string;
// }

// interface Props extends BoxProps {}

interface IErrorAndFixRq {
  no: number;
  error: string;
  fix: string;
  className?: string;
}

export const WalletPage: React.FC = () => {
  // const { children, ...rest } = props;
  // const balances = useWalletBalances();
  // const prices = usePrices();

  // const getPriority = (blockchain: any): number => {
  //   switch (blockchain) {
  //     case 'Osmosis':
  //       return 100
  //     case 'Ethereum':
  //       return 50
  //     case 'Arbitrum':
  //       return 30
  //     case 'Zilliqa':
  //       return 20
  //     case 'Neo':
  //       return 20
  //     default:
  //       return -99
  //   }
  // }

  // const sortedBalances = useMemo(() => {
  //   return balances.filter((balance: WalletBalance) => {
  // 	  const balancePriority = getPriority(balance.blockchain);
  // 	  if (balancePriority > -99) {
  // 	     if (balance.amount <= 0) {
  // 	       return true;
  // 	     }
  // 	  }
  // 	  return false
  // 	}).sort((lhs: WalletBalance, rhs: WalletBalance) => {
  // 		const leftPriority = getPriority(lhs.blockchain);
  // 	  const rightPriority = getPriority(rhs.blockchain);
  // 	  if (leftPriority > rightPriority) {
  // 	    return -1;
  // 	  } else if (rightPriority > leftPriority) {
  // 	    return 1;
  // 	  }
  //     return 0;
  //   });
  // }, [balances, prices]);

  // const formattedBalances = sortedBalances.map((balance: WalletBalance) => {
  //   return {
  //     ...balance,
  //     formatted: balance.amount.toFixed()
  //   }
  // })

  // const WalletRow = (values: IWalletPage) => {
  //   return <div key={values?.key} className={values?.className || ""}>
  //     {`${values?.usdValue} - ${values?.amount} - ${values?.formattedAmount}`}
  //   </div>
  // }

  // const rows = sortedBalances.map((balance: FormattedWalletBalance, index: number) => {
  //   const usdValue = prices[balance.currency] * balance.amount;
  //   return (
  //     <WalletRow
  //       className={"text-xl"}
  //       key={index}
  //       amount={balance.amount}
  //       usdValue={usdValue}
  //       formattedAmount={balance.formatted}
  //     />
  //   )
  // })

  // return (
  //   <div {...rest}>
  //     {rows}
  //   </div>
  // )


  const navigate = useNavigate();

  const arrError: IErrorAndFixRq[] = [
    {
      no: 1,
      error: "1. lhsPriority is not declared.",
      fix: "Replace with balancePriority or declare lhsPriority.",
    },
    {
      no: 2,
      error:
        "2. blockchain does not exist in WalletBalance interface, but in the code it calls balance.blockchain.",
      fix: "Add blockchain to WalletBalance interface.",
    },
    {
      no: 3,
      error: "3. WalletRow does not exist.",
      fix: "add WalletRow render: `usdValue - amount - formattedAmount`.",
    },
    {
      no: 4,
      error: "4. classes.row does not exist.",
      fix: "replace with the class to be passed.",
    },
    {
      no: 5,
      error:
        "5. Unimported errors include: useWalletBalances, usePrices, useMemo, BoxProps",
      fix: "Import the missing parts.",
    },
    {
      no: 6,
      error: "6. Values ​​declared but not used: children, formattedBalances.",
      fix: "Remove unused variables.",
    },
    {
      no: 7,
      error:
        "7. Because there is no API to use useWalletBalances, usePrices, all the code inside will not work.",
      fix: "I can fix it more completely if this API is provided.",
      className: "font-bold",
    },
  ];

  const renderErrorAndFix = (values: IErrorAndFixRq) => {
    return (
      <div key={values?.no} className={`mb-3 ${values?.className || ""}`}>
        <p>{values?.error}</p>
        <p>{`- Fix: ${values?.fix}`}</p>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col justify-center items-center p-10">
      <h2 className="text-xl md:text-2xl mb-8">Problem 3: Messy React</h2>
      <div className="w-full">
        <div className="mb-3 font-bold">
          I found some bugs and how to fix them:
        </div>
        {arrError?.map((item: IErrorAndFixRq) => renderErrorAndFix(item))}
      </div>

      <div>
        <Button type="primary" onClick={() => navigate("/")}>
          Go To Home
        </Button>
      </div>
    </div>
  );
};
