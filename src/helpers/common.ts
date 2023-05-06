export const arrayUniqueByKey = (items: any[], key: string) => [
  ...new Map(items.map(i => [i[key], i])).values(),
];

export const numWithSpaces = (n: number) => n.toLocaleString();
