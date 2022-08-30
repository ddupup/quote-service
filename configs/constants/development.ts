import { ENVS } from './envs';

const development = {
    ENV_LABEL: ENVS.DEVELOPMENT,

    PORT: 3001,
};

export default development;


export type EevRecord = typeof development
