import { IVideo } from "../interfaces/IVideo";

export const StorageService = {
  get(key: string, defaultValue: []) {
    const value = localStorage.getItem(key) || defaultValue;

    try {
      return JSON.parse(value as string);
    } catch (error) {
      return value;
    }
  },
  set(key: string, value: string | IVideo[]) {
    if (typeof value !== "string") {
      value = JSON.stringify(value);
    }

    localStorage.setItem(key, value);
  },
};
