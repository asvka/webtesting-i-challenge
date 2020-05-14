module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const minEnhancement = 0;
  const maxEnhancement = 20;
  
  if (item.enhancement < maxEnhancement) {
    item.enhancement++;
  }
  if (item.enhancement < minEnhancement) {
    item.enhancement = 0;
  }
  
  return { ...item };
}

function fail(item) {
  if (item.enhancement < 15) {
    item.durability = item.durability - 5;
  } 
    else if (item.enhancement > 15) {
    item.durability = item.durability - 10;
      } 
      else if (item.enhancement > 16) {
    item.durability = item.durability--;
          };
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
