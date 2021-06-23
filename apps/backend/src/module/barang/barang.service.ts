import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Barang } from '../../common/database/entities/barang.entity';

@Injectable()
export class BarangService extends TypeOrmCrudService<Barang> {

  constructor(
    @InjectRepository(Barang) private barangRepo: Repository<Barang>,
    // private siapJabarPegawaiService: SiapJabarPegawaiService
  ) {
    super(barangRepo)
  }
  
}
