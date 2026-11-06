# @lp-labs/radioactive-decay

Generic exponential half-life decay and inverse time arithmetic.

Original, standalone MIT TypeScript implementation with **zero runtime or peer dependencies**. ESM/CommonJS exports and separate declarations; Node18+ and compatible ES2022 browsers. No service, filesystem, network, clock or browser globals accessed on import. Compiler/formatter dependencies are development-only.

## Install

```sh
npm install @lp-labs/radioactive-decay
```

## Working example

```js
import { remaining, elapsedForFraction } from '@lp-labs/radioactive-decay';
if (Math.abs(remaining(100, elapsedForFraction(0.25, 5), 5) - 25) > 1e-12) throw new Error('Decay');
```

CommonJS: `const api = require('@lp-labs/radioactive-decay')`.

## Behavior, customization and limits

remaining(initial,elapsed,halfLife) uses initial*exp(-ln2*elapsed/halfLife); initial[0,1e100],elapsed[0,1e100],halfLife[1e-100,1e100],all finite and units must match. elapsedForFraction(f,halfLife) requires f in(0,1],returns -log(f)*halfLife/ln2. Generic educational decay model only,no material handling,dosimetry,medical,safety or radiological guidance. Underflowed negligible remaining quantity0 explicitly allowed; inverse overflow throws. Constant time.

Use the explicit function arguments and public types below to customize the documented behavior. There are no hidden environment settings or sibling-library requirements. Array inputs must be dense; sparse entries are invalid. Inputs are validated before a successful result is returned. Outputs do not mutate caller-owned inputs. Hostile proxies/getters and concurrent mutation are outside the contract.

## Errors and integration

Invalid data never produces an empty success-shaped substitute. TypeError reports incompatible runtime types/nonfinite numbers; RangeError reports unsupported ranges, invalid syntax, inconsistent states and exceeded budgets. Functions that explicitly return null, false or empty arrays describe those legitimate outcomes above. Errors propagate to callers; UI applications should catch at their boundary and visibly notify users. Numerical calculations use JavaScript IEEE754 unless the API explicitly uses bigint; compare approximate numerical results with application-appropriate tolerances.

## Complete public API

```ts
export declare function remaining(initial: number, elapsed: number, halfLife: number): number;
export declare function elapsedForFraction(fraction: number, halfLife: number): number;
```

## Performance and portability

Complexity and resource ceilings are specified above. Buffered synchronous algorithms do not create workers or timers; callers can move expensive work to their own worker. Limits are enforced, not silently truncated. No runtime imports from any other library. No compatibility or completeness claims beyond the stated scope.

## Support

If this library is useful to you, consider supporting its maintenance with a [donation via PayPal](https://www.paypal.me/LibinPrasanth).

## Author

Created by [Libin Prasanth](https://www.linkedin.com/in/libinprasanth/). Connect on LinkedIn for updates and discussion.
