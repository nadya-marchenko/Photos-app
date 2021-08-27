export const hexToRgb = (h: string, isPct: boolean) => {
  let r: string = '0',
    g: string = '0',
    b: string = '0';
  isPct = isPct === true;

  if (h.length === 4) {
    r = '0x' + h[1] + h[1];
    g = '0x' + h[2] + h[2];
    b = '0x' + h[3] + h[3];
  } else if (h.length === 7) {
    r = '0x' + h[1] + h[2];
    g = '0x' + h[3] + h[4];
    b = '0x' + h[5] + h[6];
  }

  if (isPct) {
    r = ((parseInt(r) / 255) * 100).toFixed(1).toString();
    g = ((parseInt(g) / 255) * 100).toFixed(1).toString();
    b = ((parseInt(b) / 255) * 100).toFixed(1).toString();
  }

  return (
    'rgb(' +
    (isPct ? r + '%, ' + g + '%, ' + b + '%' : +r + ', ' + +g + ', ' + +b) +
    ')'
  );
};
