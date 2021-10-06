import { isBrowser } from "browser-or-node";
import { Store, MemoryStore, FileStore, LocalStorageStore } from "./stores";
import { Help, Cloud, Network, Session, Account, CDN } from "./methods";
import BaseClient from "./BaseClient";
import { newHash } from "./utils";

export default class Client extends BaseClient {
  help = new Help(this);
  cloud = new Cloud(this);
  network = new Network(this);
  session = new Session(this);
  account = new Account(this);
  cdn = new CDN(this);

  private store: Store;

  constructor(
    store?: string | Store,
    rpcEndpoint = "http://socialvoid.qlg1.com:5601",
    cdnEndpoint = "http://socialvoid.qlg1.com:5602"
  ) {
    super(rpcEndpoint, cdnEndpoint);

    this.store =
      typeof store === "undefined"
        ? new MemoryStore()
        : typeof store === "string"
        ? isBrowser
          ? new LocalStorageStore(store)
          : new FileStore(store)
        : store;

    const session = this.store.get("session");

    if (session) {
      this._session = session;
    }

    this.network = new Network(this);
    this.help = new Help(this);
    this.cloud = new Cloud(this);
  }

  async newSession() {
    if (this._session) {
      return;
    }

    const publicHash = newHash();
    const privateHash = newHash();

    const session = await this.session.create(publicHash, privateHash);
    this._session = {
      publicHash,
      privateHash,
      id: session.id,
      challenge: session.challenge,
    };
    this.store.set("session", this._session);
    this.store.save();
  }

  deleteSession() {
    this._session = undefined;
    this.store.delete("session");
    this.store.save();
  }

  get sessionExists() {
    return this._session != undefined;
  }
}
