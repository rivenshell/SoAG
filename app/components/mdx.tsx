// Alternative approach: Simple markdown-like parsing
export function CustomMDX({ source }: { source: string }) {
  // Simple HTML rendering for testing
  const htmlContent = source
    .replace(/^# (.*$)/gm, "<h1>$1</h1>")
    .replace(/^## (.*$)/gm, "<h2>$1</h2>")
    .replace(/^### (.*$)/gm, "<h3>$1</h3>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[h|p|u|o])(.+)$/gm, "<p>$1</p>")
    .replace(/<p><\/p>/g, "")

  return (
    <div className="prose" dangerouslySetInnerHTML={{ __html: htmlContent }} />
  )
}
