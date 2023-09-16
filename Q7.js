function generateRandomHexadecimal() {
    const characters = '0123456789ABCDEF';
    let randomHex = '0x';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomHex += characters.charAt(randomIndex);
    }
    return randomHex;
  }
  
  const randomHexadecimal = generateRandomHexadecimal();
  console.log('Random Hexadecimal:', randomHexadecimal);
  