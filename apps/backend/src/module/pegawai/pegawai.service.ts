import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { classToPlain, plainToClass } from 'class-transformer';
import * as dayjs from 'dayjs';
import { Pegawai } from '../../common/database/entities/pegawai.entity';
import { SiapJabarPegawaiService } from '../../common/siap-jabar/siap-jabar-pegawai.service';
import { Equal, IsNull, Not, Repository } from 'typeorm';
// import { CreatePegawaiDto } from './dto/create-pegawai.dto';
// import { UpdatePegawaiDto } from './dto/update-pegawai.dto';

@Injectable()
export class PegawaiService extends TypeOrmCrudService<Pegawai> {

  constructor(
    @InjectRepository(Pegawai) private pegawaiRepo: Repository<Pegawai>,
    private siapJabarPegawaiService: SiapJabarPegawaiService
  ) {
    super(pegawaiRepo)
  }

  getRepo() {
    return this.pegawaiRepo
  }

  async sync(nip: string, tokenSiap: string) {
    // get pegawai from siap jabar
    const resultDetailPegawai = await this.siapJabarPegawaiService.getDetailPegawai(nip, tokenSiap)

    // // get pegawai from local
    // const isPegawaiExist = await this.pegawaiRepo.findOne({
    //   select: ['peg_id'],
    //   where: {
    //     peg_id: nip,
    //   }
    // })

    // filter availabler value
    const pegawaiClass = plainToClass(Pegawai, resultDetailPegawai, { excludeExtraneousValues: true })
    const pegawaiPlain = classToPlain(pegawaiClass)

    // get current date
    const currentDate = dayjs().format('YYYY-MM-DD')

    // create
    const result = await this.pegawaiRepo.save({
      ...pegawaiPlain,
      last_update_local: currentDate
    })

    Logger.verbose(`Synched ${resultDetailPegawai.peg_nip} - ${resultDetailPegawai.peg_nama}`, 'PegawaiService - SyncPegawai')

    return result

    // // check if pegawa exist
    // if (isPegawaiExist) {
    //   // update
    //   const result = await this.pegawaiRepo.update(nip, {
    //     ...pegawaiPlain,
    //     last_update_local: currentDate
    //   })

    //   Logger.verbose(`Update ${resultDetailPegawai.peg_nip} - ${resultDetailPegawai.peg_nama}`, 'PegawaiService - SyncPegawai')

    //   return result
    // } else {
    //   // create
    //   const result = await this.pegawaiRepo.save({
    //     ...pegawaiPlain,
    //     last_update_local: currentDate
    //   })

    //   Logger.verbose(`Create ${resultDetailPegawai.peg_nip} - ${resultDetailPegawai.peg_nama}`, 'PegawaiService - SyncPegawai')

    //   return result
    // }
  }

  async syncAll(tokenSiap: string) {

    // get current date
    const currentDate = dayjs().format('YYYY-MM-DD')

    // nip list
    const nip = await this.pegawaiRepo.find({
      select: ['peg_id'],
      // where: [
      //   // { last_update_local: Not(Equal(currentDate)) },
      //   { last_update_local: Not(IsNull()) },
      // ]
      where: [
        { last_update_local: IsNull() },
        { last_update_local: Not(Equal(currentDate)) },
      ]
    })

    // console.log(nip)

    if (nip.length > 0) {
      nip.map(async (value) => {
        await this.sync(value.peg_id, tokenSiap)
      })
    } else {
      Logger.verbose('All synched', 'PegawaiService - SyncAll')
    }

  }

  // create(createPegawaiDto: CreatePegawaiDto) {
  //   return 'This action adds a new pegawai';
  // }

  // findAll() {
  //   return `This action returns all pegawai`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} pegawai`;
  // }

  // update(id: number, updatePegawaiDto: UpdatePegawaiDto) {
  //   return `This action updates a #${id} pegawai`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} pegawai`;
  // }
}