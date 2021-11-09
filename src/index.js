import {
    exec as cpExec,
    spawn as cpSpawn,
    fork as cpFork,
    spawnSync as cpSpawnSync,
    execSync as cpExecSync
} from 'child_process';
import { root } from './utils';

const gsudo = root('bin', 'gsudo.exe');

export const exec = (command, ...rest) => cpExec(
    `${gsudo} ${command}`,
    ...rest
);

export const spawn = (command, args = [], ...rest) => cpSpawn(
    gsudo,
    [command, ...args],
    ...rest
);

export const fork = (modulePath, args = [], options = {}, ...rest) => cpFork(
    modulePath,
    args,
    { ...options, execPath: root('bin', 'sudoNode.bat') },
    ...rest
);

export const spawnSync = (command, args = [], ...rest) => cpSpawnSync(
    gsudo,
    [command, ...args],
    ...rest
);

export const execSync = (command, ...rest) => cpExecSync(
    `${gsudo} ${command}`,
    ...rest
);
