// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// Check phone number
test('Checks for true phone number', () => {
    const phoneNum = '157-284-1074'
    expect(functions.isPhoneNumber(phoneNum)).toBe(true);
});

test('Checks for true phone number', () => {
    const phoneNum = '773-307-8857'
    expect(functions.isPhoneNumber(phoneNum)).toBe(true);
});

test('Checks for false phone number', () => {
    const phoneNum = '38964298748-str-0123'
    expect(functions.isPhoneNumber(phoneNum)).toBe(false);
});

test('Checks for false phone number', () => {
    const phoneNum = '1234567890'
    expect(functions.isPhoneNumber(phoneNum)).toBe(false);
});

// Check for email
test('Checks for valid email', () => {
    const email = 'zsui@gmail.com'
    expect(functions.isEmail(email)).toBe(true);
});

test('Checks for valid email', () => {
    const email = 'szy001018@yahoo.com'
    expect(functions.isEmail(email)).toBe(true);
});

test('Checks for nonvalid email', () => {
    const email = ' email'
    expect(functions.isEmail(email)).toBe(false);
});

test('Checks for nonvalid email', () => {
    const email = 'github.com'
    expect(functions.isEmail(email)).toBe(false);
});

// Check for password
test('Checks for password', () => {
    const password = 'szy001018'
    expect(functions.isStrongPassword(password)).toBe(true);
});

test('Checks for password', () => {
    const password = 'mirada2021'
    expect(functions.isStrongPassword(password)).toBe(true);
});

test('Checks for password', () => {
    const password = '45&'
    expect(functions.isStrongPassword(password)).toBe(false);
});

test('Checks for password', () => {
    const password = '12345678'
    expect(functions.isStrongPassword(password)).toBe(false);
});

// Check for date
test('Checks for valid date', () => {
    const date = '08/11/2001'
    expect(functions.isDate(date)).toBe(true);
});

test('Checks for valid date', () => {
    const date = '11/13/2021'
    expect(functions.isDate(date)).toBe(true);
});

test('Checks for invalid date', () => {
    const date = '30/52/70'
    expect(functions.isDate(date)).toBe(false);
});

test('Checks for invalid date', () => {
    const date = '11/111/1111'
    expect(functions.isDate(date)).toBe(false);
});

// Check for color
test('Checks for valid hex color', () => {
    const color = 'FFF'
    expect(functions.isHexColor(color)).toBe(true);
});

test('Checks for valid hex color #2', () => {
    const color = 'FF5733'
    expect(functions.isHexColor(color)).toBe(true);
});

test('Checks for invalid hex color', () => {
    const color = '12'
    expect(functions.isHexColor(color)).toBe(false);
});

test('Checks for invalid hex color #2', () => {
    const color = 'FFFF'
    expect(functions.isHexColor(color)).toBe(false);
});