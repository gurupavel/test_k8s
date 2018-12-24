/**
 * submit form while field is in focus
 */
export function onEnterClick(e, callback) {
  let KeyID = e.keyCode;

  switch (KeyID) {
    case 13:
      callback();
      break;

    default:
      break;
  }
};