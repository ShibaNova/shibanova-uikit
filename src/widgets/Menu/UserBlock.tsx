import React from "react";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  isMobile: boolean;
}

const UserBlock: React.FC<Props> = ({ account, login, logout, isMobile }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div style={{ marginLeft: isMobile ? 32 : 64 }}>
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
    </div>
  );
};

export default UserBlock;
