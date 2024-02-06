import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

@Injectable()
export class ConfigService {
  private readonly envConfig: Record<string, string>;

  constructor() {
    const envFile = `${process.env.NODE_ENV || 'development'}.env`;
    const fileExists = fs.existsSync(envFile);

    if (fileExists) {
      this.envConfig = dotenv.parse(fs.readFileSync(envFile));
    } else {
      this.envConfig = {};
    }
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
