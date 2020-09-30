import moment from "moment";

export const formatMoney = (n: any, currency: string = "") => {
  // eslint-disable-next-line
  var c: any = isNaN((c = Math.abs(c))) ? 2 : c,
    // eslint-disable-next-line
    d: any = d === undefined ? "," : d,
    // eslint-disable-next-line
    t: any = t === undefined ? "." : t,
    // eslint-disable-next-line
    s: any = n < 0 ? "-" : "",
    i: any = String(parseInt((n = Math.abs(Number(n) || 0).toFixed(c)))),
    // eslint-disable-next-line
    j: any = (j = i.length) > 3 ? j % 3 : 0;
  return (
    currency +
    " " +
    s +
    (j ? i.substr(0, j) + t : "") +
    i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
    (c
      ? d +
        Math.abs(n - i)
          .toFixed(c)
          .slice(2)
      : "")
  );
};

export const formatTime = (time: Date): string => {
  const today = moment().format("YYYY-MM-DD");
  return moment(today + " " + time).format("hh:mm A");
};

export const formatDate = (
  date: string,
  to: string = "DD/MM/YYYY",
  from: string = "YYYY-MM-DD HH:mm:ss"
) => {
  return moment(date, from).format(to);
};

export const maxLength = (event: any, quantity: number) => {
  console.log(event);
  return (event: React.ChangeEvent<HTMLInputElement>) => {};
};
