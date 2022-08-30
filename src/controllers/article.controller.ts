import {
  BadRequestError,
  Post,
  JsonController,
  BodyParam,
  Get,
  QueryParam,
} from 'routing-controllers'
import { ArticleService } from '../services'
import { Prisma } from '@prisma/client'
import { Service } from 'typedi'

@JsonController()
@Service()
export class ArticleController {
  private articleService: ArticleService;
  
  constructor() {
    this.articleService = new ArticleService()
  }

  @Get('/article')
  async query(
    @QueryParam('page') page: number = 1,
    @QueryParam('pageSize') pageSize: number = 10,
  ) {
    console.log(1)
    console.log(pageSize)
    console.log(this.articleService)
    // const count = await this.articleService.findCount({})

    const list = await this.articleService.findList({
      skip: (page - 1) * pageSize,
      take: pageSize,
    })
    return {
      total: 10,
      list,
      page,
      pageSize,
    }
  }

  @Post('/article')
  async create(
    @BodyParam('content') content: string,
  ): Promise<Prisma.ArticleGetPayload<any>> {
    if (!content) {
      throw new BadRequestError('content is required')
    }

    return await this.articleService.create({ content })
  }
}
