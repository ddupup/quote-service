import {join} from 'path';
const dotenv = require('dotenv');

// "before" will trigger before the app lift.
export const bootstrapBefore = (): object => {
    // solve ncc path link.
    const result = dotenv.config({path: join(__dirname, '../.env')});

    if (result.error) {
        console.log('Environment variable not loaded: not found ".env" file.');
        return {};
    }
    console.log('.env loaded.');
    return result.parsed;
};

// "after" will trigger after the "container" mounted..
export const bootstrapAfter = (): any => {};
