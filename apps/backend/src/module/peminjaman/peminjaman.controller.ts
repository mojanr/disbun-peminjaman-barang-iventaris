import { CacheInterceptor, Controller, Get, Header, HttpCode, HttpStatus, Param, Patch, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import * as multer from 'multer'
import * as mime from 'mime-types'
import { AnyFilesInterceptor, FileInterceptor, MulterModule } from '@nestjs/platform-express';
import { Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest } from '@nestjsx/crud';
import { Swagger } from '@nestjsx/crud/lib/crud';
import { Readable, PassThrough } from 'stream';
// import { Readable } from 'node:stream';
import { Response } from 'express'
import { Peminjaman } from '../../common/database/entities/peminjaman.entity';
import { PeminjamanService } from './peminjaman.service';
import * as fs from 'fs'
import * as path from 'path'

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
  @Patch('/bast/upload/:id')
  @UseInterceptors(FileInterceptor('file', {
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, './assets/berita-acara'))
      },
      filename: function (req, file, cb) {
        console.log(file)
        cb(null, file.fieldname + '-' + req.params.id + '.' + mime.extension(file.mimetype))
        // cb(null, file.originalname)
      }
    }),
    dest: path.resolve(__dirname, './assets/berita-acara')
  }))
  uploadBast(@Param('id') id: number, @UploadedFile() file) {
    // console.log('cache')
    // return this.base.getOneBase(req)
    return this.service.uploadBast(id, file.filename)
  }


  // async createSubmissoinTypeRequirement(
  //   @Param('submissionTypeId') submissionTypeId: number,
  //   @Body() newSubmissionTypeRequirement: CreateSubmissionTypeRequirementDto,
  //   @UploadedFile() file
  // ) {
  //   console.log(submissionTypeId, newSubmissionTypeRequirement, file)
  //   // return submissionTypeId
  //   // destruct
  //   const {
  //     name,
  //     description,
  //     isRequired
  //   } = newSubmissionTypeRequirement

  //   return this.submissionService.createSubmissionTypeRequirementBySubmissionTypeId(submissionTypeId, {
  //     name: name,
  //     description: description,
  //     isRequired: isRequired,
  //     template: file?.filename
  //   })
  // }

  // view uploaded bast
  @Get('/bast/view/:docName')
  // @HttpCode(HttpStatus.OK)
  // @Header('Content-Type', 'application/pdf')
  // @Header('Content-Disposition', 'attachment; filename=test.pdf')
  async viewUploadedBast(@Param('docName') docName: string, @Res() res) {
    const filePath = path.join(__dirname, `/assets/berita-acara`, '/', docName)

    // res.download(filePath, docName);  

    // var mimetype = mime.lookup(filePath);

    // res.setHeader('Content-disposition', 'attachment; filename=' + docName);
    // res.setHeader('Content-type', mimetype);

    // var filestream = fs.createReadStream(filePath);
    // var stat = fs.statSync(filePath)

    // res.setHeader('Content-Length', stat.size);
    // res.setHeader('Content-Type', 'application/pdf');
    // res.setHeader('Content-Disposition', 'attachment; filename=' + docName);
    // filestream.pipe(res);

    // const pdf = await new Promise<Buffer>((resolve, reject) => {
    //   fs.readFile(filePath, {}, (err, data) => {
    //     if (err) {
    //       console.log('error', err)
    //       reject(err)
    //     }
    //     else {
    //       console.log('data', data)
    //       resolve(data)
    //     }
    //   })
    // })

    // // console.log(pdf)

    // res.writeHead(200, {

    //   'Content-Type': "application/pdf",
    //   'Content-disposition': 'attachment;filename=' + docName,
    //   // 'Content-disposition': 'attachment',
    //   'Content-Length': pdf.length

    // });
    // // res.send(result.doc)
    // res.end(pdf)
    //   res.write(result.doc)
    //   res.end(result.doc)
    // } catch (error) {

    // }


    // return res.sendFile(docName, { root: './dist/apps/backend/assets/berita-acara' });
    // console.log('cache')
    // return this.base.getOneBase(req)
    // console.log(docName)
    // console.log(path.join(__dirname, `/assets/berita-acara`))
    return res.sendFile(docName, {
      root: path.join(__dirname, `/assets/berita-acara`),
      // root: `./dist/apps/backend/assets/berita-acara`,
      headers: {
        'Content-type': 'application/pdf',
        'Content-disposition': 'inline; filename="' + docName + '"'
      }
    }, (err) => console.log('error', err));

    // ret

    // res.download(filePath, docName, (error) => console.log(error))
    // console.log(path.join(__dirname, '/assets/berita-acara'))
    // console.log(data)

    // return data

    // res.sendFile(path.join(__dirname, `/assets/berita-acara/${docName}`), null, () => {
    //   res.end()
    // })

    // // return res.download(path.join(__dirname, `/assets/berita-acara`, '/', docName), docName, (err) => console.log(err))
    // const filePath = path.join(__dirname, `/assets/berita-acara`, '/', docName)
    // // console.log(filePath)
    // // res.status(200).sendFile(filePath)
    // // res.status(200).sendFile(`./assets/berita-acara/${docName}`)
    // // const file = fs.createReadStream(filePath);
    // // file.pipe(res)

    // return fs.createReadStream(filePath);
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
