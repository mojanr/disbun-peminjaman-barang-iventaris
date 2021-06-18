import { Global, HttpModule, Module } from '@nestjs/common';
import { SiapJabarAuthService } from './siap-jabar-auth.service';
import { SiapJabarPegawaiService } from './siap-jabar-pegawai.service';
// import { SiapJabarPensiunService } from './siap-jabar-pensiun.service';

@Global()
@Module({
  imports: [
    HttpModule.register({
      timeout: 100000,
      maxRedirects: 100,
    }),
  ],
  providers: [SiapJabarAuthService, SiapJabarPegawaiService],
  exports: [SiapJabarAuthService, SiapJabarPegawaiService],
})
export class SiapJabarModule {}