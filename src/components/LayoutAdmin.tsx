import React, { ReactNode } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import { RootState } from "reducers";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import { roleId, confirm, sidebarMenu } from "utils";

import { Header, Sidebar, Footer } from "components";

const mapState = (state: RootState) => ({
  user: null,
  modules: [],
});

const mapDispatch = {
  dispatchUser: () => ({ user: null, type: "User/REMOVE" }),
  dispatchToken: () => ({ token: null, type: "Token/REMOVE" }),
  dispatchModules: () => ({ modules: [], type: "Modules/REMOVE" }),
};

const connector = connect(mapState, mapDispatch);

export type Menu = {
  display_name: string;
  path: string;
  roles: Array<any>;
};

export type State = {
  leftOpen: boolean;
  items: Menu[];
};

type Props = ConnectedProps<typeof connector> &
  RouteComponentProps &
  WithTranslation;

class LayoutAdmin extends React.PureComponent<Props, State> {
  readonly state: State = {
    leftOpen: true,
    items: sidebarMenu,
  };

  logout = async () => {
    const { t, dispatchUser, dispatchToken, dispatchModules } = this.props;

    const isLogout = await confirm({ title: t("want_exit") });

    if (!isLogout) {
      return;
    }

    dispatchUser();
    dispatchToken();
    dispatchModules();
  };

  toggleSidebar = (event: any) => {
    let key: any = `${event.currentTarget.parentNode.id}Open`;
    // @ts-ignore
    this.setState({ [key]: !this.state[key] });
  };

  render(): ReactNode {
    const { items } = this.state;
    const { t, user, modules, history, children } = this.props;

    const leftOpen = this.state.leftOpen ? "open" : "closed";
    const username = "";
    const logo = "";

    const role_id = 0;
    const modulesByRole = filterMenu(items, role_id);
    const isModerator = role_id === roleId.MODERATOR;

    const menu = isModerator ? modules : modulesByRole;

    return (
      <React.Fragment>
        <Header username={username} onPressLogout={this.logout} logo={logo} />
        <div id="layout">
          <Sidebar
            menu={menu}
            pathname={history.location.pathname}
            status={leftOpen}
            onCloseSidebar={this.toggleSidebar}
            onPressLogout={this.logout}
          />
          <div className={`container-router ${leftOpen}`}>
            {children}
            <Footer
              status={this.state.leftOpen}
              copyright={t("footer.copyright")}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function filterMenu(menu: Menu[], roleId: number) {
  return menu.filter(
    ({ roles }: { roles: Array<any> }) => !roles || roles.includes(roleId)
  );
}

export default withRouter(connector(withTranslation()(LayoutAdmin)));
