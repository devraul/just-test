# Test JUST

This project is a collection of different applications to test "just-\*" package module compatibility.

## Getting Started

First, make sure you have pnpm installed globally.

> pnpm was chosen just for the sake of having workspaces commands with the minimum of setup;

```
npm install -g pnpm
```

Then, install projects dependencies:

```
pnpm install
```

## Strategy

- All apps lives inside `apps/*` folder;
- All apps uses `just-diff` package (but it could be other one);
- `just-diff` is installed at root level but it can be used by each app (thanks pnpm workspace);
- All apps imports `just-diff` and either console or render the result of dif operation;
- All apps must have an npm script called `test-just` with the command to execute that app (e.g., build);

## Running test command

With those rules in place, now you can test if the import is working fine by running:

```
pnpm run test-just --filter <app-name>
```

It's also possible to run this command for ALL apps:

```
pnpm run test-just --filter ./apps
```

Of course you have to be aware that if some fail, the execution will be interrupted.

## Applications

You can check all apps that's currently being tested by looking the `/apps` folder.

If you miss a specific variation, create a new app there.

## Updating just

The following command update "just-diff" dependency at root level. This will have impact in all apps since they rely on it:

```
pnpm add -W just-diff@4.1.0
```
