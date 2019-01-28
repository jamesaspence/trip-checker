export function isEmpty(value) {
  return typeof value !== 'string' || value.trim() === '';
}

export function validateEmpty(values, fields) {
  const errors = {};

  Object.keys(fields).forEach(field => {
    if (isEmpty(values[field])) {
      errors[field] = `Please provide a ${fields[field]}.`;
    }
  });

  return errors;
}