import { FC } from "react";

import { getDictionary } from "@/dictionaries";
import { IServerPageProps } from "@/types/common";

const Home: FC<IServerPageProps> = async ({ params: { lang } }) => {
  const { home } = await getDictionary(lang);

  return (
    <div>
      <h1>{home.title} </h1>
    </div>
  );
};

export default Home;
