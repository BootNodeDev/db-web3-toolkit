# dAppBooster Web3 Toolkit

[dAppBooster](https://github.com/BootNodeDev/dAppBooster) common Web3 components

A preview is available at https://db-web3-toolkit.vercel.app/

## Installation

- Clone the repo following the usual steps.

```
git clone git@github.com:BootNodeDev/db-web3-toolkit.git
```

- Install

```
nvm use
pnpm i
```

- Run a preview on http://localhost:1208 All your changes will be visible here in real time.

```
pnpm dev # Runs a preview on http://localhost:1208
```

## Development alongside dAppBooster

- Follow the steps on **Installation** above.
- Install `dAppBooster` following the README's steps at https://github.com/BootNodeDev/dAppBooster

- Remove `db-web3-toolkit` from your local copy of `dAppBooster`:

```
pnpm remove db-web3-toolkit
```

- Install your local copy of `db-web3-toolkit` on `dAppBooster` (i.e.: `pnpm i /users/yourusername/db-web3-toolkit`)

```
pnpm i <path_to_where_the_local_library_is>
```

Now you can run `dAppBooster` locally using `pnpm dev` and it'll use your local build of `db-web3-toolkit`.

**Important:** Don't forget to use `pnpm build` when you want to see your changes in dAppBooster.

---

You can try a three consoles approach:

- One for `dAppBoster` (`pnpm dev` runs on http://localhost:5173/)
- A second one for `dAppBooster Web3 Toolkit`'s preview (`pnpm dev` runs on http://localhost:1208/)
- A third one for building `dAppBooster Web3 Toolkit` (`pnpm build` will update the files in `/dist` and the changes will be immediately available on your local copy of `dAppBooster`).

## Building

```
pnpm build # This command generates a new distributable bundle in the /dist folder
```

## Deployment

- I suggest working in a branch different to `main` for this, i.e.: `feat/new-feature`
- Make any changes you want.
- Test your changes. Be thorough. Make sure that everything works by itself in the preview AND in `dAppBooster`.
- Run `pnpm build`.
- Commit and push your changes, and merge into `main`
- Once everything is stable and ready for release [tag a new version](https://semver.org/) so you don't break everything for everyone.

**Note:** This package is not yet published to npm, so you'll have to use it by doing `pnpm add BootNodeDev/db-web3-toolkit#tag` or `pnpm add BootNodeDev/db-web3-toolkit` on your console.
