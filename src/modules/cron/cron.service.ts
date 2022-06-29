import { ConflictException, Injectable } from '@nestjs/common';
import { Cron, SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class CronService {
  constructor(
    private scheduleRegistry: SchedulerRegistry, //private loggerService: LoggerService,
  ) {}

  @Cron('*/10 * * * * * ', {
    name: 'cron1',
  })
  cron1() {
    //this.loggerService.log('crn1, accion cada 10se');
    console.error('crn1, accion cada 10se');
  }

  @Cron('*/30 * * * * * ', {
    name: 'cron2',
  })
  cron2() {
    //this.loggerService.error('crn2, accion cada 30se');
    console.info('crn1, accion cada 10se');
  }

  @Cron('* * * * * ', {
    name: 'cron3',
  })
  cron3() {
    // this.loggerService.warn('crn3, accion cada minuto');
    console.warn('crn1, accion cada 10se');
  }

  desactivateCron(name: string) {
    const job: CronJob = this.scheduleRegistry.getCronJob(name);
    if (!job) {
      throw new ConflictException('El cron  no existe');
    } else {
      job.stop();
      console.log(`cron`, name, 'desactivado');
      return true;
    }
  }

  activateCron(name: string) {
    const job: CronJob = this.scheduleRegistry.getCronJob(name);
    if (!job) {
      throw new ConflictException('El cron  no existe');
    } else {
      job.start();
      console.log(`cron`, name, 'activado');
      return true;
    }
  }

  getNamesCrons() {
    const names = [];
    for (const iterator of this.scheduleRegistry.getCronJobs().keys()) {
      console.log('name', iterator);
      names.push(iterator);
    }

    return names;
  }

  desactivateAllCron() {
    const names = this.getNamesCrons();
    for (const name of names) {
      this.desactivateCron(name);
      console.log('desactivar todo');
    }
    return true;
  }

  activateAllCron() {
    const names = this.getNamesCrons();
    for (const name of names) {
      this.activateCron(name);
      console.log('activar todo');
    }
    return true;
  }
}
