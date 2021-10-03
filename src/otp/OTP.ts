import { createHmac } from "crypto";
import { byteSecret, intToByteString, rjust } from "./utils";

export default class OTP {
  constructor(public secret: string, public digits = 6) {}

  generateOTP(input: number) {
    const hmacObj = createHmac("sha1", byteSecret(this.secret));
    hmacObj.update(intToByteString(input));

    const hmac = hmacObj.digest();

    const hmacA = hmac.toString().split("");

    const offset = hmacA[hmacA.length - 1].charCodeAt(0) & 0xf;

    const code =
      ((hmacA[offset].charCodeAt(0) & 0x7f) << 24) |
      ((hmacA[offset + 1].charCodeAt(0) & 0xff) << 16) |
      ((hmacA[offset + 2].charCodeAt(0) & 0xff) << 8) |
      (hmacA[offset + 3].charCodeAt(0) & 0xff);

    let strCode = (code % 10 ** this.digits).toString();

    strCode = rjust(strCode, this.digits);

    return strCode;
  }
}
