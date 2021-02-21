export const getEndingsForSavedArticles = (n) => {
  if (n.toString().endsWith('1')) {
    return 'сохраненная статья';
  }
  if (n >= 10 && n <= 20) {
    return 'сохраненных статей';
  }
  if (['2', '3', '4'].includes(n.toString()[n.toString().length - 1])) {
    return 'сохраненные статьи';
  }
  return 'сохраненных статей';
};

export function getMostUsedKeywords(articles, boldStyle) {
  const keywordsArrObj = {};
  const keywordsArr = [];
  articles.forEach((card) => {
    keywordsArrObj[card.keyword] = (keywordsArrObj[card.keyword] || 0) + 1;
  });

  Object.keys(keywordsArrObj).forEach((keyword) => {
    keywordsArr.push([keyword, keywordsArrObj[keyword]]);
  });

  keywordsArr.sort((a, b) => b[1] - a[1]);

  if (keywordsArr.length === 1) {
    return <span className={boldStyle}>{keywordsArr[0][0]}</span>;
  }
  if (keywordsArr.length === 2) {
    return (
      <>
        <span className={boldStyle}>{`${keywordsArr[0][0]}`}</span>
        <span> и </span>
        <span className={boldStyle}>{`${keywordsArr[1][0]} `}</span>
      </>
    );
  }

  if (keywordsArr.length === 3) {
    return (
      <>
        <span className={boldStyle}>{`${keywordsArr[0][0]}`}</span>
        <span>, </span>
        <span className={boldStyle}>{`${keywordsArr[1][0]}`}</span>
        <span> и </span>
        <span className={boldStyle}>{`${keywordsArr[2][0]}`}</span>
      </>
    );
  }
  if (keywordsArr.length > 3) {
    return (
      <>
        <span className={boldStyle}>{`${keywordsArr[0][0]}`}</span>
        <span>, </span>
        <span className={boldStyle}>{`${keywordsArr[1][0]}`}</span>
        <span>, </span>
        {/* <span className={boldStyle}>{`${keywordsArr[2][0]}`}</span> */}
        <span> и {keywordsArr.length - 2} другим</span>
      </>
    );
  }
  return <span />;
}
