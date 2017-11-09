//@flow
import { LOAD, REMOVE } from '../../reducers/hero';

export const load = (amount: number) => ({ type: LOAD, amount });
export const remove = (id: number) => ({ type: REMOVE, id });