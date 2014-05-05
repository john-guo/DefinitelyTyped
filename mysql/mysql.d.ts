// Type definitions for node-mysql 2.1.1
// Project: https://github.com/felixge/node-mysql
// Definitions by: john-guo <https://github.com/john-guo/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path='../node/node.d.ts' />

declare module 'mysql' {
    import events = require("events");

    interface ConnectionConfig {
        host: string;
        port: number;
        localAddress: string;
        socketPath: string;
        user: string;
        password: string;
        database: string;
        connectTimeout: number;
        insecureAuth: boolean;
        supportBigNumbers: boolean;
        bigNumberStrings: boolean;
        dateStrings: boolean;
        debug: any;
        trace: boolean;
        stringifyObjects: boolean;
        timezone: string;
        flags: string;
        queryFormat: Function;
        ssl: any;
        multipleStatements: boolean;
        typeCast: boolean;
        pool: Pool;
    }

    interface PoolConfig {
        connectionConfig: ConnectionConfig;
        waitForConnections: boolean;
        connectionLimit: number;
        queueLimit: number;
    }

    interface Connection extends events.EventEmitter {
        config: ConnectionConfig;
        state: string;

        changeUser(config: any, fn?: Function): void;
        connect(fn: Function): void;
        query(sql: string, values: any, fn: Function): any;
        query(options: any, fn: Function): any;
        query(q: any): any;
        end(fn: Function): void;
        destroy(): void;
        beginTransaction(fn: Function): void;
        commit(fn: Function): void;
        rollback(fn: Function): void;
        ping(fn: Function): void;
        statistics(fn: Function): void;
        pause(): void;
        resume(): void;
        escape(values: any): string;
        format(sql: string, values: any): string;
    }

    interface PoolConnection extends Connection {
        release(): void;
    }

    interface Pool extends events.EventEmitter {
        getConnection(fn: Function): PoolConnection;
        releaseConnection(connection: PoolConnection);
        end(fn?: Function): void;
        query(sql: string, values: any, fn: Function): any;
        query(sql: string, fn: Function): any;
        escape(values: any): string;
    }

    interface PoolCluster extends events.EventEmitter {
        of(pattern: string, selector?: string): PoolCluster;
        add(config: any): void;
        add(id: string, config: any): void;
        getConnection(pattern: string, selector: string, fn: Function): void;
        getConnection(pattern: string, fn: Function): void;
        getConnection(fn: Function): void;
        end(): void;
    }

    export function createConnection(config: any): Connection;

    export function createPool(config: any): Pool;

    export function createPoolCluster(config?: any): PoolCluster;

    export var createQuery: (sql: string, fn: Function) => any;

    export var format: (sql: string, values: any) => string;

    export var escapeId: (values: any) => string;

    export var escape: (values: any)=> string;

    export var Types: {
        DECIMAL;
        TINY;
        SHORT;
        LONG;
        FLOAT;
        DOUBLE;
        NULL;
        TIMESTAMP;
        LONGLONG;
        INT24;
        DATE;
        TIME;
        DATETIME;
        YEAR;
        NEWDATE;
        VARCHAR;
        BIT;
        NEWDECIMAL;
        ENUM;
        SET;
        TINY_BLOB;
        MEDIUM_BLOB;
        LONG_BLOB;
        BLOB;
        VAR_STRING;
        STRING;
        GEOMETRY;
    }
}

