const data = require('../data/timesheet.json');

function generateBilling(records) {
  return records.map(r => {
    const total = r.hours * r.rate;
    return {
      employee: r.employee,
      total_amount: total
    };
  });
}

const output = generateBilling(data.records);

console.log("Billing Output:", output);
