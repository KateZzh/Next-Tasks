export default function Calculator(setVal, val) {
  function getInputValue(e) {
    setVal({ ...val, [e.target.name]: +e.target.value });
  }

  function doAddition() {
    setVal({ ...val, result: val.num1 + val.num2 });
  }

  function doSubtraction() {
    setVal({ ...val, result: val.num1 - val.num2 });
  }

  function doMultiplication() {
    setVal({ ...val, result: val.num1 * val.num2 });
  }

  function doDivision() {
    val.num2 === 0 && setVal('Infinity');

    setVal({ ...val, result: val.num1 / val.num2 });
  }

  function doClear() {
    setVal({ ...val, num1: '', num2: '', result: '' });
  }

  return { getInputValue, doAddition, doSubtraction, doMultiplication, doDivision, doClear };
}
