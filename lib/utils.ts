export function addCommas(x: number): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//This component when used to wrap the Balanace component, helps us get the needed commas for number values
