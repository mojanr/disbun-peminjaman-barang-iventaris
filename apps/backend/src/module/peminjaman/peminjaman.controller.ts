import { CacheInterceptor, Controller, Get, Param, Patch, Post, Res, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest } from '@nestjsx/crud';
import { Swagger } from '@nestjsx/crud/lib/crud';
import { Readable, PassThrough } from 'stream';
// import { Readable } from 'node:stream';
import { Response } from 'express'
import { Peminjaman } from '../../common/database/entities/peminjaman.entity';
import { PeminjamanService } from './peminjaman.service';


@ApiTags('peminjaman')
@Crud({
  model: {
    type: Peminjaman
  },
  routes: {
    only: ['getManyBase', 'getOneBase', 'createOneBase'],
  },
  // params: {
  //   // id: {
  //   //   primary: false,
  //   //   disabled: true
  //   // },
  //   peg_nip: {
  //     field: 'peg_nip',
  //     type: 'string',
  //     primary: true,
  //     disabled: false,
  //   },
  //   // peg_nip: {
  //   //   field: 'peg_nip',
  //   //   type: 'string',
  //   //   // primary: false,
  //   //   disabled: false,
  //   // },

  // },
  // query: {
  //   filter: (search, getMany: boolean) => {

  //     // temp new filter
  //     let newFilter = { ...search }

  //     // check if property nama is in search variable,
  //     // return nama condition with contains (LIKE query)

  //     // filter contain peg nama
  //     if (newFilter['peg_nama']) {
  //       newFilter['peg_nama'] = {
  //         $cont: newFilter['peg_nama']
  //       }
  //     }

  //     // filter container peg nama lengkap
  //     if (newFilter['peg_nama_lengkap']) {
  //       newFilter['peg_nama_lengkap'] = {
  //         $cont: newFilter['peg_nama_lengkap']
  //       }
  //     }

  //     // return new filter
  //     return newFilter
  //   }
  // }
})
@Controller('peminjaman')
export class PeminjamanController implements CrudController<Peminjaman> {

  constructor(public readonly service: PeminjamanService) {
    // const getManyBase = Swagger.getParams(this.findAll);
    // const getOneBase = Swagger.getParams(this.findOne);

    // // remove metadata, fields, filter, or, sort, join, cache
    // const getManyBaseMetadata = getManyBase.filter(item => {
    //   return !['fields', 'filter', 'or', 'sort', 'join', 'cache'].includes(item.name)
    // })
    // // remove metadata, fields, join, cache
    // const getOneBaseMetadata = getOneBase.filter(item => {
    //   return !['fields', 'join', 'cache'].includes(item.name)
    // })

    // // set new swagger params
    // Swagger.setParams([...getManyBaseMetadata], this.findAll);
    // Swagger.setParams([...getOneBaseMetadata], this.findOne);
  }

  get base(): CrudController<Peminjaman> {
    return this;
  }

  // @UseInterceptors(CacheInterceptor)
  @Override('getManyBase')
  async findAll(@ParsedRequest() req: CrudRequest) {
    // console.log('cache')
    return this.base.getManyBase(req)
  }

  // @UseInterceptors(CacheInterceptor)
  @Override('getOneBase')
  findOne(@ParsedRequest() req: CrudRequest) {
    // console.log('cache')
    return this.base.getOneBase(req)
  }

  // pengembalian
  @Patch('/pengembalian/:id')
  pengembalian(@Param('id') id: number) {
    // console.log('cache')
    return this.service.pengembalian(id)
  }

  // upload bast
  @Post('/bast/upload/:id')
  uploadBast(@Param('id') id: number) {
    // console.log('cache')
    // return this.base.getOneBase(req)
  }

  // view uploaded bast
  @Get('/bast/view/:id')
  viewUploadedBast(@Param('id') id: number) {
    // console.log('cache')
    // return this.base.getOneBase(req)
  }

  // download template bast
  @Get('/bast/template/:id')
  async downloadTemplateBast(@Param('id') id: number, @Res() res: Response) {
    // console.log('cache')
    // return this.base.getOneBase(req)
    const result = await this.service.downloadTemplateBast(id)
    // console.log(result?.doc.from)
    // return
    // const stream = new ReadaPble()
    // stream.push(result.doc)
    // stream.push(null)

    // const stream = new PassThrough()
    // stream.end(result.doc)

    // res.set({
    //   'Content-Type': "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    //   'Content-disposition': 'attachment;filename=' + result.fileName,
    //   'Content-Length': result.doc.length
    // })

    // try {
    //   // stream.pipe(res)
    //   // // console.log('cache')
    //   res.setHeader('Content-Type', "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    //   res.setHeader('Content-disposition', 'attachment;filename=' + result.fileName)
    //   res.setHeader('Content-Length', result.doc.length)
    //   // {
    //   //   'Content-Type': "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    //   //   'Content-disposition': 'attachment;filename=' + result.fileName,
    //   //   'Content-Length': result.doc.length
    //   // }
    res.writeHead(200, {

      'Content-Type': "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      'Content-disposition': 'attachment;filename=' + result.fileName,
      'Content-Length': result.doc.length

    });
    // res.send(result.doc)
    res.end(result.doc)
    //   res.write(result.doc)
    //   res.end(result.doc)
    // } catch (error) {

    // }
  }

  // @UseInterceptors(CacheInterceptor)
  // @Override('createOneBase')
  // createOne(@ParsedRequest() req: CrudRequest, @ParsedBody() dto: any) {
  //   // console.log('cache')
  //   console.log('dto', dto)
  //   return this.base.createOneBase(req, dto)
  // }


}
