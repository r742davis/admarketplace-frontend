export const isEmailFormat = (v: string) => (!/\S+@\S+\.\S+/.test(v) ? "Email is invalid" : null);
