# SocialvoidJS

SocialvoidJS is a Node (and maybe a browser in the future) client for Socialvoid.

- Its core is completely based on [SocialvoidPy](https://github.com).
- The OTP code is brought from [LanceGin/jsotp](https://github.com/lancegin/jsotp) and:
  - Added typings to it.
  - Made it use the built-in `crypto` instead of `jsSHA`.
  - And some more modifications and improvements.

## Running an example

```bash
git clone https://github.com/intellivoid/socialvoidjs
cd socialvoidjs
npm i
npx tsc
node examples/index
```
