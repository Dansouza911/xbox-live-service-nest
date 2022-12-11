import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Server is running 🚀. Check /api for Swagger docs...`;
  }
}
