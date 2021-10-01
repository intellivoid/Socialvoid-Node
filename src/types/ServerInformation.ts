import Base from "./Base";

export default class ServerInformation extends Base {
  constructor(
    public networkName: string,
    public protocolVersion: string,
    public cdnServer: string,
    public uploadMaxFileSize: string,
    public unauthorizedSessionTTL: string,
    public authorizedSessionTTL: number
  ) {
    super();
  }

  static fromObject(obj: any) {
    return new this(
      obj.network_name,
      obj.protocol_version,
      obj.cdn_server,
      obj.upload_max_file_size,
      obj.unauthorized_session_ttl,
      obj.authorized_session_ttl
    );
  }
}
