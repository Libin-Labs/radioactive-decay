import { remaining, elapsedForFraction } from '@lp-labs/radioactive-decay';
if (Math.abs(remaining(100, elapsedForFraction(0.25, 5), 5) - 25) > 1e-12) throw new Error('Decay');
// @ts-expect-error invalid argument must be rejected by declarations
remaining('100', 5, 5);
