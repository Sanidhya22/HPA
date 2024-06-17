import { JwtPayload } from 'jwt-decode';
import { WatchlistItem } from '../Types/dashboardSlice';

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

export const transformObjectToArray = (sourceObj: WatchlistItem) => {
  // Split the items string by comma to get individual items
  const itemsArray: string[] = sourceObj.items
    .split(', ')
    .map((item) => item.trim());

  // Map each item to a symbol object
  const symbols = itemsArray.map((item) => ({
    name: item,
    displayName: item,
  }));

  // Construct the array entry with the transformed items
  const arrayEntry = {
    name: sourceObj.title,
    originalName: sourceObj.title,
    symbols: symbols,
  };

  // Wrap the entry in an array and return
  return [arrayEntry];
};

export const isTokenExpired = (payload: JwtPayload) => {
  try {
    const currentTime = Date.now() / 1000;
    return payload.exp! < currentTime;
  } catch (error) {
    console.error('Error decoding the token:', error);
    return true;
  }
};
