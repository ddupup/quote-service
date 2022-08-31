import {Service} from 'typedi';
import prisma from '@src/helpers/client';
import {Prisma} from '@prisma/client';

@Service()
export class SessionsService {
    /**
     * Type 'Prisma.SessionCreateInput' is automatically generated.
     * Whenever you modify file 'prisma/schema.prisma' and then run command:
     *   prisma generate
     *   prisma migrate dev
     * The types is automatically updated.
     *
     * About CRUD: https://www.prisma.io/docs/concepts/components/prisma-client/crud
     */
    async create(session: Prisma.SessionCreateInput) {
        return prisma.session.create({
            data: session,
        });
    }


    /**
     * @description: 分页查询列表
     * @param {*} take 查询条数
     * @param {*} skip  从第几条开始查询
     * @return {*}
     */
     async findList({skip, take}) {
        return prisma.session.findMany({
            orderBy: {
                createdAt: 'desc',
            },
            skip: skip,
            take: take,
        });
    }
}
