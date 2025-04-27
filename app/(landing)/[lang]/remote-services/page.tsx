// pages/service-page.tsx

import { getDictionary } from "@/lib/dictionaries";
import ClientComponent from "./_components/ClientComponent";

export default async function ServicePage({ params }: { params: { lang: string } }) {

  const lang = params.lang
  const dict = await getDictionary(lang);

  return <ClientComponent dict={dict} />;
}
