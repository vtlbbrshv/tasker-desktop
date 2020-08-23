import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { appInitialized } from "../../effects/actions";
import { getMessage } from "../../effects/selectors/appSelector";
import "./styles.scss";

const MainPage = () => {
  const dispatch = useDispatch();

  const message = useSelector(getMessage);

  useEffect(() => {
    dispatch(appInitialized());
  }, []);

  return <div className="main-page">{message}</div>;
};

export default MainPage;
