# Custom Exception Filter

A NestJS mini-project demonstrating a global exception filter that returns a consistent, standardized error response format across the entire application.

## How It Works

- Every exception thrown anywhere in the app (controllers, services, guards) is caught by `HttpExceptionFilter`.
- Instead of NestJS's default error shape, every error response follows the same fixed structure.
- The filter is registered globally, so no manual wiring is needed per route.

## Response Format

```json
{
  "success": false,
  "statusCode": 404,
  "message": "it is the test error",
  "timeStamp": "2026-08-06T15:06:54.000Z",
  "path": "/test-error"
}
```

## Setup

```bash
pnpm install
```

## Running

```bash
pnpm run start:dev
```

The server runs on `http://localhost:3000`.

## Testing

A temporary endpoint is included to trigger a sample error:

```
GET /test-error
```

This throws a `NotFoundException`, which the filter catches and formats.

## Tech Stack

- NestJS
- Express (default HTTP adapter)

## What I Learned

- Writing a custom filter using the `ExceptionFilter` interface and `@Catch()` decorator
- The difference between `implements` (interface contract, no inherited code) and `extends` (inheritance, code is inherited)
- Accessing `request`/`response` via `ArgumentsHost` (the filter-side counterpart to a guard's `ExecutionContext`)
- Reading exception details with `HttpException`'s `getStatus()` and `getResponse()`
- Registering a global filter using the `APP_FILTER` token (same pattern as `APP_GUARD`)
- The relationship between NestJS and its underlying HTTP platform (Express/Fastify)