import {
    Controller,
    BadRequestError,
    Post,
    JsonController,
    BodyParam,
    Get,
    QueryParam,
} from 'routing-controllers';
import {ArticleService} from '../services/article.service';
import {Prisma} from '@prisma/client';
import {Service} from 'typedi';

@JsonController()
@Service()
export class ArticleController {
    constructor(private articleService: ArticleService) {}

    @Get('/article')
    async query(
        @QueryParam('page') page: number = 1,
        @QueryParam('pageSize') pageSize: number = 10
    ) {
        const count = await this.articleService.findCount({});

        const list = await this.articleService.findList({
            skip: (page - 1) * pageSize,
            take: pageSize,
        });
        return {
            total: count,
            list,
            page,
            pageSize,
        };
    }

    @Post('/article')
    async create(@BodyParam('content') content: string): Promise<Prisma.ArticleGetPayload<any>> {
        if (!content) {
            throw new BadRequestError('content is required');
        }
        try {
            const resultData = await this.articleService.create({content});
            return resultData;
        } catch (error) {
            throw new BadRequestError(error);
        }
    }
}
