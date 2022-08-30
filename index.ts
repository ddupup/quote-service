const Koa = require('koa');
const app = new Koa();

const CONSTANTS = require('@configs/constants/index');

app.use(async (ctx) => {
    ctx.body = 'Hello World';
});

app.listen(CONSTANTS.PORT, () => {
    console.log(`server listening on http://localhost:${CONSTANTS.PORT}, in ${CONSTANTS.ENV_LABEL} mode.`);
});
