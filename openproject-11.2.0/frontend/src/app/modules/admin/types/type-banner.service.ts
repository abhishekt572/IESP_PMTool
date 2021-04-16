import {ConfirmDialogService} from 'core-components/modals/confirm-dialog/confirm-dialog.service';
import {I18nService} from 'core-app/modules/common/i18n/i18n.service';
import {BannersService} from 'core-app/modules/common/enterprise/banners.service';
import { Inject, Injectable } from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable()
export class TypeBannerService extends BannersService {

  constructor(@Inject(DOCUMENT) protected documentElement:Document,
              private confirmDialog:ConfirmDialogService,
              private I18n:I18nService) {
    super(documentElement);
  }

  showEEOnlyHint():void {
    this.confirmDialog.confirm({
      text: {
        title: this.I18n.t('js.types.attribute_groups.upgrade_to_ee'),
        text: this.I18n.t('js.types.attribute_groups.upgrade_to_ee_text'),
        button_cancel: this.I18n.t('js.types.attribute_groups.nevermind')
      }
    }).then(() => {
    });
  }
}

