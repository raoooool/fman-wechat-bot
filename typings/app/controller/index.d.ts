// This file is created by egg-ts-helper@1.31.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    home: ExportHome;
  }
}
