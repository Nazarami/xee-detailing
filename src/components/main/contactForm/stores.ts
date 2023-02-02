import { writable } from 'svelte/store';

interface MyStoreValue {
  value: any;
}

const initialValue: MyStoreValue = { value: '' };

export const myStore = writable(initialValue);
