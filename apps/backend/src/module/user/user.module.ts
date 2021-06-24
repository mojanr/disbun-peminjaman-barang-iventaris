import { CacheModule, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../common/database/entities/user.entity';

@Module({
  imports: [
    CacheModule.register({
      ttl: 6 * 60 * 60
    }),
    TypeOrmModule.forFeature([
      User
    ])
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [User]
})
export class UserModule {}
