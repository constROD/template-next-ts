/* eslint-disable no-console */
import { format } from 'date-fns';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { formatDate, logger, makeImageUrl, wait } from './commons';

describe('formatDate', () => {
  it('should return an empty string when date is null', () => {
    expect(formatDate(null)).toMatchInlineSnapshot('""');
  });

  it('should return a correctly formatted date string', () => {
    const date = new Date('2022-01-01T00:00:00Z');
    const expected = format(date, 'yyyy-MM-dd HH:mm:ss xx');

    expect(formatDate(date)).toBe(expected);
  });

  it('should return a correctly formatted date string with custom format', () => {
    const date = new Date('2022-01-01T00:00:00Z');
    const customFormat = 'yyyy/MM/dd';
    const expected = format(date, customFormat);

    expect(formatDate(date, customFormat)).toBe(expected);
  });
});

describe('logger', () => {
  const originalConsoleLog = console.debug;

  beforeEach(() => {
    console.debug = vi.fn();
  });

  afterEach(() => {
    console.debug = originalConsoleLog;
  });

  it('should call console.debug with correct format', () => {
    const testData = { path: '/test', event: 'test_event', log: { message: 'test_message' } };
    const date = format(new Date(), 'yyyy/MM/dd hh:mm:ss');
    const expectedMessage = `[${date}]: ${testData.path} (${testData.event}) >> `;

    logger(testData);

    expect(console.debug).toHaveBeenCalledWith(
      expectedMessage,
      JSON.stringify(testData.log, null, 2)
    );
  });
});

describe('wait', () => {
  it('should wait for the specified time', async () => {
    const startTime = Date.now();
    const waitTime = 500; // milliseconds

    await wait(waitTime);

    const endTime = Date.now();
    const elapsedTime = endTime - startTime;

    expect(elapsedTime).toBeGreaterThanOrEqual(waitTime);
    expect(elapsedTime).toBeLessThanOrEqual(waitTime + 20);
  });
});

describe('makeImageUrl', () => {
  it('should create a correct image URL with default domain and version', () => {
    const url = '/test.jpg';

    expect(makeImageUrl({ url })).toMatchInlineSnapshot('"/assets/test.jpg?v=1.0.0"');
  });

  it('should create a correct image URL with custom domain and version', () => {
    const customDomain = 'https://custom.example.com';
    const customVersion = '2.0.0';
    const url = '/test.jpg';

    expect(
      makeImageUrl({ url, domain: customDomain, version: customVersion })
    ).toMatchInlineSnapshot('"https://custom.example.com/test.jpg?v=2.0.0"');
  });
});
