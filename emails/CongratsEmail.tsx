import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import Footer from "@/emails/components/Footer";
import { APP_LOGO } from "@/config/config";

export default function CongratsEmail({
  name = "Irfan Sadek",
  email = "sadekirfan3@gmail.com",
  plan = "Pro",
}: {
  name: string | null;
  email: string;
  plan: string;
}) {
  return (
    <Html>
      <Head />
      <Preview>Thank you for upgrading to Webship {plan}!</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-10 max-w-[500px] rounded border border-solid border-gray-200 px-10 py-5">
            <Section className="mt-8">
              <Img
                src={APP_LOGO}
                width="40"
                height="40"
                alt="webship"
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="mx-0 my-7 p-0 text-center text-xl font-semibold text-black">
              Thank you for upgrading to Webship {plan}!
            </Heading>
            <Section className="my-8">
              <Img src="#" alt="Thank you" className="max-w-[500px]" />
            </Section>
            <Text className="text-sm leading-6 text-black">
              Hey{name && ` ${name}`}!
            </Text>
            <Text className="text-sm leading-6 text-black">
              My name is Irfan, and I'm the founder of webship. I wanted to
              personally reach out to thank you for upgrading to Webship {plan}!
            </Text>
            <Text className="text-sm leading-6 text-black">
              On the {plan} plan, you now have access to:
            </Text>
            <Text className="ml-1 text-sm leading-4 text-black">
              ◆ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>

            <Text className="ml-1 text-sm leading-4 text-black">
              ◆ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>

            <Text className="ml-1 text-sm leading-4 text-black">
              ◆ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>

            <Text className="ml-1 text-sm leading-4 text-black">
              ◆ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>

            <Text className="ml-1 text-sm leading-4 text-black">
              ◆ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <Text className="text-sm leading-6 text-black">
              Let me know if you have any questions or feedback. I'm always
              happy to help!
            </Text>
            <Text className="text-sm font-light leading-6 text-gray-400">
              Irfan from webship
            </Text>

            <Footer email={email} marketing />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
