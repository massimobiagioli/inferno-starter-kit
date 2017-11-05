export const COUNTER_INC = 'COUNTER_INC';
export const COUNTER_DEC = 'COUNTER_DEC';

export function counterInc(step) {
  return { type: COUNTER_INC, payload: step };
}

export function counterDec(step) {
  return { type: COUNTER_DEC, payload: step };
}
