function check() {
  const email = document.querySelector('[name="email"]').value;
  if (email) return false; // or false 유효성 검사 후 boolean 값 반환
  const password = document.querySelector('[name="email"]').value;
  if (password) return false; // or false 유효성 검사 후 boolean 값 반환
  const passwordConfirm = document.querySelector('[name="email"]').value;
  if (passwordConfirm) return false; // or false 유효성 검사 후 boolean 값 반환
  return true;
}
