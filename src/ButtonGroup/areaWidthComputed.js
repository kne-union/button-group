import memoize from 'lodash/memoize';

const areaWidthComputed = memoize(
  ({ amountWidth, moreBtnWidth, buttonWidthList, spaceProps, compact }) => {
    const spaceWidth = (() => {
      if (compact) {
        return 0;
      }

      if (['small', 'middle', 'large'].indexOf(spaceProps.size) > -1) {
        return (['small', 'middle', 'large'].indexOf(spaceProps.size) + 1) * 8;
      }

      if (Number.isInteger(spaceProps.size)) {
        return spaceProps.size;
      }
      return 8;
    })();

    let targetLength = 0,
      targetWidth = 0;

    // 采取先加后减策略
    while (amountWidth >= targetWidth + buttonWidthList[targetLength] + targetLength * spaceWidth && targetLength < buttonWidthList.length) {
      targetWidth += buttonWidthList[targetLength];
      targetLength += 1;
    }

    while (amountWidth < targetWidth + (targetLength - 1) * spaceWidth + (targetLength < buttonWidthList.length ? moreBtnWidth + spaceWidth : 0) && targetLength > 0) {
      targetWidth -= buttonWidthList[targetLength - 1];
      targetLength -= 1;
    }

    return targetLength;
  },
  ({ amountWidth, moreBtnWidth, buttonWidthList, spaceProps, compact }) => {
    return `${amountWidth}${moreBtnWidth}${buttonWidthList.join(',')}${Object.values(spaceProps).join(',')}${compact && compact.toString()}`;
  }
);

export default areaWidthComputed;
