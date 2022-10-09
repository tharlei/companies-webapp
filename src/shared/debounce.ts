export function debounce(func: () => Promise<void>, wait: number): () => void {
  let timer: NodeJS.Timeout | undefined;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, wait);
  };
}
