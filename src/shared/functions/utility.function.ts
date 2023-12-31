export function getImageSrc(src: string): string {
  return process.env.REACT_APP_URL + `${src}`;
}
