/** @format */

import React from "react";
import { useHistory } from "react-router-dom";

import {
  MainDiv,
  InnerDiv,
  InnerDiv1,
  HeaderDiv,
  SecondInner,
  Htag,
  Htag3,
  ButtonDiv,
} from "./Goal-css";

export const First = ({ name }) => {
  const history = useHistory();
  return (
    <MainDiv>
      <InnerDiv>
        <InnerDiv1>
          <HeaderDiv>
            <Htag>Prepare for {name}</Htag>
          </HeaderDiv>
          <SecondInner>
            <Htag3>
              Education is the passport to the future.
            </Htag3>
          </SecondInner>
          <ButtonDiv onClick={() => history.push("/watch")}>
            Get subscription
          </ButtonDiv>
        </InnerDiv1>
      </InnerDiv>
    </MainDiv>
  );
};
