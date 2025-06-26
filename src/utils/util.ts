export function generatePassword(): string {
  return '1234';
}

export async function generateEmail(firstName: string, lastName: string): Promise<string> {
  if (firstName != '' && lastName != '') {
    return `${firstName}${lastName}@email.edu.ph`;
  }

  throw new Error('Cannot generate email');
}

export function formatError(err: string): string[] {
  return err.split(' at ');
}
