import Database from "better-sqlite3";

export abstract class BaseDAO{
    protected db: Database.Database;

    constructor(dbPath: string = 'inventory.db'){
        this.db = new Database(dbPath);
        this.initTable();
    }

    protected abstract initTable():void;
}