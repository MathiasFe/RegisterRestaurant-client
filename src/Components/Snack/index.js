import React from 'react';
import { Snackbar } from '@material-ui/core'
import MuiAlert from "@material-ui/lab/Alert";


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Snack({ showSnack, closeSnack, text, severity = "success" }) {
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={showSnack}
        autoHideDuration={3000}
        onClose={closeSnack}>
        <Alert onClose={closeSnack} severity={severity}>
          {text}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Snack;