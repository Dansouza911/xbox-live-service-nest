import { UnprocessableEntityException } from '@nestjs/common';

export const handleError = (error: Error): never => {
  const errorLines = error.message?.split('\n');
  const lastErrorLine = errorLines[errorLines.length - 1]?.trim();
  throw new UnprocessableEntityException(
    lastErrorLine || 'An error occurred while executing the operation',
  );
};
