import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from './log.service';


@Injectable()
export class DataService {

  pushedData = new EventEmitter<string>();

	private data: string[] = [];

  constructor(private logService: LogService) { }

  addData(data: string) {
    this.data.push(data);
    this.logService.log('Eintrag Hinzugefügt');

  }

  getData() {
    return this.data;
  }

  pushData(value: string) {
    this.pushedData.emit(value);
  }

}
