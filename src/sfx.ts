const audioContext = new window.AudioContext();

function createClipFunc(context: AudioContext, audioElementId: string) {
  const audioElement = document.getElementById(
    audioElementId,
  ) as HTMLMediaElement;

  const sourceNode = context.createMediaElementSource(audioElement);
  sourceNode.connect(context.destination);

  return () => {
    if (context.state === "suspended") context.resume();
    audioElement.play();
  };
}

export const playClick = createClipFunc(audioContext, "click-audio");
export const playAlarm = createClipFunc(audioContext, "alarm-audio");
