export async function waitSomeTime() {
  return new Promise(resolve => setTimeout(() => resolve(true), 1000));
}
