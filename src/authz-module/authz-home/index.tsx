import { useIntl } from '@edx/frontend-platform/i18n';
import { Container, Tab, Tabs } from '@openedx/paragon';
import { useLocation, useSearchParams } from 'react-router-dom';
import TeamMembersTable from '@src/authz-module/team-members/TeamMembersTable';
import AddRoleButton from '@src/authz-module/components/AddRoleButton';
import RolesPermissions from '../roles-permissions/RolesPermissions';
import AuthZLayout from '../components/AuthZLayout';

import messages from './messages';

const AuthzHome = () => {
  const { hash } = useLocation();
  const intl = useIntl();
  const [searchParams] = useSearchParams();

  /* In the authoring repository the scope is encoded but this is to Replace spaces with '+'
     to match URL encoding format in case the 'scope' parameter is provided with spaces instead of '+'
  */
  const presetScope = searchParams.get('scope')?.replace(/\s/g, '+') || undefined;

  const pageTitle = intl.formatMessage(messages['authz.manage.page.title']);

  return (
    <div className="authz-module">
      <AuthZLayout
        context={{ id: '', title: '', org: '' }}
        pageTitle={pageTitle}
        pageSubtitle=""
        actions={
          [<AddRoleButton key="add-role-button" />]
        }
      >
        <div className="bg-light-200 py-4">
          <Container>
            <Tabs
              variant="tabs"
              defaultActiveKey={hash ? 'permissionsRoles' : 'team'}
            >
              <Tab eventKey="team" title={intl.formatMessage(messages['authz.tabs.team'])} className="pt-4">
                <TeamMembersTable presetScope={presetScope} />
              </Tab>
              <Tab id="libraries-permissions-roles-tab" eventKey="permissionsRoles" title={intl.formatMessage(messages['authz.tabs.permissionsRoles'])}>
                <RolesPermissions />
              </Tab>
            </Tabs>
          </Container>
        </div>
      </AuthZLayout>
    </div>
  );
};

export default AuthzHome;
