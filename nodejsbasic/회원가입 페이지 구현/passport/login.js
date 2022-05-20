// 유효성 검사
function check() {
  const email = document.querySelector('[name="email"]').value;
  if (!email) return false;
  const password = document.querySelector('[name="email"]').value;
  if (!password) return false;
  return true;
}
