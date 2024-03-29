/* eslint-disable no-console */
import dayjs from 'dayjs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { CommonUtil } from './commons';

describe('formatDate', () => {
  it('should return an empty string when date is null', () => {
    expect(CommonUtil.formatDate(null)).toMatchInlineSnapshot('""');
  });

  it('should return a correctly formatted date string', () => {
    const date = new Date('2022-01-01T00:00:00Z');
    expect(CommonUtil.formatDate(date)).toMatchInlineSnapshot('"2022-01-01 08:00:00 +08:00"');
  });

  it('should return a correctly formatted date string with custom format', () => {
    const date = new Date('2022-01-01T00:00:00Z');
    const customFormat = 'YYYY/MM/DD';
    expect(CommonUtil.formatDate(date, customFormat)).toMatchInlineSnapshot('"2022/01/01"');
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
    const date = dayjs().format('YYYY/MM/DD hh:mm:ss');
    const expectedMessage = `[${date}]: ${testData.path} (${testData.event}) >> `;

    CommonUtil.logger(testData);

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

    await CommonUtil.wait(waitTime);

    const endTime = Date.now();
    const elapsedTime = endTime - startTime;

    expect(elapsedTime).toBeGreaterThanOrEqual(waitTime);
    expect(elapsedTime).toBeLessThanOrEqual(waitTime + 20);
  });
});

describe('makeImageUrl', () => {
  it('should create a correct image URL with default domain and version', () => {
    const path = '/test.jpg';

    expect(CommonUtil.makeImageUrl({ path })).toMatchInlineSnapshot('"/assets/test.jpg?v=1.0.0"');
  });

  it('should create a correct image URL with custom domain and version', () => {
    const customDomain = 'https://custom.example.com';
    const customVersion = '2.0.0';
    const path = '/test.jpg';

    expect(
      CommonUtil.makeImageUrl({ path, domain: customDomain, version: customVersion })
    ).toMatchInlineSnapshot('"https://custom.example.com/test.jpg?v=2.0.0"');
  });
});
