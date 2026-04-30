export default function taskBlock(trueOrFalse) {
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
    return [task, task2];
  }

  const task = false;
  const task2 = true;
  return [task, task2];
}
