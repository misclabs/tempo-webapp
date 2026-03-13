import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";
import type { ReactElement } from "react";
import Button from "../ui/button";

export type PlayPauseButtonProps = {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  disabled?: boolean;
};

export default function PlayPauseButton({
  isPlaying,
  setIsPlaying,
  ...rest
}: PlayPauseButtonProps): ReactElement {
  if (isPlaying) {
    return (
      <Button aria-label="pause" onClick={() => setIsPlaying(false)} {...rest}>
        <PauseIcon width="1.375rem" height="1.375rem" />
      </Button>
    );
  }

  return (
    <Button aria-label="play" onClick={() => setIsPlaying(true)} {...rest}>
      <PlayIcon width="1.375rem" height="1.375rem" />
    </Button>
  );
}
