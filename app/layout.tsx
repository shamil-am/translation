import { FC } from "react";

import { IServerPageProps } from "@/types/common";
import UserContextProvider from "@/contexts/userContext";

const RootLayout: FC<IServerPageProps> = ({ children }) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};

export default RootLayout;
