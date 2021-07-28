import React from "react";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";
import styled from "styled-components";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  isMobile: boolean;
}

const Container = styled.div`
  margin-left: 8px;
  ${({ theme }) => theme.mediaQueries.xl} {
    margin-left: 64px;
  }
`;

const UserBlock: React.FC<Props> = ({ account, login, logout, isMobile }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <Container>
      {account ? (
        <Button
          size="sm"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          size="sm"
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
