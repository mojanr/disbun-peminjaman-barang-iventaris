import { CacheModule, Module } from '@nestjs/common';
import { PeminjamanService } from './peminjaman.service';
import { PeminjamanController } from './peminjaman.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Peminjaman } from '../../common/database/entities/peminjaman.entity';

@Module({
  imports: [
    CacheModule.register({
      ttl: 6 * 60 * 60
    }),
    TypeOrmModule.forFeature([
      Peminjaman
    ])
  ],
  providers: [PeminjamanService],
  controllers: [PeminjamanController],
  exports: [PeminjamanService]
})
export class PeminjamanModule {}
