export var isEmailFormat = function (v) { return (!/\S+@\S+\.\S+/.test(v) ? "Email is invalid" : null); };
