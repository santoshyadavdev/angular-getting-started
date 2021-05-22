import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  constructor() {}

  log(log: string) {
    console.log(log);
  }
}
