import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Pengemudi } from '../../common/database/entities/pengemudi.entity';

@Injectable()
export class PengemudiService extends TypeOrmCrudService<Pengemudi> {
  constructor(
    @InjectRepository(Pengemudi) private pengemudiRepo: Repository<Pengemudi>
  ) {
    super(pengemudiRepo)
  }
}
