import {compare as defaultCompare} from "@harrisontaee/library/utilities";
import {useRef} from "react";

/**
 * Returns the previous state value of that provided.
 * @param value The value to track
 * @param compare Optional comparison function
 */
export const usePrevious = (value: any, compare = defaultCompare) => {
	const ref = useRef({cur: value, prev: null});
	const cur = ref.current.cur;
  
	 if (compare ? !compare(cur, value) : value !== cur) {
		ref.current = {cur: value, prev: cur};
	 };
  
	 return ref.current.prev;
};