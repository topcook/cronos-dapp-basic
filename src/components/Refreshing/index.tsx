import React from "react";
import { useSelector } from "react-redux";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import './index.scss';

interface IProps { }

const Refreshing: React.FC<IProps> = () => {
  // const { state } = React.useContext(Store);
  const state = useSelector((state: any) => state.info);

  const renderRefreshing = () => {
    return (
      <div className="render-refreshing">

        <Container>

          <Typography>LOADING</Typography>

          <img
            src="/images/loader.gif"
          />{" "}

          <br />

          <Typography noWrap={false}>
            {state.refreshing.message} <br />
          </Typography>

        </Container>
      </div>
    );
  };

  if (state.refreshing.status === true) {
    return renderRefreshing();
  } else {
    return null;
  }
};

export default Refreshing;
