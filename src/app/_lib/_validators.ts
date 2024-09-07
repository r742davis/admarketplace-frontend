export const required = (v: string) => (!v ? "This field is required." : null);
export const emailFormat = (v: string) => (!/\S+@\S+\.\S+/.test(v) ? "Email is invalid." : null);
