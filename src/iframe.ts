import { Handler, Utils, OAuth2Provider, OpenIDProvider } from '@salte-auth/salte-auth';

export class IFrame extends Handler {
  public get name() {
    return 'iframe';
  }

  public get auto() {
    return true;
  }

  public open({ url, redirectUrl }: Handler.OpenOptions): Promise<OAuth2Provider.Validation | OpenIDProvider.Validation> {
    return Utils.Common.iframe({
      url,
      redirectUrl,
      visible: true
    });
  }
}
