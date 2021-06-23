import { CacheModule, Module } from '@nestjs/common';
import { BarangService } from './barang.service';
import { BarangController } from './barang.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Barang } from '../../common/database/entities/barang.entity';

@Module({
  imports: [
    CacheModule.register({
      ttl: 6 * 60 * 60
    }),
    TypeOrmModule.forFeature([
      Barang
    ])
  ],
  providers: [BarangService],
  controllers: [BarangController],
  exports: [BarangService]
})
export class BarangModule {}
