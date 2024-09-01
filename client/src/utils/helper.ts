export function formatDate(dateString: string) {
  const date = new Date(dateString);

  const options = { day: '2-digit', month: 'short', year: 'numeric' };

  return date.toLocaleDateString('en-GB', options);
}
