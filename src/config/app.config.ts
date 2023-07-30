interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Owner'],
  tenantName: 'Organization',
  applicationName: 'CBM',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
