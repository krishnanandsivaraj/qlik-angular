import { IbmcommonModule } from './ibmcommon.module';

describe('IbmcommonModule', () => {
  let ibmcommonModule: IbmcommonModule;

  beforeEach(() => {
    ibmcommonModule = new IbmcommonModule();
  });

  it('should create an instance', () => {
    expect(ibmcommonModule).toBeTruthy();
  });
});
