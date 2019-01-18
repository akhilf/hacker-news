import React, { PureComponent } from "react";
import footerModel from "./footer-model";
import { NavItems } from "../molecules/NavItems";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as FooterActions from "./FooterActions";
import * as NewsActions from "../../containers/news/NewsActions";

import "./Footer.css";

class Footer extends PureComponent {
  constructor(props) {
    super(props);
    this.loadNextPage = this.loadNextPage.bind(this);
  }
  loadNextPage() {
    const { actions, FooterState } = this.props;
    const { pageNumber } = FooterState;
    const { updatePageNumber, getNews } = actions;
    updatePageNumber(pageNumber + 1);
    getNews(pageNumber + 1);
  }
  render() {
    const { search, navLinks, more } = footerModel;
    return (
      <footer>
        <div onClick={this.loadNextPage}>{more}</div>
        <div className="footer-content">
          <NavItems links={navLinks} />
          <div>
            {search}
            <input type="text" />
          </div>
        </div>
      </footer>
    );
  }
}

const mapStateToProps = state => ({
  FooterState: state.FooterState
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...FooterActions, ...NewsActions }, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
