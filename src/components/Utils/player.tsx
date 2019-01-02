export const getID = (url: string) => {
  let res = url.match(/https:\/\/drive.google.com\/file\/d\/([a-zA-Z0-9_]+)\//);

  if (res) {
    return res[1];
  } else {
    return "COULD NOT FIND ID";
  }
};
