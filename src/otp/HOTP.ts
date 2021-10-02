import OTP from "./OTP";

export default class HOTP extends OTP {
  at(count: number) {
    const digit = super.generateOTP(count);
    return digit;
  }

  verify(otp: number | string, count: number) {
    const otpCount = this.at(count);

    if (typeof otp === "number") {
      otp = otp.toString();
    }

    if (otp === otpCount) {
      return true;
    }

    return false;
  }
}
