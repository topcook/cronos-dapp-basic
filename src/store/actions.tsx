import { useDispatch } from "react-redux";

export const UpdateRefreshingAction = (
) => {
  const dispatch = useDispatch();
  const updateRefreshing = (payload: any) => {
    dispatch({
      type: "REFRESHING_UPDATED",
      payload: payload,
    })
  }

  return { updateRefreshing };
};

export const UpdateWalletAction = () => {
  const dispatch = useDispatch();
  const updateWallet = (payload: any) => {
    dispatch({
      type: "WALLET_UPDATED",
      payload: payload,
    })
  }

  return { updateWallet };
};

export const UpdateWalletWeb3ModalAction = () => {
  const dispatch = useDispatch();
  const updateWalletWeb3Modal = (payload: any) => {
    dispatch({
      type: "WALLETWEB3MODAL_UPDATED",
      payload: payload,
    })
  }

  return { updateWalletWeb3Modal };
};

export const UpdateQueryResultsAction = () => {
  const dispatch = useDispatch();
  const updateQueryResults = (payload: any) => {
    dispatch({
      type: "QUERYRESULTS_UPDATED",
      payload: payload,
    })
  }

  return { updateQueryResults };
};
