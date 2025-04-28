

import { getDictionary } from "@/lib/dictionaries";
import WrappedMeetingConfirmation from "./components/meetingConfirmation";

export default async function MeetingConfirmationPage({ params }: { params: { lang: string } }) {
  const lang = params.lang
  const dict = await getDictionary(lang);

  return <WrappedMeetingConfirmation dict={dict} />;
}
