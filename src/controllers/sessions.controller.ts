import {
    Controller,
    BadRequestError,
    Post,
    JsonController,
    BodyParam,
    Get,
} from 'routing-controllers';
import {SessionsService} from '../services/sessions.service';
import {Prisma} from '@prisma/client';
import {Service} from 'typedi';

@JsonController()
@Service()
export class SessionsController {
    constructor(private sessionsService: SessionsService) {}

    @Get('/sessions')
    async query() {
        console.log('2');
        const list = await this.sessionsService.findList({
            skip: 0,
            take: 10,
        });
        return {
            list,
        };
    }

    @Post('/sessions')
    async create(@BodyParam('name') name: string): Promise<Prisma.SessionGetPayload<any>> {
        console.log(name);
        if (!name) {
            throw new BadRequestError('name is required');
        }
        return await this.sessionsService.create({name});
    }
}
