import fs from 'fs';
import path from 'path';
import { DataTypes, Sequelize } from 'sequelize';
import { config } from '../helpers';

const basename = path.basename(__filename);
const db: any = {};

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: config.get('database.host'),
  port: config.get('database.port'),
  username: config.get('database.username'),
  password: config.get('database.password'),
  database: config.get('database.name'),
  logging: false,  // Disable logging
});

const directories = fs.readdirSync(__dirname).filter((file) => {
  return (
    file.indexOf('.') !== 0 &&
    file !== basename &&
    file.slice(-3) === '.ts' &&
    file.indexOf('.test.ts') === -1
  );
});

const assosciateModel = async () => {

  for (const file of directories) {
    const modelModule = await import(path.join(__dirname, file));
    const model = modelModule.default(sequelize, DataTypes);
    db[model.name] = model;
  }

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
}


assosciateModel();

db.sequelize = sequelize;
db.Sequelize = Sequelize;



export default db;
