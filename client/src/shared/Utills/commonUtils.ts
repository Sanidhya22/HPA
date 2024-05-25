export const classify = (classes: object) => Object.values(classes).join(' ');

interface ChartLinkScannerItem {
  title: string;
  link: string;
  description: string;
}

export const searchItems = <T extends ChartLinkScannerItem>(
  searchTerm: string,
  items: Array<T>
): Array<T> => {
  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(lowerCaseSearchTerm)
  );

  return filteredItems;
};
