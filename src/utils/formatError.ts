export function formatError(err: string): string[] {
	return err.split(" at ");
}
