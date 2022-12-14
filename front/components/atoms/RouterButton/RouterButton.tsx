import React from "react";
import { RouterButtonProps } from "./RouterButton.type";
import styles from "./RouterButton.module.scss";
import { useRouter } from "next/router";

const RouterButton: React.FC<RouterButtonProps> = (props) => {
  const { path, children, onClick, ...rest } = props;
  const router = useRouter();
  return (
    <button
      className={styles.RouterButton}
      onClick={() => router.push(path)}
      {...rest}
    >
      {children}
    </button>
  );
};

RouterButton.displayName = "RouterButton";

export default RouterButton;
