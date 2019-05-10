import { Handler, Utils } from '@salte-auth/salte-auth';

export class IFrame extends Handler {
  public get name() {
    return 'iframe';
  }

  public get auto() {
    return true;
  }

  public open({ url, redirectUrl, visible }: IFrame.OpenOptions) {
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
