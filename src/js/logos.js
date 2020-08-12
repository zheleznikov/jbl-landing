import { jblLogoPopup, hypeLogoPopup } from "./constants";

export default function () {
  jblLogoPopup.forEach(logo => logo.classList.add('logo_jbl_popup'));
  hypeLogoPopup.forEach(logo => logo.classList.add('logo_hype_popup'));
}
