import createServer from '@configs/createServer';
import CONSTANTS from '@configs/constants/index';

const main = async () => {
    try {
        const app = await createServer();
        app.listen(CONSTANTS.PORT, () => {
            console.log(
                `server listening on http://localhost:${CONSTANTS.PORT}, in ${CONSTANTS.ENV_LABEL} mode.`
            );
        });
    } catch (error) {
        console.log(`${error}`);
    }
};

main();
