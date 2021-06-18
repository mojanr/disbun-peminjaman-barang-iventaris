import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from '../common/database/database.module';
// import { JabatanModule } from './module/jabatan/jabatan.module';
import { AuthModule } from '../common/auth/auth.module';
// import { SkumModule } from './module/skum/skum.module';
import { SiapJabarModule } from '../common/siap-jabar/siap-jabar.module';
// import { UnitKerjaModule } from './module/unit-kerja/unit-kerja.module';
// import { GolonganModule } from './module/golongan/golongan.module';
// // import { TerminusModule } from '@nestjs/terminus';
// // import { PingModule } from './common/ping/ping.module';
// // import { ScheduleModule } from '@nestjs/schedule';
import { PegawaiModule } from '../module/pegawai/pegawai.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CacheModule.register({
      ttl: 6 * 60 * 60
    }),
    // ScheduleModule.forRoot(),
    // TerminusModule,
    DatabaseModule, 
    AuthModule,
    // JabatanModule, 
    // SkumModule, 
    SiapJabarModule, 
    // UnitKerjaModule, 
    // GolonganModule, 
    PegawaiModule, 
    // PingModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor
    }
  ],
  exports: [
    AppService
  ]
})
export class AppModule {}
