import { CacheModule, Module } from '@nestjs/common';
import { PegawaiService } from './pegawai.service';
import { PegawaiController } from './pegawai.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pegawai } from '../../common/database/entities/pegawai.entity';

@Module({
  imports: [
    CacheModule.register({
      ttl: 6 * 60 * 60
    }),
    TypeOrmModule.forFeature([
      Pegawai
    ])
  ],
  providers: [PegawaiService],
  controllers: [PegawaiController],
  exports: [PegawaiService]
})
export class PegawaiModule {}
