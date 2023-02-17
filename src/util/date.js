// 공통된 유틸성 함수는 여기에 모아놓고 끌어다 쓸수 있음.

export const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};
