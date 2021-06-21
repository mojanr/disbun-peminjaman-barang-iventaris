import { Global, Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pegawai } from './entities/pegawai.entity'
import { User } from './entities/user.entity';
import { join } from 'path';
import { Peminjaman } from './entities/peminjaman.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '103.56.148.43',
      port: 3306,
      username: 'root',
      password: '@Alahawaw123!',
      database: 'disbun-peminjaman-dev',
      // host: 'disbun.jabarprov.go.id',
      // port: 27017,
      // username: 'pegawai',
      // password: 'Ijinm4suk318',
      // database: 'db_pegawai',

      // type: 'mongodb',
      // url: 'mongodb+srv://alahawaw:alahawaw@disbun-app.aofcg.mongodb.net/disbun-peminjaman?retryWrites=true&w=majority',

      // entities: ['dist/**/*.entity{.ts,.js}'],
      // entities: [join(__dirname, '**/*.entity{.ts,.js}')],
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      entities: [
        User,
        Pegawai,
        Peminjaman
      ],
      synchronize: true,
    })
  ],
  providers: [DatabaseService]
})
export class DatabaseModule {}
