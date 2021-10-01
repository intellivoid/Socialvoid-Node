import Client from "./Client";
import Request from "./Request";
import { HelpDocument, ServerInformation } from "./types";

export default class Help {
  constructor(private client: Client) {}

  async getCommunityGuidelines() {
    return HelpDocument.fromObject(
      await this.client.invokeRequest(
        new Request("help.get_community_guidelines")
      )
    );
  }

  async getPrivacyPolicy() {
    return HelpDocument.fromObject(
      await this.client.invokeRequest(new Request("help.get_privacy_policy"))
    );
  }

  async getServerInformation() {
    return ServerInformation.fromObject(
      await this.client.invokeRequest(
        new Request("help.get_server_information")
      )
    );
  }

  async getTermsOfService() {
    return HelpDocument.fromObject(
      await this.client.invokeRequest(new Request("help.get_terms_of_service"))
    );
  }
}
