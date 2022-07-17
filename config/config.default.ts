import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import { db, webhook } from '../secret';

export default (appInfo: EggAppInfo) => {
  const config = {
    webhookUrl: webhook.url,
    mongoose: {
      client: {
        url: db.url,
        options: {},
        // mongoose global plugins, expected a function or an array of function and options
        // plugins: [createdPlugin, [updatedPlugin, pluginOptions]],
      },
    },
  } as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1658066665674_1034';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
