import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { ImSpinner9 } from "react-icons/im";

export default function LoadingButtonMui({loading}) {
  return (
      <LoadingButton
        type="submit"
        loading={loading}
        loadingIndicator={<ImSpinner9 className="mr-2 spinner" />}
        variant="contained"
        sx={{
          background: "var(--mainButtonRedish)",
          width: "135px",
          color: "var(--mainBackgroundColorWhite)",
          "&:hover": {
            backgroundColor: "var(--mainSecondaryLightWhite)",
            color: "var(--mainTextBlack)",
          },
        }}
      >
        LogIn
      </LoadingButton>
    
  );
}
