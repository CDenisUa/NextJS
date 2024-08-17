import '@testing-library/jest-dom';
import ResizeObserver from 'resize-observer-polyfill';

global.ResizeObserver = ResizeObserver;

beforeAll(() => {
    Element.prototype.hasPointerCapture = () => false;
    Element.prototype.setPointerCapture = () => {};
});