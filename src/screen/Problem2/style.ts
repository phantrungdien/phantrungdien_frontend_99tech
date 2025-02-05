import { css } from "@emotion/css";

export const customFromCss = css`
  .problem_currency_to:has(.problem_currency_to_children:hover) {
    border-color: #1677ff;
  }
  .problem_currency_to:focus-within {
    border-color: #1677ff;
  }

  .ant-form-item {
    margin-bottom: 0px;

    .ant-form-item-row {
      width: 100%;

      .ant-form-item-control {
        .ant-form-item-control-input {
          .ant-form-item-control-input-content {
            width: 100%;
          }
        }
      }
    }
  }

  .custom_select {
    .ant-select-selector {
      border-style: none !important;
      box-shadow: 0 0 #0000 !important;
    }
  }
`;
