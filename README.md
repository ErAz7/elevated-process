[![npm-shield]][npm] 

# elevated-process 
> A small wrapper on node's native `child_process`. It can start an elevated child process (run as aminstrator) using `spawn`, `exec`, `fork`, `spawnSync` or `execSync` from a non-elevated process; offering stdin, stdout and stderr on the elevated process


## Installation

```bat
npm i elevated-process
```
or
```bat
yarn add elevated-process
```

## Platforms

![windows] | ![macos] | ![linux] |
-- | -- | -- |
 &nbsp;&nbsp;&nbsp;✔ | &nbsp;&nbsp;&nbsp;&nbsp;❌ | &nbsp;❌ |

## Usage
This package uses the exact same API as node.js native `child_process`, supporting `spawn`, `exec`, `fork`, `spawnSync` and `execSync`


## [gsudo][gsudo] 
This package uses gsudo internally to elevate commands on windows


[npm-shield]: https://img.shields.io/badge/npm-v1.0.1-green
[npm]: https://www.npmjs.com/package/elevated-process
[gsudo]: https://github.com/gerardog/gsudo
[windows]: https://user-images.githubusercontent.com/46329768/141021000-3fe223be-f648-4aaf-8a2a-3a5d84f95d50.png
[macos]: https://user-images.githubusercontent.com/46329768/141021007-c2075401-e0e0-4451-8668-77da557bbe9b.png
[linux]: https://user-images.githubusercontent.com/46329768/141021003-d7714fa9-da81-409f-9ff7-e58735172c4d.png
