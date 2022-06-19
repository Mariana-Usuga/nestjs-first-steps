import { ConflictException, Injectable } from '@nestjs/common';
import { Cron, SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';

@Injectable()
export class CronService {
  constructor(private scheduleRegistry: SchedulerRegistry) {}

  @Cron('*/10 * * * * * ', {
    name: 'cron1',
  })
  cron1() {
    console.log('crn1, accion cada 10se');
  }

  @Cron('*/30 * * * * * ', {
    name: 'cron2',
  })
  cron2() {
    console.log('crn2, accion cada 30se');
  }

  @Cron('* * * * * ', {
    name: 'cron3',
  })
  cron3() {
    console.log('crn3, accion cada minuto');
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
