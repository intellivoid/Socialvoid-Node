export interface NibblerParams {
  pad: string;
  dataBits: any;
  codeBits: any;
  keyString: any;
  arrayData?: any;
}

export class Nibbler {
  mask: any;
  group: any;
  max: number;

  constructor(public params: NibblerParams) {
    let i, mag, prev;

    this.params.pad = this.params.pad || "";

    mag = Math.max(this.params.dataBits, this.params.codeBits);
    prev = 0;
    this.mask = [];
    for (i = 0; i < mag; i += 1) {
      this.mask.push(prev);
      prev += prev + 1;
    }
    this.max = prev;

    this.group =
      this.params.dataBits /
      this.gcd(this.params.dataBits, this.params.codeBits);
  }

  private gcd(a: number, b: number) {
    let t: number;

    while (b !== 0) {
      t = b;
      b = a % b;
      a = t;
    }

    return a;
  }

  private translate(
    input: string,
    bitsIn: number,
    bitsOut: number,
    decoding: boolean
  ) {
    let i: number,
      len: number,
      chr: string,
      byteIn: number,
      buffer: number,
      size: number,
      output: Array<string | number>;

    const write = (n: number) => {
      if (!decoding) {
        output.push(this.params.keyString.charAt(n));
      } else if (this.params.arrayData) {
        output.push(n);
      } else {
        output.push(String.fromCharCode(n));
      }
    };

    buffer = 0;
    size = 0;
    output = [];

    len = input.length;
    for (i = 0; i < len; i += 1) {
      size += bitsIn;

      if (decoding) {
        chr = input.charAt(i);
        byteIn = this.params.keyString.indexOf(chr);

        if (chr === this.params.pad) {
          break;
        } else if (byteIn < 0) {
          throw `the character "${chr}" is not a member of ${this.params.keyString}`;
        }
      } else {
        if (this.params.arrayData) {
          // @ts-ignore
          byteIn = input[i];
        } else {
          byteIn = input.charCodeAt(i);
        }
        if ((byteIn | this.max) !== this.max) {
          throw `${byteIn} is outside the range 0-${this.max}`;
        }
      }

      buffer = (buffer << bitsIn) | byteIn;

      while (size >= bitsOut) {
        size -= bitsOut;

        write(buffer >> size);

        buffer &= this.mask[size];
      }
    }

    if (!decoding && size > 0) {
      write(buffer << (bitsOut - size));

      len = output.length % this.group;
      for (i = 0; i < len; i += 1) {
        output.push(this.params.pad);
      }
    }

    return (
      this.params.arrayData && decoding ? output : output.join("")
    ) as string;
  }

  encode(input: string) {
    return this.translate(
      input,
      this.params.dataBits,
      this.params.codeBits,
      false
    );
  }

  decode(input: string) {
    return this.translate(
      input,
      this.params.codeBits,
      this.params.dataBits,
      true
    );
  }
}

export const Base32 = new Nibbler({
  dataBits: 8,
  codeBits: 5,
  keyString: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  pad: "=",
});

export const b32encode = (input: string) => Base32.encode(input);
export const b32decode = (input: string) => Base32.decode(input);
