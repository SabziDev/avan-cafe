const reserveYourTableSectionFormFields = [
  {
    id: `reserve-your-table-${1}`,
    type: "text",
    placeholder: "نام و نام خانوادگی",
  },
  { id: `reserve-your-table-${2}`, type: "number", placeholder: "شماره تماس" },
  {
    id: `reserve-your-table-${3}`,
    type: "select",
    options: [
      { id: `reserve-your-table-${11}`, value: 4 },
      { id: `reserve-your-table-${12}`, value: 5 },
      { id: `reserve-your-table-${13}`, value: 6 },
      { id: `reserve-your-table-${14}`, value: 7 },
      { id: `reserve-your-table-${15}`, value: 8 },
    ],
  },
  {
    id: `reserve-your-table-${4}`,
    type: "text",
    placeholder: "تاریخ و ساعت رزرو",
  },
  {
    id: `reserve-your-table-${5}`,
    type: "textarea",
    placeholder: "اگه توضیح اضافه ای داری اینجا بنویس...",
  },
];

export default reserveYourTableSectionFormFields;
