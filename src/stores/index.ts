import Store from "./Store";
import FileStore from "./FileStore";
import MemoryStore from "./MemoryStore";
import LocalStorageStore from "./LocalStorageStore";

export type Memory = ":memory:";
export type FileName = string;
export type LocalStorageKey = string;

export { Store, FileStore, MemoryStore, LocalStorageStore };
