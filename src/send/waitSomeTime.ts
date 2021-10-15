export async function waitSomeTime(): Promise<void> {
  return new Promise(resolve => setTimeout(() => resolve(), 5000));
}
