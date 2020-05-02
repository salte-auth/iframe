import { Handler, Utils, OAuth2Provider, OpenIDProvider } from '@salte-auth/salte-auth';

export class IFrame extends Handler {
  public get name() {
    return 'iframe';
  }

  public get auto() {
    return true;
  }

  public open({ url, redirectUrl, visible }: IFrame.OpenOptions): Promise<OAuth2Provider.Validation | OpenIDProvider.Validation> {
    return Utils.Common.iframe({
      url,
      redirectUrl,
      visible
    });
  }
}

export declare namespace IFrame {
  export interface OpenOptions extends Handler.OpenOptions {
    visible?: boolean;
  }
}
