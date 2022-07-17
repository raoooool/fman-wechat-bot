// This file is created by egg-ts-helper@1.30.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTask from '../../../app/model/task';

declare module 'egg' {
  interface IModel {
    Task: ReturnType<typeof ExportTask>;
  }
}
