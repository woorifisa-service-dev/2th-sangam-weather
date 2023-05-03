/**
 * @description html 파일 불러와서 로드하는 함수
 * @param file html 파일 경로
 *
 */

const htmlRoot = ['src/recommend/index.html'];
const loadHTML = file => {
  const rawFile = new XMLHttpRequest();
  rawFile.open('GET', file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        const allText = rawFile.responseText;
        document.write(allText);
      }
    }
  };
  rawFile.send(null);
};
