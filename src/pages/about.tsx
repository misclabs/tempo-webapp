import Text from "../ui/text";
import Title from "../ui/title";
import MainContent from "./main-content";

export default function AboutPage() {
  return (
    <MainContent>
      <Title step={5}>Carpe Jugulum</Title>
      <Text step={1} as="p" className="mt-8">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
      </Text>
    </MainContent>
  );
}
