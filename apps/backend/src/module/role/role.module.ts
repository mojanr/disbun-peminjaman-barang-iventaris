import { CacheModule, Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from '../../common/database/entities/role.entity';

@Module({
  imports: [
    CacheModule.register({
      ttl: 6 * 60 * 60
    }),
    TypeOrmModule.forFeature([
      Role
    ])
  ],
  providers: [RoleService],
  controllers: [RoleController],
  exports: [RoleService],
})
export class RoleModule {}
