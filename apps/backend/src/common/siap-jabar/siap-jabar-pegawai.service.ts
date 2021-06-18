import { HttpService, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { PegawailDetailResponseInterface } from './interface/pegawai-detail-response.interface';

@Injectable()
export class SiapJabarPegawaiService {

  constructor(private httpService: HttpService) { }

  async getDetailPegawai(nip: string, tokenSiap: string) {
    try {
      // get pegawai detail
      const result = await this.httpService
        .get(`https://siap.jabarprov.go.id/p/backend/api/pegawai/detail/${nip}`, {
          headers: {
            'Authorization': `Bearer ${tokenSiap}`,
          }
        }).pipe(map(response => response.data))
        .toPromise<{ succes: boolean, message: string, data: PegawailDetailResponseInterface}>()
      // console.log(result.data)
      return result.data
    } catch (error) {
      Logger.error(`Error detail pegawai siap jabar ${nip}`, 'SiapJabarPegawaiService - DetailPegawai')
      throw new UnauthorizedException('Token siap tidak valid')
    }
  }
}