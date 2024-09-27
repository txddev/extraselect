import { Ref } from "vue";

export type TargetHTMLElement = HTMLSelectElement | HTMLInputElement
export type DataValue = string | number | boolean | null | { [key: string]: DataValue };
export type OptionKey = number|string
export type OptionValue = number|string|boolean
export type Option = {key: OptionKey,value: OptionValue , data?: Record<string,DataValue>}
export type ModelValue<M extends boolean, T> = M extends true ? OptionValue[] : OptionValue|null;
