function domainName(url) {
  let domain = url.replace(/^https?:\/\//, "").replace(/^www\./, "");
  domain = domain.split("/")[0];
  domain = domain.split(".")[0];
  return domain;
}
