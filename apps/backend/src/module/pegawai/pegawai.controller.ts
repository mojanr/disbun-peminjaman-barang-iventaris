import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, CacheInterceptor } from '@nestjs/common';
import { PegawaiService } from './pegawai.service';
// import { CreatePegawaiDto } from './dto/create-pegawai.dto';
// import { UpdatePegawaiDto } from './dto/update-pegawai.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Crud, CrudController, CrudRequest, Override, ParsedRequest } from '@nestjsx/crud';
import { Pegawai } from '../../common/database/entities/pegawai.entity';
import { AuthJwtGuard } from '../../common/auth/auth.jwt.guard';
import { UserLogin } from '../../common/auth/decorator/user-login.decorator';
import { UserLoginInterface } from '../../common/auth/interface/user-login.interface';
import { Swagger } from '@nestjsx/crud/lib/crud';



@ApiTags('pegawai')
@Crud({
  model: {
    type: Pegawai
  },
  routes: {
    only: ['getManyBase', 'getOneBase'],
  },
  params: {
    // id: {
    //   primary: false,
    //   disabled: true
    // },
    peg_nip: {
      field: 'peg_nip',
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
  query: {
    filter: (search, getMany: boolean) => {

      // temp new filter
      let newFilter = { ...search }
      
      // check if property nama is in search variable,
      // return nama condition with contains (LIKE query)

      // filter contain peg nama
      if (newFilter['peg_nama']) {
        newFilter['peg_nama'] = {
          $cont: newFilter['peg_nama']
        }
      }

      // filter container peg nama lengkap
      if (newFilter['peg_nama_lengkap']) {
        newFilter['peg_nama_lengkap'] = {
          $cont: newFilter['peg_nama_lengkap']
        }
      }

      // return new filter
      return newFilter
    }
  }
})
@Controller('pegawai')
export class PegawaiController implements CrudController<Pegawai> {

  constructor(public readonly service: PegawaiService) {
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

  get base(): CrudController<Pegawai> {
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

  @ApiBearerAuth()
  @UseGuards(AuthJwtGuard)
  @Patch('sync')
  async syncAllPegawai(@UserLogin() user: UserLoginInterface) {
    await this.service.syncAll(user.token_siap)
    return {
      result: true
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthJwtGuard)
  @Patch('sync/:peg_nip')
  async syncPegawai(@UserLogin() user: UserLoginInterface, @Param('peg_nip') peg_nip: string) {
    console.log('ex')
    await this.service.sync(peg_nip, user.token_siap)
    return {
      result: true
    }
  }
  

  // @Post()
  // create(@Body() createPegawaiDto: CreatePegawaiDto) {
  //   return this.pegawaiService.create(createPegawaiDto);
  // }

  // @Get()
  // findAll() {
  //   return this.pegawaiService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.pegawaiService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePegawaiDto: UpdatePegawaiDto) {
  //   return this.pegawaiService.update(+id, updatePegawaiDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.pegawaiService.remove(+id);
  // }
}