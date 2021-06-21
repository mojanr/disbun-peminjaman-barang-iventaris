import { CacheInterceptor, Controller, Get, Param, Patch, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController, CrudRequest, Override, ParsedRequest } from '@nestjsx/crud';
import { Swagger } from '@nestjsx/crud/lib/crud';
import { Peminjaman } from '../../common/database/entities/peminjaman.entity';
import { PeminjamanService } from './peminjaman.service';


@ApiTags('peminjaman')
@Crud({
  model: {
    type: Peminjaman
  },
  routes: {
    only: ['getManyBase', 'getOneBase'],
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
    const getManyBase = Swagger.getParams(this.findAll);
    const getOneBase = Swagger.getParams(this.findOne);

    // remove metadata, fields, filter, or, sort, join, cache
    const getManyBaseMetadata = getManyBase.filter(item => {
      return !['fields', 'filter', 'or', 'sort', 'join', 'cache'].includes(item.name)
    })
    // remove metadata, fields, join, cache
    const getOneBaseMetadata = getOneBase.filter(item => {
      return !['fields', 'join', 'cache'].includes(item.name)
    })

    // set new swagger params
    Swagger.setParams([...getManyBaseMetadata], this.findAll);
    Swagger.setParams([...getOneBaseMetadata], this.findOne);
  }

  get base(): CrudController<Peminjaman> {
    return this;
  }

  @UseInterceptors(CacheInterceptor)
  @Override('getManyBase')
  async findAll(@ParsedRequest() req: CrudRequest) {
    // console.log('cache')
    return this.base.getManyBase(req)
  }

  @UseInterceptors(CacheInterceptor)
  @Override('getOneBase')
  findOne(@ParsedRequest() req: CrudRequest) {
    // console.log('cache')
    return this.base.getOneBase(req)
  }


}
