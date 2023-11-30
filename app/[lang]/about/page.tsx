import { FC } from "react";

import { getDictionary } from "@/dictionaries";
import { IServerPageProps } from "@/types/common";

const About: FC<IServerPageProps> = async ({ params: { lang } }) => {
  const { about } = await getDictionary(lang);

  return (
    <div>
      <h1>{about.title}</h1>
    </div>
  );
};

export default About;
