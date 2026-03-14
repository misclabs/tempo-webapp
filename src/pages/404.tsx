import TextLink from "../ui/text-link";
import Text from "../ui/text";
import Title from "../ui/title";
import MainContent from "./main-content";

export default function NotFoundPage() {
  return (
    <MainContent>
      <div className="text-center">
        <Text step={1} className="text-accol dark:text-accol_dk">
          404
        </Text>
        <Title step={5} className="mt-8">
          Page not found
        </Title>
        <Text as="p" step={1} className="mt-6">
          Sorry, we couldn’t find the page you’re looking for.
        </Text>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <TextLink to="/">
            Back home <span aria-hidden="true">&rarr;</span>
          </TextLink>
        </div>
      </div>
    </MainContent>
  );
}
