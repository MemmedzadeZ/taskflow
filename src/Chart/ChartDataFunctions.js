import ApexCharts from "apexcharts";
export default function getLastMonths() {
  const months = [];
  const currentDate = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  for (let i = 0; i < 6; i++) {
    const monthIndex = (currentDate.getMonth() - i + 12) % 12;
    months.unshift(monthNames[monthIndex]);
  }
  return months;
}
// [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
// ],
