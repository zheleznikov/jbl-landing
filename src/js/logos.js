import { jblLogoPopup, hypeLogoPopup } from "./constants";

export default function () {
  console.log(jblLogoPopup);
  console.log(hypeLogoPopup);
  jblLogoPopup.forEach(logo => logo.classList.add('logo_jbl_popup'));
  hypeLogoPopup.forEach(logo => logo.classList.add('logo_hype_popup'));
}
