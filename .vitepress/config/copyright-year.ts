const START_YEAR = 2026;
const currentYear = new Date().getFullYear();

let copyrightYear: string;
if (currentYear === START_YEAR) {
  copyrightYear = `${START_YEAR}`;
} else if (currentYear === START_YEAR + 1) {
  copyrightYear = `${START_YEAR}, ${currentYear}`;
} else {
  copyrightYear = `${START_YEAR}-${currentYear}`;
}

export default copyrightYear;
