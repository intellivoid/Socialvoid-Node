import OTP from "./OTP";
import { timeCode } from "./utils";

export default class TOTP extends OTP {
  constructor(public secret: string, public interval = 30) {
    super(secret);
  }

  now() {
    const now = timeCode(String(new Date()), this.interval);

    const digit = super.generateOTP(now);
    return digit;
  }

  verify(otp: number | string, time?: Date) {
    let otpTime: string;

    if (!time) {
      time = new Date();
    }
    otpTime = super.generateOTP(timeCode(String(time), this.interval));

    if (typeof otp === "number") {
      otp = otp.toString();
    }

    if (otp === otpTime) {
      return true;
    }
    return false;
  }
}
