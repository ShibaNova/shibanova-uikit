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

const ConnectButton = styled(Button)`
  font-weight: bold;
  padding: 10px;
  border-radius: 18px;
  height: auto;
  box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.primary};
`;

const UserBlock: React.FC<Props> = ({ account, login, logout, isMobile }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div style={{ marginLeft: 64 }}>
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
        <ConnectButton
          size="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          {isMobile ? "Connect" : "CONNECT WALLET"}
        </ConnectButton>
      )}
    </div>
  );
};

export default UserBlock;
