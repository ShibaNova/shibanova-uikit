import React from "react";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";
import styled from "styled-components";
import ShibaNovaAuditIcon from "./icons/ShibaNovaAudit"

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  isMobile: boolean;
}

const Container = styled.div`
  margin-left: 8px;
  display: flex;
  
  ${({ theme }) => theme.mediaQueries.xl} {
    margin-left: 32px;
  }
`;

const UserBlock: React.FC<Props> = ({ account, login, logout, isMobile }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <Container>
      <a href="https://github.com/ShibaNova/Contracts/tree/main/Audits" target="_blank" rel="noreferrer noopener">
        <ShibaNovaAuditIcon  style={{paddingRight:"5px", width:"40px"}} />
      </a>
      {account ? (
        <Button
          size="sm"
          variant="secondary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          size="sm"
          style={{ fontSize: isMobile ? 16 : 14 }}
          glowing
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          {isMobile ? "Connect" : "CONNECT WALLET"}
        </Button>
      )}
    </Container>
  );
};

export default UserBlock;
