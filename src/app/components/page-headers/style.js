import Styled from "styled-components";
// import { PageHeader } from "antd";
// import "antd/dist/antd.css";
import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("antd").then((mod) => mod.PageHeader), {
  ssr: false,
});

const PageHeaderStyle = Styled(PageHeader)`
  
  .page-header-actions button.ant-btn-white svg {
    width: 12px;
    height: 12px;
    ${({ theme }) => (theme.rtl ? "margin-left" : "margin-right")}: 2px;
    color: #5f63f2;
  }
  i +span, svg +span, img +span {
      ${({ theme }) => (!theme.rtl ? "margin-left" : "margin-right")}: 6px;
  }
`;

export { PageHeaderStyle };
