/**
 * Truncates an string to the format 00000…0000
 * @param string Full string to truncate
 * @param startLength Start truncation length
 * @param endLength End truncation length
 * @returns Truncated string
 */
export const truncateStringHoc = ({
  string,
  startLength,
  endLength,
}: {
  string: string;
  startLength: number;
  endLength: number;
}) => {
  const match = string.match(
    new RegExp(
      `^([a-zA-Z0-9_-]{${startLength}})[a-zA-Z0-9_-]+([a-zA-Z0-9_-]{${endLength}})$`
    )
  );
  if (!match) return string;
  return `${match[1]}…${match[2]}`;
};

export const truncateCustomText = ({
  text,
  startLength = 5,
  endLength = 3,
}: {
  text: string;
  startLength?: number;
  endLength?: number;
}) => {
  return truncateStringHoc({ string: text, startLength, endLength });
};

/**
 * Truncates an ethereum address to the format 0x0000…0000
 * @param address Full address to truncate
 * @returns Truncated address
 */
export const truncateEthAddress = (address: string) => {
  return truncateStringHoc({ string: address, startLength: 5, endLength: 3 });
};
