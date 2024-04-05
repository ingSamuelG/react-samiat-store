export const createAction = (stringType, payloadValue = null) => ({
  type: stringType,
  payload: payloadValue,
});
