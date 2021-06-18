import { Controller, Get, Param, Patch } from '@nestjs/common';
import { PeminjamanService } from './peminjaman.service';

@Controller('peminjaman')
export class PeminjamanController {

  constructor(private peminjamanService: PeminjamanService) { }

  @Get()
  findAll() {
    return this.peminjamanService.findAll()
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.peminjamanService.findOne(id)
  }


}
