# Oink

Oink links a local package into another project so you can test changes without publishing. Full docs: https://olchyk98.github.io/mt-linking/.

## Why Oink
- Links packages in place; no manual copying.
- Detects common build setups and moves the outputs for you.
- Saves learned packages under `~/.config/oink/link/`.
- Optional live reload keeps things in sync while you edit.

## Quick Start
1. Install: `pnpm install -g oink0`.
2. In the source package run `oink learn`.
3. In the consumer run `oink` (`--livereload` streams updates).

## Daily Use
- Learn once; run `oink` in any consumer and it reuses the saved setup.
- Each run reads `package.json`, builds if needed, and copies the output folders.
- Reset with `oink forget` to clear saved packages.

## Package Detection
Oink spots common layouts and copies their outputs plus `package.json`:

- Transpiled bundle (`rollup.config.mjs`): `dist`, `web`, `lib`
- Build script bundle (`build` script only): `dist`, `web`, `lib`
- Amend + web (`amend`, `lib`, and `web`/`dist`): `amend`, `boundaries`, `lib`, `dist`, `web`
- Amend native (`amend` + `lib`): `amend`, `boundaries`, `lib`
- Makefile (`Makefile` present): `dist`, `web`, `lib`
- Source only (`src` or `lib`): `src`, `lib`

## Flags
- `--livereload` watches the source package, skips `.gitignore`, and relinks after 200 ms.
- `--debounce <ms>` sets a different watch delay.
- `--reprompt` reopens the package picker after each run.

## Contributing
Open an issue for bugs or ideas. Pull requests are by discussion only.

Created by Oles Odynets, 2025.
