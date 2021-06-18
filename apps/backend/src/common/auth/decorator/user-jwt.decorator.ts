import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserJwt = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    // console.log('user', request.user)
    return request.user
  },
);