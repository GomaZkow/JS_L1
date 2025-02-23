function ipv4Parser(ip, mask) {
  const masIP = ip.split(".").map(Number);
  const MasMask = mask.split(".").map(Number);

  const Adress = [];
  const Host = [];

  for (let i = 0; i < 4; i++) {
    Adress[i] = masIP[i] & MasMask[i];
    Host[i] = masIP[i] & ~MasMask[i];
  }

  return [Adress.join("."), Host.join(".")];
}
