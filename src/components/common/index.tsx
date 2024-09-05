/*direct user to a new page window*/
export function handleClick(url: string): void {
    console.log("Button clicked");
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  