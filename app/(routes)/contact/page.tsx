import ContactBox from "@/components/contact-box";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import { dataContact } from "@/data";

export default function ContactPage() {
  return (
    <ContainerPage>
      <TransitionPage />
      <ContactBox data={dataContact[0]} />
    </ContainerPage>
  );
}