function createPhoneNumber(numbers) {
  let phoneNumber = numbers.join("");
  return (
    "(" +
    phoneNumber.substring(0, 3) +
    ") " +
    phoneNumber.substring(3, 6) +
    "-" +
    phoneNumber.substring(6)
  );
}
