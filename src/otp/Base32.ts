import { b32decode, b32encode } from "./nibbler";

export default class Base32 {
  static decode(secret: string) {
    return b32decode(secret);
  }

  static random_gen(length = 16) {
    return b32encode(Math.random().toString(36)).substring(0, length);
  }
}
