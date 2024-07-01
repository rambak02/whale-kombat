/** Оба файла в папке utils не являются утилитами. Утилиты - вспомогательные функции.
 *  Для этого случая предлагаю создать папку mocks, если эти данные используются как моки,
 *  или же перенести в папку для констант проекта/части проекта, если эти данные будут
 *  использованы в готовом проекте.
 */


export const initialCompanies = [
  {
    name: "Binance",
    icon: "../../..//CompanyIcon/binance.png",
    selected: true,
  },
  {
    name: "Bybit",
    icon: "../../..//CompanyIcon/bybit.png",
    selected: false,
  },
  {
    name: "OKX",
    icon: "../../..//CompanyIcon/OKX.png",
    selected: false,
  },
  {
    name: "Kucoin",
    icon: "../../..//CompanyIcon/Kucoin.png",
    selected: false,
  },
  {
    name: "Gate.io",
    icon: "../../..//CompanyIcon/GateIo.png",
    selected: false,
  },
];
