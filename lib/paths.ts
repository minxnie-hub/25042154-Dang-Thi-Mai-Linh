export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (value: string) => `${basePath}${value}`;
