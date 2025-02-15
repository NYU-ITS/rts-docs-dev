# Research Technology Services @ NYU

## For development locally 

Please make sure to install [`pixi shell`](https://pixi.sh/latest/#installation), to install on Linux/MacOS run:

```
curl -fsSL https://pixi.sh/install.sh | bash
```

Verify pixi installation by running:

```
pixi help
```

To Create a local pixi `shell` then to install `pnpm` and `nodejs` run:

```
pixi install
```

> You may check the `pixi.toml` file for information on pnpm version and pixi scripts.

Activate the `shell` by running:

```
pixi shell
```

Install `npm packages` using `pnpm` within this shell:

```
pnpm install
```

Build `docusaurus site` by running:

```
pnpm build
```

Serve the site with:

```
pnpm serve
```

To conduct a `linting` check with `remark-cli` run:

```
pnpm lint
```

To remove all node packages for downloading and building from scratch, exit pixi shell by running `exit`, then dry run `git clean`:

```
git clean -nXd
```

Check which files and directories will be removed, then to actually remove these files run:

```
git clean -fXd
```

Once done, you may begin from the start with `pixi install`.

## Deploy locally:
On Linux/Macos run:
```
curl -fsSL https://pixi.sh/install.sh | bash
```
or look for alternate methods/platforms [here](https://pixi.sh/latest/#installation).

### Build and serve:
```
pixi run serve
```
