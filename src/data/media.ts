export type VideoSource = { src: string; type: string };

export function clip(name: string): VideoSource[] {
  return [{ src: `/assets/media/${name}.mp4`, type: "video/mp4" }];
}
