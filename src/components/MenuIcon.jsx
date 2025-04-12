const __ICONS = {
  'HB': `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.88 0H0.12C0.054 0 0 0.0613636 0 0.136364V1.22727C0 1.30227 0.054 1.36364 0.12 1.36364H11.88C11.946 1.36364 12 1.30227 12 1.22727V0.136364C12 0.0613636 11.946 0 11.88 0ZM11.88 10.6364H0.12C0.054 10.6364 0 10.6977 0 10.7727V11.8636C0 11.9386 0.054 12 0.12 12H11.88C11.946 12 12 11.9386 12 11.8636V10.7727C12 10.6977 11.946 10.6364 11.88 10.6364ZM11.88 5.31818H0.12C0.054 5.31818 0 5.37955 0 5.45455V6.54545C0 6.62045 0.054 6.68182 0.12 6.68182H11.88C11.946 6.68182 12 6.62045 12 6.54545V5.45455C12 5.37955 11.946 5.31818 11.88 5.31818Z" fill="white" style="fill:white;fill-opacity:1;"/></svg>`,
  'arrow_down': `<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M1 2.5L6 7.5L11 2.5" stroke="white" style="stroke:white;stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></svg>`,
  'arrow_next': `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12L10 8L6 4" stroke="#61676B" style="stroke:#61676B;stroke:color(display-p3 0.3817 0.4026 0.4183);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
}

export default function MenuIcon ({ source, className }) {
  return <span className={ ['__bm-menu-icon', className].join(' ') } dangerouslySetInnerHTML={{__html: __ICONS[source]}}></span>
}