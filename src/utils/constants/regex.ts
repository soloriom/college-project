const email: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phone: RegExp = /^(\+|\d)[0-9]{6,15}$/;
const gpa: RegExp = /^[0]|[0-3]\.(\d?\d?)|[4].[0]$/;
const text: RegExp = /^[a-zA-Z\s]*$/;
const textNumber: RegExp = /^[a-zA-Z0-9\s]*$/;
const zipcode: RegExp = /(^\d{5}$)/;


export { 
  email, 
  phone,
  gpa,
  text,
  zipcode,
  textNumber
 };