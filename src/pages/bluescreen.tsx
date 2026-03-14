import type { ReactElement } from "react";
import { getErrorMessage, type FallbackProps } from "react-error-boundary";
import TeButton from "../ui/button";
import Title from "../ui/title";
import MainContent from "./main-content";
import Text from "../ui/text";

export default function Bluescreen({
  error,
  resetErrorBoundary,
}: FallbackProps): ReactElement {
  return (
    <MainContent>
      <Title>A problem has been detected.</Title>
      <div className="mt-6">
        <Text>Error: {getErrorMessage(error)}</Text>
      </div>
      <div className="mt-10">
        <TeButton onClick={resetErrorBoundary}>Restart</TeButton>
      </div>
    </MainContent>
  );
}
