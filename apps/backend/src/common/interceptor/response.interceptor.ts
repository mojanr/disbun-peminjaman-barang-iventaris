import { CallHandler, ExecutionContext, HttpException, HttpStatus, Injectable, NestInterceptor, NotFoundException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => {
        // check if data is array
        if (Array.isArray(data)) {
          // check if data length is 0
          if (data.length == 0) throw new NotFoundException()

          throw new HttpException({
            statusCode: HttpStatus.OK,
            message: data,
          }, HttpStatus.OK)
        } else {
          // data is not array, check if null or undefined or object key is empty
          if (!data) throw new NotFoundException()
          if (Object.keys(data).length == 0) throw new NotFoundException()

          throw new HttpException({
            statusCode: HttpStatus.OK,
            message: data,
          }, HttpStatus.OK)
        }
      })
    )
  }
}