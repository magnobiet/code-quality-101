---
marp: true
theme: uncover
_class: invert
---

# Code Quality 101

![bg](https://magnobiet.com/code-quality-101/images/photo-1599578705716-8d3d9246f53b.jpeg)

---

# Magno F. B. Biét

###### Tecnólogo em Sistemas para Internet

<!-- footer: '[magnobiet.com](https://magnobiet.com/) | [sparkle](https://www.sparkleapp.com.br/u/magnobiet)' -->

---

<!-- footer: 'Robert C. Martin, Clean Code: A Handbook of Agile Software Craftsmanship' -->

> Clean code always looks like it was written by someone who cares.
<!-- O código limpo sempre parece ter sido escrito por alguém que se importa. -->

---

<!-- footer: '' -->

# Why?

`Standardization`, `Simplicity`, `Agility`, `Maintainability`...

<!-- Padronização, Simplicidade, Mais agilidade, Manutenção simplificada... -->
<!-- Como melhorar a qualidade do código -->

---

# Coding Style Guide

---

[JavaScript](https://github.com/airbnb/javascript)
[Angular](https://angular.io/guide/styleguide)
[Vue](https://vuejs.org/v2/style-guide/)
[React](https://github.com/airbnb/javascript/tree/master/react)
[Node](https://google.github.io/styleguide/jsguide.html)
[PHP (PSR-2)](https://www.php-fig.org/psr/psr-2/)
[Python (PEP-8)](https://www.python.org/dev/peps/pep-0008/)
[Java](https://www.oracle.com/technetwork/java/codeconventions-150003.pdf)
[C#](https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions)

---

![bg left:50%](https://magnobiet.com/code-quality-101/images/photo-1564865878688-9a244444042a.jpeg)

# TL;DR

<!-- paginate: true -->

---

<!-- backgroundColor: #edeff0 -->

![height:450](https://magnobiet.com/code-quality-101/images/html-css-js.png)

---

# 🧑‍💻

---

<!-- backgroundColor: #fff -->
# EditorConfig

> EditorConfig is a file format and collection of text editor plugins for maintaining consistent coding styles between different editors and IDEs.

[editorconfig.org](https://editorconfig.org/)
[![Visual Studio Code Extension](https://img.shields.io/badge/Extension-Visual%20Studio%20Code-0078d7.svg)](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

---

### [`.editorconfig`](https://github.com/magnobiet/code-quality-101/blob/main/.editorconfig)

---


## EditorConfig Checker

```bash
npm install --save-dev editorconfig-checker
npx ec -init
```

---

### `package.json`

```json
  "scripts": [
    ...
    "lint:editorconfig": "editorconfig-checker"
  ]
```

---

![bg](https://magnobiet.com/code-quality-101/images/photo-1454165205744-3b78555e5572.jpeg)
<!-- color: #fff -->

# HTML

###### HyperText Markup Language

---
<!-- color: inherit -->

# HTMLHint

> The static code analysis tool you need for your HTML

[htmlhint.com](https://htmlhint.com/)

[![Visual Studio Code Extension](https://img.shields.io/badge/Extension-Visual%20Studio%20Code-0078d7.svg)](https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint)

---

```bash
npm install htmlhint --save-dev
```

---

### [`.htmlhintrc`](https://github.com/magnobiet/code-quality-101/blob/main/.htmlhintrc)


---

### `package.json`

```json
  "scripts": [
	...
    "lint:html": "htmlhint"
  ]
```

---

# CSS

![bg](https://magnobiet.com/code-quality-101/images/photo-1517134191118-9d595e4c8c2b.jpeg)
<!-- color: #fff -->

###### Cascading Style Sheets

---
<!-- color: inherit -->
[Principles of writing consistent, idiomatic CSS](https://github.com/necolas/idiomatic-css)

---


### StyleLint

> A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.

[stylelint.io](https://stylelint.io/)

[![Visual Studio Code Extension](https://img.shields.io/badge/Extension-Visual%20Studio%20Code-0078d7.svg)](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

---

```bash
npm install --save-dev \
  stylelint \
  stylelint-scss \
  stylelint-config-standard \
  stylelint-config-idiomatic-order
```

---

### [`stylelint.config.js`](https://github.com/magnobiet/code-quality-101/blob/main/stylelint.config.js)

---

### `package.json`

```json
  "scripts": [
    ...
    "lint:style": "stylelint './src/**/*.{css,sass,scss}'",
    "lint:style:fix": "npm run lint:style -- --fix"
  ]
```
---

# JS

![bg](https://magnobiet.com/code-quality-101/images/photo-1550063873-ab792950096b.jpeg)
<!-- color: #fff -->

###### JavaScript

---
<!-- color: inherit -->
# ESLint

> A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. Maintain your code quality with ease.

[eslint.org](https://eslint.org/)

[![Visual Studio Code Extension](https://img.shields.io/badge/Extension-Visual%20Studio%20Code-0078d7.svg)](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

---

```bash
npm install eslint --save-dev
npx eslint --init

# if you are using TypeScript
npm install typescript eslint --save-dev
npx tsc --init
npx eslint --init
```

---

### `package.json`

```json
  "scripts": [
    ...
    "lint:script": "eslint",
    "lint:script:fix": "npm run lint -- --fix=true"
  ]
```

---

### [`.eslintrc.js`](https://github.com/magnobiet/code-quality-101/blob/main/.eslintrc.js)

---

# Git

![bg](https://magnobiet.com/code-quality-101/images/photo-1556075798-4825dfaaf498.jpeg)
<!-- color: #fff -->

---

<!-- color: inherit -->

### [`~/.gitconfig`](https://www.git-scm.com/book/en/v2/Customizing-Git-Git-Configuration)

---

```bash
git config --global init.defaultBranch main

git config --global user.name "Magno Fernando Brixner Biét"
git config --global user.email "magno.biet@gmail.com"

git config --global core.editor vim
git config --global core.excludesfile ~/.gitignore_global
git config --global core.autocrlf input
```

---

### [`.gitignore`](https://www.toptal.com/developers/gitignore?templates=windows,linux,macos)

---

# Conventional Commits

[conventionalcommits.org](https://www.conventionalcommits.org/)

---

```ini
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

---

### [`~/.gitmessage`](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration#_commit_template)

---

```text
<type>[optional scope]: <description>

[optional body]

Refs #
```

```bash
git config --global commit.template ~/.gitmessage
```

---

# Branchs

---

![bg right contain](https://magnobiet.com/code-quality-101/images/git-model.png)

# [gitflow-avh](https://github.com/petervanderdoes/gitflow-avh)

---

### [`.git/hooks`](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)

---

```bash
.git/hooks
├── applypatch-msg
├── commit-msg
├── fsmonitor-watchman
├── post-update
├── pre-applypatch
├── pre-commit
├── pre-merge-commit
├── pre-push
├── pre-rebase
├── pre-receive
├── prepare-commit-msg
├── push-to-checkout
└── update
```

---

# Husky

> Modern native Git hooks made easy

[typicode/husky](https://github.com/typicode/husky)

<!-- https://github.com/evilmartians/lefthook -->
<!-- https://github.com/sds/overcommit -->
<!-- https://randulakoralage82.medium.com/format-your-net-code-with-git-hooks-a0dc33f68048 -->
---

```bash
npx husky-init && npm install
rm -rf .husky/pre-commit
```

---

# Commit Lint

> Lint commit messages

[conventional-changelog/commitlint](https://github.com/conventional-changelog/commitlint)

---

```bash
npm install --save-dev \
  @commitlint/config-conventional \
  @commitlint/cli
```

---

### [`commitlint.config.js`](https://github.com/magnobiet/code-quality-101/blob/main/commitlint.config.js)

---

### `package.json`

```json
  "scripts": [
    ...
    "lint:commit": "commitlint"
  ]
```

---

# Lint Staged

> Run linters against staged git files and don't let 💩 slip into your code base!

[okonet/lint-staged](https://github.com/okonet/lint-staged)

---

```bash
npm install --save-dev lint-staged
```

---

### [`lint-staged.config.js`](https://github.com/magnobiet/code-quality-101/blob/main/lint-staged.config.js)

---

### `package.json`

```json
  "scripts": [
    ...
    "lint:staged": "lint-staged"
  ]
```

---

```bash
npx husky add .husky/commit-msg 'npm run lint:commit -- --edit "$1"'
npx husky add .husky/pre-commit 'npm run lint:staged'

npx husky add .husky/pre-push 'npm run lint:editorconfig'
npx husky add .husky/pre-push 'npm run lint:script'
npx husky add .husky/pre-push 'npm run lint:style'
```

---

<!-- color: #fff -->

# Other tools

![bg cover](https://magnobiet.com/code-quality-101/images/photo-1530124566582-a618bc2615dc.jpeg)

---

<!-- color: inherit -->

[SonarQube](https://www.sonarqube.org/)
[Snyk](https://snyk.io/)
[Code Quality Extension Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=magnobiet.code-quality-extension-pack)

---

![bg](https://magnobiet.com/code-quality-101/images/photo-1529448005898-b19fc13465b7.jpeg)

---

[Clean Code](https://github.com/ryanmcdermott/clean-code-javascript)
[Object Calisthenics](https://medium.com/@davidsen/clean-code-object-calisthenics-f6f4dec07c8b)
[SOLID](https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa)

---

<!-- paginate: false -->

![bg auto](https://magnobiet.com/code-quality-101/images/thats-all-folks-7172-1920x1200.jpeg)

---

# 👋

<!-- footer: 'Photos from [Unsplash](https://unsplash.com/)'-->
