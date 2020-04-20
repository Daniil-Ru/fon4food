import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export enum AlertType {
  Success, Error
}

export const ALERT_CONFIG: { [key in AlertType]: AlertConfig } = {
  [AlertType.Success]: { cls: 'alert-success', iconCls: 'f4f-success', icon: faCheckCircle },
  [AlertType.Error]: { cls: 'alert-danger', iconCls: 'f4f-error', icon: faTimesCircle },
};

export interface AlertConfig {
  cls: string;
  iconCls: string;
  icon: IconDefinition;
}
