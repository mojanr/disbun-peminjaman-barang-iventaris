import { CacheModule, Module } from '@nestjs/common';
import { PengemudiService } from './pengemudi.service';
import { PengemudiController } from './pengemudi.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pengemudi } from '../../common/database/entities/pengemudi.entity';

@Module({
  imports: [
    CacheModule.register({
      ttl: 6 * 60 * 60
    }),
    TypeOrmModule.forFeature([
      Pengemudi
    ])
  ],
  providers: [PengemudiService],
  controllers: [PengemudiController],
  exports: [PengemudiService],
})
export class PengemudiModule {}
