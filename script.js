// Time code
function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${hours}h:${minutes}m:${seconds}s`;
  
  document.getElementById('time').textContent = timeString;
}
updateTime();
setInterval(updateTime, 1000);
// Copyright code
const currentYear = new Date().getFullYear();
const copyrightElement = document.querySelector('.footer p');
copyrightElement.textContent = `${currentYear} AmtiXDev. All rights reserved.`;