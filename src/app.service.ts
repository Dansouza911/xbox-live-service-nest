import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(): string {
    return 'App running!🚀 visit https://localhost:3500/docs for documentation';
  }
}
