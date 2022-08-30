import { ENVS } from './envs';
import { EevRecord } from './development'


const production: Partial<EevRecord> = {
    ENV_LABEL: ENVS.PRODUCTION,
    PORT: 3001,
};

export default production;
