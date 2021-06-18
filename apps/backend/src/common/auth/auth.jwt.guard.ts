import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AuthJwtGuard extends AuthGuard('jwt') {

  constructor() {
    super()
  }

  canActivate(context: ExecutionContext) {
    // Add your custom authentication logic here
    // for example, call super.logIn(request) to establish a session.
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    if (err || !user) {
      // throw err
      if (err) throw err
      if (!user) throw new UnauthorizedException('Token tidak valid')
    }
    return user
  }

}