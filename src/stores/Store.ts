export default abstract class Store {
  abstract set(key: string, value: any): void;
  abstract get(key: string): any;
  abstract delete(key: string): void;
  abstract save(): void;
}
