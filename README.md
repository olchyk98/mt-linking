# Oink 🏎️

_Intelligent Linker for Camphouse's codebase._

## Quickstart 🚀

_It's as easy as 1..2..3._

### 1️⃣ Install Oink globally

```sh
pnpm install -g oink0
```

### 2️⃣ Teach Oink about a package
Go to any package you want to link and run:

```sh
cd [some_package]
oink learn
```

If you want to teach Oink about multiple packages, you can specify a pattern as input. Oink will traverse through the folders and learn about every single package it can find on its way!

For example:

```sh
oink learn "./**/*"
```

> **⚡️ Quotes Warning!**  
> It is required to have quotes around your pattern. Most shells try to auto-expand patterns into paths before they reach Oink, which is not supported. **Always wrap your pattern in quotes!**

### 3️⃣ Link!

Go to another package (like `webapp`) and run:

```sh
oink
```

## What about Live Reload? 🔄
To activate live reload, pass the `--livereload` flag when running `oink`. Oink will ensure that every time your package changes, it is automatically processed and linked.

## Purpose of this Tool 🛠
For a long time, developers have struggled with managing local deployments - moving folders and files around, copying from `dist` to `node_modules`, etc.

Right now, we don’t have full coverage of PNPM workspaces yet, so until we get there, Oink simplifies the linking process. The goal? To become a core part of the ecosystem - especially when working with packages outside of the Mediatool main repo.

----------

## Why should you use Oink? 🤔

### 🚀 **Effortless Linking**
With a simple command, Oink intelligently links packages in your project, eliminating the hassle of manual file management.

### 🏠 **Workspace Aware**
Oink intelligently handles different scenarios within PNPM/Yarn workspaces, allowing to create one-to-one (a package links to another package) linking, 
but also one-to-many (one package links to every single package in the workspace).

### 🔄 **Live Reload for Instant Updates**
Tired of manually rebuilding and re-linking? With Oink’s `--livereload` flag, your changes are automatically detected and applied in real time.

### 🎯 **Smart Versioning**
Oink is semver-aware, meaning it respects version constraints and ensures compatibility between linked packages. No more worrying about mismatched dependencies—Oink handles it for you. No cap.

### 🔔 **Built-in Notifications**
Whether a package is successfully linked or an issue arises, Oink keeps you in the loop so you can stay focused on coding.

### 🛠 **Fully Extensible**
Camphouse introduced a new way to build packages? No worries—Oink’s architecture allows for easy extensibility, so you can tailor it to fit your specific package’s needs.

### 🏗 **Full Camphouse Integration**
Designed with Camphouse’s ecosystem in mind, Oink seamlessly supports all Camphouse packages out of the box, ensuring a smooth workflow across projects.

### 🔍 **Type-Safe and Robust**
Oink is built with fully typed source code, providing enhanced reliability, improved developer experience, and better code intelligence with autocompletion.

----------

## Documentation 📜


![image](https://github.com/user-attachments/assets/c27f592a-eabe-4e2b-ab2c-9f76b2057717)
![image](https://github.com/user-attachments/assets/bdafa600-da9a-489b-b7b2-9f8cfd6bdc7c)


_It’s windy here... 🌬️_

## Contribution 🤝

Any Pull Request or Issue will be reviewed. When submitting a Pull Request, you agree to potential takeover and finishing from any approved author in the repo.
