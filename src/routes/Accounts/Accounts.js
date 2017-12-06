import * as React from "react";
import { Helmet } from "react-helmet";
import ConnectedEOSAccounts from "components/AddEOSAccountForm";
import EOSAccount from "../../components/EOSAccount";
import { AppNotifications as Notifications } from "../../components/Notification";
import { selectEOSAccountName } from "../../redux-modules/eos-account/account-selectors";
import { connect } from "react-redux";

type Props = {
  eosAccountName: ?string
};

const Accounts = ({ eosAccountName }: Props) => (
  <div>
    <Helmet>
      <title>EOS Account</title>
    </Helmet>
    <div className="content">
      <Notifications />
      <h2 className="title is-2">Connect Accounts</h2>
      {eosAccountName ? <EOSAccount /> : <ConnectedEOSAccounts />}
    </div>
  </div>
);

const mapStateToProps = state => ({
  eosAccountName: selectEOSAccountName(state)
});

export default connect(mapStateToProps)(Accounts);
