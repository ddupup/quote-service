import { Service } from 'typedi'
import prisma from 'app/helpers/client'
import { Prisma } from '@prisma/client'

@Service()
export class ArticleService {
  /**
   * Type 'Prisma.SessionCreateInput' is automatically generated.
   * Whenever you modify file 'prisma/schema.prisma' and then run command:
   *   prisma generate
   *   prisma migrate dev
   * The types is automatically updated.
   *
   * About CRUD: https://www.prisma.io/docs/concepts/components/prisma-client/crud
   */

  /**
   * @description: 创建文件
   * @param {*} content: 文章内容
   * @return {*}
   */
  async create(session: Prisma.ArticleCreateInput) {
    return prisma.article.create({
      data: session,
    })
  }

  /**
   * @description: 根据 id 查询
   * @param {*} id
   * @return {*}
   */  
  async findUnique(id) {
    return prisma.article.findUnique({
      where: {
        id: id,

      },
    })
  }

  /**
   * @description: 分页查询列表
   * @param {*} take 查询条数
   * @param {*} skip  从第几条开始查询
   * @return {*}
   */
  async findList({ skip, take }) {
    return prisma.article.findMany({
      orderBy:  {
        createdAt: 'desc',
      },
      skip: skip,
      take: take,
    })
  }


  /**
   * @description: 返回查询总数
   * @return {*}
   */  
  async findCount(searchWhere: Prisma.ArticleWhereInput) {
    return prisma.article.count({
      where: searchWhere,
    })
  }
}
