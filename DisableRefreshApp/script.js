document.addEventListener("keydown", keysDown(actions));

function actions() {
  // action that will happen when keys pressed
  //can put alert here or leave empty for now
  //   alert("Leon this is not the website you wanted to refresh");
  // or
  // alert("This is not a website you should refresh");
}

// simultaneous pressing Ctrl + R
function keysDown() {
  return function (e) {
    if (e.ctrlKey && e.code === "KeyR") {
      e.preventDefault();
      console.log(e);
      console.log(" --- Refresh shortcut sucessfully blocked ---");
      actions();
    }
  };
}
