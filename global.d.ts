export {};

declare global {
  interface Window {
    ym: (counterId: number, action: string, options: string ) => void;
  }
}
