export default function toggleWalletWindowVisibility(newVal: boolean) {
  if(!newVal) {
  document.documentElement.style.setProperty('--wwv', `none`);
  } else {    
    document.documentElement.style.setProperty('--wwv', `flex`);
  }
}