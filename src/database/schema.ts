import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage'
import { DiariesModel } from './models'

const tableDiary = 'diaries'

enablePromise(true)

// --------- CREATE TABLE --------- //

export const getDBConnection = async () => {
  return openDatabase({name: 'dreamdiary.db', location: 'default'})
}

export const createTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableDiary}(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date TEXT NOT NULL,
        dream_type TEXT NOT NULL,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        story TEXT NOT NULL
    );`

  await db.executeSql(query)
}

export const deleteTable = async (db: SQLiteDatabase) => {
  const query = `drop table ${tableDiary}`;

  await db.executeSql(query);
}

// --------- CONTROLLER FOR DIARIES TABLE --------- //

export const getDiary = async (db: SQLiteDatabase): Promise<DiariesModel[]> => {
  try {
    const diariesModel: DiariesModel[] = [];
    const results = await db.executeSql(`SELECT id, date, dream_type, title, description, story FROM ${tableDiary} ORDER BY id DESC`);
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        diariesModel.push(result.rows.item(index))
      }
    });
    return diariesModel;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get diariesModel !!!');
  }
}

export const saveDiary = async (db: SQLiteDatabase, diariesModel: DiariesModel[]) => {
  // this function is for accepting the single quotes to sql
  const convertSingleQuotes = (str: string) => {
    return str.replace(/\'/g,"''")
  }
  const insertQuery =
    `INSERT OR REPLACE INTO ${tableDiary}(date, dream_type, title, description, story) VALUES` +
    diariesModel.map(i => `('${i.date}', '${i.dream_type}', '${convertSingleQuotes(i.title)}', '${convertSingleQuotes(i.description)}', '${convertSingleQuotes(i.story)}')`).join(',');

  return db.executeSql(insertQuery);
}

export const deleteDiary = async (db: SQLiteDatabase, id: number) => {
  const deleteQuery = `DELETE from ${tableDiary} where id = ${id}`;
  await db.executeSql(deleteQuery);
}