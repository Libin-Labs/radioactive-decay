function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
function output(value: number): number {
  if (!Number.isFinite(value)) throw new RangeError('Result overflow');
  return value;
}
export function remaining(initial: number, elapsed: number, halfLife: number): number {
  finite(initial, 0, 1e100);
  finite(elapsed, 0, 1e100);
  finite(halfLife, 1e-100, 1e100);
  return initial * Math.exp(-Math.LN2 * (elapsed / halfLife));
}
export function elapsedForFraction(fraction: number, halfLife: number): number {
  finite(fraction, Number.MIN_VALUE, 1);
  finite(halfLife, 1e-100, 1e100);
  return fraction === 1 ? 0 : output((-Math.log(fraction) / Math.LN2) * halfLife);
}
