import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Pengemudi } from '../../common/database/entities/pengemudi.entity';
import { PengemudiService } from './pengemudi.service';

@ApiTags('pengemudi')
@Crud({
  model: {
    type: Pengemudi
  },
  // routes: {
  //   only: ['getManyBase', 'getOneBase'],
  // },
  params: {
    // id: {
    //   primary: false,
    //   disabled: true
    // },
    ktp: {
      field: 'ktp',
      type: 'string',
      primary: true,
      disabled: false,
    },
    // peg_nip: {
    //   field: 'peg_nip',
    //   type: 'string',
    //   // primary: false,
    //   disabled: false,
    // },
    
  },
  // query: {
  //   filter: (search, getMany: boolean) => {

  //     // // temp new filter
  //     // let newFilter = { ...search }
      
  //     // // check if property nama is in search variable,
  //     // // return nama condition with contains (LIKE query)

  //     // // filter contain peg nama
  //     // if (newFilter['peg_nama']) {
  //     //   newFilter['peg_nama'] = {
  //     //     $cont: newFilter['peg_nama']
  //     //   }
  //     // }

  //     // // filter container peg nama lengkap
  //     // if (newFilter['peg_nama_lengkap']) {
  //     //   newFilter['peg_nama_lengkap'] = {
  //     //     $cont: newFilter['peg_nama_lengkap']
  //     //   }
  //     // }

  //     // // return new filter
  //     // return newFilter

  //     console.log('search', search)
  //     return search
  //   }
  // }
})
@Controller('pengemudi')
export class PengemudiController implements CrudController<Pengemudi> {

  constructor(public readonly service: PengemudiService) {
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

  get base(): CrudController<Pengemudi> {
    return this;
  }

}
