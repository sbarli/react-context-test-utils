export type DeepPartial<O extends object> = {
  [K in keyof O]?: O[K] extends object ? DeepPartial<O[K]> : O[K];
};

function isObject(item: any): boolean {
  return item !== null && typeof item === 'object' && !Array.isArray(item);
}

export function mergeDeep<T extends object>(target: T, ...sources: Array<DeepPartial<T>>): T {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
      for (const key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
              const sourceValue = source[key];
              if (isObject(sourceValue) && isObject(target[key])) {
                  target[key] = mergeDeep(target[key] as any, sourceValue as any);
              } else {
                  (target as any)[key] = sourceValue;
              }
          }
      }
  }
  return mergeDeep(target, ...sources);
}