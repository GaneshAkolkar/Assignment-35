const now = new Date();

// a. YYYY-MM-DD HH:mm
const formattedDate1 = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
console.log('YYYY-MM-DD HH:mm:', formattedDate1);

// b. DD-MM-YYYY HH:mm
const formattedDate2 = `${String(now.getDate()).padStart(2, '0')}-${String(now.getMonth() + 1).padStart(2, '0')}-${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
console.log('DD-MM-YYYY HH:mm:', formattedDate2);

// c. DD/MM/YYYY HH:mm
const formattedDate3 = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
console.log('DD/MM/YYYY HH:mm:', formattedDate3);
