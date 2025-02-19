import { Environments } from '@mockoon/commons';
import {
  ActiveEnvironmentsLogUUIDs,
  EnvironmentLogs
} from 'src/renderer/app/models/environment-logs.model';
import { Toast } from 'src/renderer/app/models/toasts.model';
import { Settings } from 'src/shared/models/settings.model';

export type ViewsNameType =
  | 'ENV_ROUTES'
  | 'ENV_HEADERS'
  | 'ENV_LOGS'
  | 'ENV_PROXY'
  | 'ENV_SETTINGS';

export type TabsNameType = 'RESPONSE' | 'HEADERS' | 'RULES' | 'SETTINGS';

export type EnvironmentLogsTabsNameType = 'REQUEST' | 'RESPONSE';

export type EnvironmentStatus = {
  running: boolean;
  needRestart: boolean;
};

export type EnvironmentStatusProperties = {
  [T in keyof EnvironmentStatus]?: EnvironmentStatus[T];
};

export type EnvironmentsStatuses = { [key: string]: EnvironmentStatus };

export type DuplicatedRoutesTypes = { [key: string]: Set<string> };

export type UIState = {
  closing: boolean;
};

export type UIStateProperties = { [T in keyof UIState]?: UIState[T] };

export type DuplicateRouteToAnotherEnvironment = {
  moving: boolean;
  routeUUID?: string;
  targetEnvironmentUUID?: string;
};

export type StoreType = {
  activeTab: TabsNameType;
  activeView: ViewsNameType;
  activeEnvironmentLogsTab: EnvironmentLogsTabsNameType;
  activeEnvironmentUUID: string;
  activeRouteUUID: string;
  activeRouteResponseUUID: string;
  environments: Environments;
  environmentsStatus: EnvironmentsStatuses;
  bodyEditorConfig: any;
  duplicatedRoutes: DuplicatedRoutesTypes;
  environmentsLogs: EnvironmentLogs;
  // the active log UUID per environment
  activeEnvironmentLogsUUID: ActiveEnvironmentsLogUUIDs;
  toasts: Toast[];
  uiState: UIState;
  settings: Settings;
  duplicateRouteToAnotherEnvironment: DuplicateRouteToAnotherEnvironment;
  routesFilter: string;
};
