import React from "react";
import {
  defaultQueryResults,
  defaultRefreshing,
  defaultWallet,
  defaultWalletWeb3Modal,
  IAction,
  IState,
} from "./interfaces";

const initialState: IState = {
  refreshing: defaultRefreshing,
  wallet: defaultWallet,
  walletWeb3Modal: defaultWalletWeb3Modal,
  queryResults: defaultQueryResults,
};

// The reducer takes the state and applies the action(s) to it in order to modify the store
// Each action has a type and payload
export const reducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case "REFRESHING_UPDATED":
      return { ...state, refreshing: action.payload };
    case "WALLET_UPDATED":
      return { ...state, wallet: action.payload };
    case "WALLETWEB3MODAL_UPDATED":
      return { ...state, walletWeb3Modal: action.payload };
    case "QUERYRESULTS_UPDATED":
      return { ...state, queryResults: action.payload };
    default:
      return state;
  }
}
