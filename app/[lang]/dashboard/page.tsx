import { FC } from "react";

import ContactForm from "@/components/ContactForm";
import { getDictionary } from "@/dictionaries";
import { IServerPageProps } from "@/types/common";

const Dashboard: FC<IServerPageProps> = async ({ params: { lang } }) => {
  const { dashboard } = await getDictionary(lang);

  return (
    <div>
      <h1>{dashboard.title}</h1>
      <ContactForm />
    </div>
  );
};

export default Dashboard;
