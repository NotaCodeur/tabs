export function startLayoutTransition(callback: () => void) {
  return async () => {
    // Fallback
    if (!(document as any).createDocumentTransition) {
      await callback();
      return;
    }

    const pageTransition = (document as any).createDocumentTransition();
    await pageTransition.start(callback);
  };
}
