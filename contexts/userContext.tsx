"use client";

import React, { ChangeEvent, createContext, ReactNode, useState } from "react";

interface IUserInfo {
  name: string;
  surname: string;
}

interface IUserContextProps {
  userInfo: IUserInfo;
  changeUserInfo: (
    key: "name" | "surname"
  ) => (e: ChangeEvent<HTMLInputElement>) => void;
}

interface IUserContextProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<IUserContextProps>(null!);

const UserContextProvider: React.FC<IUserContextProviderProps> = ({
  children,
}) => {
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    name: "",
    surname: "",
  });

  const changeUserInfo =
    (key: "name" | "surname") => (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setUserInfo((prevState) => ({ ...prevState, [key]: value }));
    };

  return (
    <UserContext.Provider value={{ userInfo, changeUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
